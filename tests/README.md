# Tests

## Install k6
Guide: https://k6.io/docs/getting-started/installation/

## Load test
```bash
$ k6 run load-test.js --out json=results/load-test.json --out csv=results/load-test.csv

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: load-test.js
     output: json (results/load-test.json), csv (results/load-test.csv)

  scenarios: (100.00%) 1 scenario, 100 max VUs, 4m30s max duration (incl. graceful stop):
           * default: Up to 100 looping VUs for 4m0s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


running (4m00.3s), 000/100 VUs, 1763 complete and 0 interrupted iterations
default ✓ [======================================] 000/100 VUs  4m0s

     ✓ logged in successfully
     ✓ user files fetched successfully

     checks.........................: 100.00% ✓ 3526      ✗ 0
     data_received..................: 5.0 MB  21 kB/s
     data_sent......................: 1.8 MB  7.7 kB/s
     http_req_blocked...............: avg=1.23ms   min=0s      med=998.9µs max=35.72ms p(90)=2ms      p(95)=3.27ms
     http_req_connecting............: avg=1.11ms   min=0s      med=754.6µs max=35.72ms p(90)=1.85ms   p(95)=3ms
   ✓ http_req_duration..............: avg=4.7s     min=84.2ms  med=1.69s   max=12.04s  p(90)=11.32s   p(95)=11.54s
       { expected_response:true }...: avg=4.7s     min=84.2ms  med=1.69s   max=12.04s  p(90)=11.32s   p(95)=11.54s
     http_req_failed................: 0.00%   ✓ 0         ✗ 3526
     http_req_receiving.............: avg=216.06µs min=0s      med=0s      max=13.36ms p(90)=507.15µs p(95)=859.65µs
     http_req_sending...............: avg=94.34µs  min=0s      med=0s      max=5.5ms   p(90)=503.7µs  p(95)=998.77µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=4.7s     min=83.83ms med=1.69s   max=12.04s  p(90)=11.32s   p(95)=11.54s
     http_reqs......................: 3526    14.676317/s
     iteration_duration.............: avg=10.42s   min=1.27s   med=12.97s  max=14.18s  p(90)=13.36s   p(95)=13.42s
     iterations.....................: 1763    7.338158/s
     vus............................: 2       min=2       max=100
     vus_max........................: 100     min=100     max=100
```

## Smoke test
```bash
$ k6 run smoke-test.js --out json=results/smoke-test.json --out csv=results/smoke-test.csv

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: smoke-test.js
     output: json (results/smoke-test.json), csv (results/smoke-test.csv)

  scenarios: (100.00%) 1 scenario, 1 max VUs, 4m30s max duration (incl. graceful stop):
           * default: 1 looping VUs for 4m0s (gracefulStop: 30s)


running (4m00.1s), 0/1 VUs, 185 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  4m0s

     ✓ logged in successfully
     ✓ user files fetched successfully

     checks.........................: 100.00% ✓ 370      ✗ 0
     data_received..................: 524 kB  2.2 kB/s
     data_sent......................: 193 kB  805 B/s
     http_req_blocked...............: avg=579.39µs min=0s      med=532.2µs  max=1.95ms   p(90)=786.11µs p(95)=1.02ms
     http_req_connecting............: avg=528.67µs min=0s      med=529.05µs max=1.95ms   p(90)=648.44µs p(95)=777.8µs
   ✓ http_req_duration..............: avg=144.38ms min=78.44ms med=179.99ms max=311.58ms p(90)=204.47ms p(95)=209.12ms
       { expected_response:true }...: avg=144.38ms min=78.44ms med=179.99ms max=311.58ms p(90)=204.47ms p(95)=209.12ms
     http_req_failed................: 0.00%   ✓ 0        ✗ 370
     http_req_receiving.............: avg=121.83µs min=0s      med=0s       max=1.5ms    p(90)=519.71µs p(95)=654.85µs
     http_req_sending...............: avg=47.48µs  min=0s      med=0s       max=997.3µs  p(90)=50.55µs  p(95)=504.83µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=144.21ms min=78.44ms med=179.75ms max=311.58ms p(90)=204.3ms  p(95)=208.58ms
     http_reqs......................: 370     1.540924/s
     iteration_duration.............: avg=1.29s    min=1.26s   med=1.29s    max=1.42s    p(90)=1.31s    p(95)=1.32s
     iterations.....................: 185     0.770462/s
     vus............................: 1       min=1      max=1
     vus_max........................: 1       min=1      max=1


```