import type { Command } from './command.interface.js';
import { TsvFileReader } from '../../shared/libs/file-reader/index.js';
import {createOffer} from '../../shared/helpers/create-offer.js';
import {getErrorMessage} from '../../shared/helpers/index.js';

export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  private onImportedLine(line: string) {
    const offer = createOffer(line);
    console.info(offer);
  }

  private onCompleteImport(count: number) {
    console.info(`${count} rows imported.`);
  }


  public execute(...args: string[]): void {
    const [filename] = args;
    const fileReader = new TsvFileReader(filename);

    fileReader.on('line', this.onImportedLine);
    fileReader.on('end', this.onCompleteImport);

    try {
      fileReader.read();
    } catch (err) {

      console.error(`Can't import data from file: ${filename}`);
      console.error(getErrorMessage(err));
    }
  }
}
