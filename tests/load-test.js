import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'http://127.0.0.1';
const EMAIL    = "test@example.com"
const PASSWORD = "password"

export const options = {
    stages: [
      { duration: '1m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
      { duration: '2m', target: 100 }, // stay at 100 users for 10 minutes
      { duration: '1m', target: 0 },   // ramp-down to 0 users
    ],
    thresholds: {
      'http_req_duration': ['p(99)<13000'],      // 99% of requests must complete below 13s
      'logged in successfully': ['p(99)<13000'], // 99% of requests must complete below 13s
    },
};

export default () => {
  const responseLogin = http.post(
    `${BASE_URL}/auth/login`, 
    JSON.stringify({
      email: EMAIL,
      password: PASSWORD,
    }), 
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }
  );

  check(responseLogin, {
    'logged in successfully': (r) => r.status === 200,
  });

  const userFiles = http.get(
      `${BASE_URL}/files/user-files`, 
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${(responseLogin.json().payload.token)}`,
        },
      }
  )

  check(userFiles, {
    'user files fetched successfully': (r) => r.status === 200,
  });

  sleep(1);
};