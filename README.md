# K6 Sample Script

## What script does?

This is a very simple k6 script just intended to be a very starting point of k6 scripting exercise.
It can basically send HTTP GET request to any endpont and verify that it gets http 200 response.

## What kind of parameters it has?

Currently script has only 1 custom paramater that can be passed via command line. 

| No | Paramater Name | Parameter Description                                |
|----|----------------|------------------------------------------------------|
| 1  | ENDPOINT       | endpoint address, example: google.com, 1.2.3.4 etc.. |
|    |                |                                                      |
|    |                |                                                      |

## How to run the script?

Follow https://k6.io/docs/getting-started/installation/ this link to install k6 first. 

```
k6 run --vus 10 --duration 90s --out influxdb=http://[influxDB-Endpoint-here]:8086/myk6db -e ENDPOINT=1.2.3.4 k6-sample-script.js
```

| No | Paramater Name | Parameter Description                                |
|----|----------------|------------------------------------------------------|
| 1  | vus       | how many concurrent users?|
|  2  |       duration         |     how long the test should run                                                 |
|   3 |          --out influxdb      |      if you would like metrics visible in grafana, you this option, otherwise can be removed                                                |
## How to setup InfluxDB and Grafana integration

Please, follow this link:
https://k6.io/docs/results-visualization/influxdb-+-grafana/
