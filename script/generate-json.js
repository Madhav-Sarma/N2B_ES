const fs = require('fs');
const path = require('path');

// 🟡 Get platform name from CLI
const platform = process.argv[2];
if (!platform) {
  console.error('❌ Please provide a platform name as the first argument.');
  console.error('Example: node script/generate-json.js cses');
  process.exit(1);
}

const platformCapitalized = platform.toUpperCase(); // simple capitalization

const solutionDir = path.join('public', platformCapitalized, `${platformCapitalized}-Solutions`);
const explanationDir = path.join('public', platformCapitalized, `${platformCapitalized}-Explanation`);
const outputFile = path.join('src', 'pages', platformCapitalized, `${platform}-solutions.json`);

function getDateTime() {
  return new Date().toISOString();
}

function generate() {
  const data = {};
  const solutionFiles = fs.existsSync(solutionDir) ? fs.readdirSync(solutionDir) : [];
  const explanationFiles = fs.existsSync(explanationDir) ? fs.readdirSync(explanationDir) : [];

  const explanationMap = new Map();
  for (const file of explanationFiles) {
    if (file.endsWith('.md')) {
      explanationMap.set(path.parse(file).name, `/${platformCapitalized}/${platformCapitalized}-Explanation/${file}`);
    }
  }

  for (const file of solutionFiles) {
    if (file.endsWith('.py')) {
      const name = path.parse(file).name;
      const section = 'All Problems';
      if (!data[section]) data[section] = [];

      const rawTitle = name.replace(/^[0-9]+\)?_?/, '').replace(/_/g, ' ').trim();
      const slug = rawTitle.toLowerCase().replace(/\s+/g, '-');

      data[section].push({
        title: rawTitle,
        slug,
        solution: `/${platformCapitalized}/${platformCapitalized}-Solutions/${file}`,
        explanation: explanationMap.get(name),
        createdAt: getDateTime()
      });

    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
  console.log(`✅ ${platform.toUpperCase()} JSON generated: ${outputFile}`);
}

generate();
