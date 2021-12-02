import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'http://127.0.0.1';
const EMAIL    = "test@example.com"
const PASSWORD = "password"

export const options = {
  vus: 1,           // 1 user looping for 1 minute
  duration: '4m',   // 1 minute

  thresholds: {
    http_req_duration: ['p(99)<13000'], // 99% of requests must complete below 13s
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