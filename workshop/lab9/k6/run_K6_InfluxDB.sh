docker run --net="host" -i loadimpact/k6 run --out influxdb=http://192.168.1.100:8086/k6 - < samples/es6sample.js
