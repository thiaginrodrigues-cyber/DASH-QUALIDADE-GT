import fs from 'fs';

const data = fs.readFileSync('/tmp/bundle.js', 'utf8');

let pos = 0;
while (true) {
  pos = data.indexOf("kc", pos);
  if (pos === -1) break;
  // let's look for assignments of kc as a variable or function
  const surrounding = data.slice(Math.max(0, pos - 15), Math.min(data.length, pos + 25));
  if (/^[^a-zA-Z0-9]kc[^a-zA-Z0-9]/.test(surrounding) || surrounding.includes("kc=") || surrounding.includes("const kc") || surrounding.includes("function kc")) {
    console.log(`Found candidate at index ${pos}:`);
    console.log(data.slice(pos - 100, pos + 150));
    console.log("====================");
  }
  pos += 2;
}
