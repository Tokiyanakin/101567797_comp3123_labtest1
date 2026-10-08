const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

// Step 1: Remove existing log files
if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);

    files.forEach(file => {
        console.log(`Deleting file: ${file}`);
        fs.unlinkSync(path.join(logsDir, file));
    });

    fs.rmdirSync(logsDir);
    console.log('Logs directory removed');
}

// Step 2: Create Logs directory
fs.mkdirSync(logsDir);

console.log('Logs directory created');

// Step 3: Change current working directory
process.chdir(logsDir);

// Step 4: Create 10 log files
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;

    fs.writeFileSync(fileName, `This is log file ${i}`);

    console.log(`Created file: ${fileName}`);
}