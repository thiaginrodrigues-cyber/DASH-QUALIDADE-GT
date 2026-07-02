import fs from 'fs';

const data = fs.readFileSync('/tmp/bundle.js', 'utf8');

const targets = ["N2", "VDe", "nPe"];

for (const t of targets) {
  let pos = 0;
  let found = false;
  while ((pos = data.indexOf(t + "=", pos)) !== -1) {
    console.log(`Found '${t}=' at index ${pos}`);
    console.log(data.slice(pos - 100, pos + 200));
    console.log("====================");
    pos += t.length + 1;
    found = true;
  }
  if (!found) {
    pos = 0;
    let occurrences = 0;
    while ((pos = data.indexOf(t, pos)) !== -1 && occurrences < 2) {
      console.log(`Occurrence of '${t}' at index ${pos}`);
      console.log(data.slice(pos - 100, pos + 150));
      console.log("====================");
      pos += t.length;
      occurrences++;
    }
  }
}
