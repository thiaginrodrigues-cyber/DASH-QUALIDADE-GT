import fs from 'fs';

const data = fs.readFileSync('/tmp/bundle.js', 'utf8');

let pos = 0;
while (true) {
  pos = data.indexOf("Nx=", pos);
  if (pos === -1) break;
  console.log(`Found Nx= at index: ${pos}`);
  console.log(data.slice(pos - 50, pos + 150));
  console.log("====================");
  pos += 3;
}
