import { Command } from './command.interface.js';
import axios from 'axios';
import {MockServerData} from '../../shared/types/index.js';
import {TSVOfferGenerator} from '../../shared/libs/offeer-generator/index.js';
import {TSVFileWriter} from '../../shared/libs/file-writer/index.js';
import chalk from 'chalk';
import {getErrorMessage} from '../../shared/helpers/index.js';


export class GenerateCommand implements Command {
  private initialData!: MockServerData;

  public getName(): string {
    return '--generate';
  }

  private async load(url: string) {
    try {
      this.initialData = (await axios.get<MockServerData>(url)).data;
    } catch (e) {
      throw new Error(`Can't load data from ${url}`);
    }
  }

  private async write(filepath: string, offerCount: number) {
    const tsvOfferGenerator = new TSVOfferGenerator(this.initialData);
    const tsvFileWriter = new TSVFileWriter(filepath);

    for (let i = 0; i < offerCount; i++) {
      await tsvFileWriter.write(tsvOfferGenerator.generate());
    }

    await tsvFileWriter.close();
  }


  public async execute(...parameters: string[]) {
    const [count, filepath, url] = parameters;
    const offerCount = Number.parseInt(count, 10);

    try {
      await this.load(url);
      await this.write(filepath, offerCount);
      console.info(chalk.bgGreen(`File ${filepath} was created!`));
    } catch (error: unknown) {
      console.error('Can\'t generate data');
      getErrorMessage(error);
    }
  }
}
