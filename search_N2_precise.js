import fs from 'fs';

const data = fs.readFileSync('/tmp/bundle.js', 'utf8');

// Search for "const N2 =" or "N2 =" or "var N2 =" in `/tmp/bundle.js`
const regexes = [
  /\bN2\s*=\s*/,
  /\bN2\b/
];

for (const r of regexes) {
  let match = r.exec(data);
  if (match) {
    console.log(`Found match for ${r.toString()} at index ${match.index}:`);
    console.log(data.slice(match.index - 100, match.index + 200));
    console.log("====================");
  }
}
