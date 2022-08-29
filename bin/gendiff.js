#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';

program
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1', '-V, --version', 'output the version number')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format <type>', 'output format')
    .action((filepath1, filepath2) => {
        const diff = genDiff(filepath1, filepath2,);
        console.log(diff);
    });
program.parse();
