const moment = require('moment')

const time1 = moment('2022-06-08T19:05:04.912Z');
const time2 = moment('2022-06-01T19:05:04.912Z');

const today = moment()
console.log(today.toISOString())
console.log(today.dayOfYear())
console.log(time1.week())
console.log(time2.week())