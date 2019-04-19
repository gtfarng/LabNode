import {check,sleep} from 'k6'
import http from 'k6/http'

export default () => {
   let res=http.get('http://192.168.1.100')
   check(res, { "is status 200": (r) => r.status === 200 })
   sleep(3)
}

