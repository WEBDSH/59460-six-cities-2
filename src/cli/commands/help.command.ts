import type { Command } from './command.interface.js';
import chalk from 'chalk';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public execute(..._args: string[]): void {
    console.info(`
        Программа для подготовки данных для REST API сервера.
        Пример:
            cli.js --<command> [--arguments]
        Команды:
            ${chalk.yellow('--version')}:                   # выводит номер версии
            ${chalk.yellow('--help')}:                      # печатает этот текст
            ${chalk.yellow('--import <path>')}:             # импортирует данные из TSV
    `);
  }
}
