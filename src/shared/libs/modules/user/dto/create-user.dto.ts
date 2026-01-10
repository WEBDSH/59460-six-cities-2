import {UserType} from '../../../../types/index.js';

export class CreateUserDto {
  public email: string;
  public avatar: string;
  public name: string;
  public type: UserType;
  public password: string;
}
