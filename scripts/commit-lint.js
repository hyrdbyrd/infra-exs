const chalk = require('chalk');

const { writeFileSync, readFileSync } = require('fs');

const { execSync } = require('child_process');

const ticketRegexp = /^TICKET-[0-9]+/;

const pathToCommitMessage = process.env.HUSKY_GIT_PARAMS;

const commitMessage = readFileSync(pathToCommitMessage).toString();

if (ticketRegexp.test(commitMessage) || commitMessage.startsWith('fixup! ')) {
    return;
}

// Команда которая просто выведет текущую ветку
const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString();

if (ticketRegexp.test(branchName)) {
    const [ticket] = ticketRegexp.exec(branchName);
    // Изменяем сообщение коммита, добавляя префиксом номер тикета
    writeFileSync(pathToCommitMessage, `${ticket}: ${commitMessage}`);
    return;
}

console.error(chalk.redBright('В сообщении коммита не указан номер тикета.'))
console.error(chalk.redBright('Не удалось взять номер тикета из ветки: ветка не содержит номер.'));

process.exit(1);
