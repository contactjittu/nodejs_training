const fs = require('fs');
const path = require('path');
const fileName = path.join(__dirname, process.argv[2] || 'app.log');
const file = fs.createWriteStream(fileName);

for(let i=0; i<= 1e6; i++) {
  file.write('React Quickly: Painless web apps with React, JSX, Redux, and GraphQL.\n')
}

file.end();
