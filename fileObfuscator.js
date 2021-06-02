const fs = require("fs");
const obfuscator = require("javascript-obfuscator");

fs.readFile("script.ts", "UTF-8", function (err, data) {
  if (err) throw err;

  let result = obfuscator.obfuscate(data);
  console.log(result);
  fs.writeFile("./sc.ts", result.getObfuscatedCode(), (err, data) => {
    if (err) console.log(err);
    console.log("The file has been obfuscated!");
  });
});
