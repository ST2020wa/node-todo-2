const program = require('commander');

program
    .option('-x, --xxx', 'what the x')
program
    .command('add')
    .description('add a task')
    .action((x, y, k, j) => {
        console.log(x, y, k, j)
    });

program.parse(process.argv);
