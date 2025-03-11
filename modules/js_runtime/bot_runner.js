const { exec } = require("child_process");

function executeScript(script) {
    exec(script, (error, stdout, stderr) => {
        if (error) {
            console.error(`Ошибка: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Ошибка выполнения: ${stderr}`);
            return;
        }
        console.log(`Выходные данные: ${stdout}`);
    });
}

executeScript(process.argv[2]);