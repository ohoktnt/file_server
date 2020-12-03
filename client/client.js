// Creating the Client (Computer B)

const net = require('net');
// const request = require('request');
const readline = require('readline');
const client = require('../../snake-client/client');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const conn = net.createConnection({ 
  host: 'localhost', // change to IP address of computer or ngrok host if tunneling
  port: 3000 // or change to the ngrok port if tunneling
});

conn.setEncoding('utf8'); // interpret data as text

conn.on('data', (data) => {
  console.log('Server: ', data);
});

conn.on('connect', () => {
  conn.write('Hello from client!');
});

// sends message to server
rl.on('line', (input) => {
  conn.write(input);
})

conn.on('close', () => {
  console.log('server has closed');
  process.exit();
})
