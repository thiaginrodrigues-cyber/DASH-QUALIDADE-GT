import fs from 'fs';

const data = fs.readFileSync('/tmp/bundle.js', 'utf8');

// Search for XLSX.read or something similar or standard SheetJS read function
// Usually SheetJS provides read, utils, write etc.
// Let's search where "read" is exported or used in XLSX.
let pos = 0;
let found = 0;
while ((pos = data.indexOf('.read=', pos)) !== -1 && found < 5) {
  console.log(`Found '.read=' at index ${pos}`);
  console.log(data.slice(pos - 100, pos + 100));
  console.log("-------------------");
  pos += 6;
  found++;
}
pos = 0;
found = 0;
while ((pos = data.indexOf('read(', pos)) !== -1 && found < 5) {
  console.log(`Found 'read(' at index ${pos}`);
  console.log(data.slice(pos - 50, pos + 150));
  console.log("-------------------");
  pos += 5;
  found++;
}
