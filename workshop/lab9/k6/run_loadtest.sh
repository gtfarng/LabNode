docker run --net="host" -i loadimpact/k6 run --out influxdb=http://192.168.1.100:8086/k10 --vus 10 --duration 180s  - < script.js
