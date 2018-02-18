var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr,true);

console.log(q);

/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:8080',
  port: '8080',
  hostname: 'localhost',
  hash: null,
  search: '?year=2017&month=february',
  query: { year: '2017', month: 'february' },
  pathname: '/default.htm',
  path: '/default.htm?year=2017&month=february',
  href: 'http://localhost:8080/default.htm?year=2017&month=february' }

*/


console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'