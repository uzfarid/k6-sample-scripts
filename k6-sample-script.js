
import http from 'k6/http';
import { check, sleep } from 'k6';

//default parameters
const thinkTime=1;

export default function () {
    // script can send GET request against any endpoint provided by command line: -e ENDPOINT=1.2.3.4
    const res = http.get(`http://${__ENV.ENDPOINT}/`);

    //response validation
  check(res, {
    'response code was 200': (res) => res.status == 200,
  });
  sleep(thinkTime);
}
