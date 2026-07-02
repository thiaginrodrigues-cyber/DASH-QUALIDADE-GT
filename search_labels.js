import fs from 'fs';

const data = fs.readFileSync('/tmp/bundle.js', 'utf8');

const queries = ['displayName="Label"', 'displayName="LabelList"'];

for (const q of queries) {
  let pos = data.indexOf(q);
  if (pos !== -1) {
    console.log(`Found ${q} at index ${pos}`);
    console.log(data.slice(pos - 150, pos + 100));
    console.log("====================");
  } else {
    console.log(`Not found: ${q}`);
  }
}
