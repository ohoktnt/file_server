// Creating a Server (Computer A)

const net = require('net');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const server = net.createServer();

// add this line after server is created, before listen is called
server.on('connection', (client) => {
  console.log('New client connected!');
  client.setEncoding('utf8'); // interpret data as text
  client.write('Hello there! To request file, type: send <FILENAME>');

  client.on('data', (data) => {
    if(data.includes('send')) {
      // if send request is given to server. assign file name to variable
      // let fileName = data.slice(5)
      if(data.includes('file1')) {
        client.write('looking for file1');
      } else if (data.includes('file2')) {
        client.write('looking for file2');
      } else if (data.includes('file3')) {
        client.write('looking for file3');
      } else {
        client.write('you want me to send what?')
      }
    }
    console.log('Client: ', data)
  });
  
  client.on('close', () => {
    console.log('client has left')
  })
});

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});