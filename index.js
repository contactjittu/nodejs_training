const fs = require('fs');

fs.writeFile('test.txt', 'Hello World!', (err) => {
  if (err) throw err;
  fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    else console.log(data)
  })
});
