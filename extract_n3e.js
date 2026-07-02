import fs from 'fs';

const data = fs.readFileSync('/tmp/bundle.js', 'utf8');

const target = 'const n3e=';
const pos = data.indexOf(target);
if (pos !== -1) {
  // Balanced braces for n3e
  const braceIndex = data.indexOf('{', pos);
  let count = 1;
  let i = braceIndex + 1;
  while (count > 0 && i < data.length) {
    if (data[i] === '{') {
      count++;
    } else if (data[i] === '}') {
      count--;
    }
    i++;
  }
  const body = data.slice(pos, i);
  console.log("Full n3e body size:", body.length);
  fs.writeFileSync('./extracted_n3e.js', body);
} else {
  console.log("Could not find n3e=");
}
