import fs from 'fs';

const data = fs.readFileSync('/tmp/bundle.js', 'utf8');

const target = 'const n3e=';
const pos = data.indexOf(target);
if (pos !== -1) {
  console.log(data.slice(pos, pos + 2500));
} else {
  console.log("Could not find n3e=");
}
