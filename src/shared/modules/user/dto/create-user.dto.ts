import {UserType} from '../../../types/index.ts';

export class CreateUserDto {
  public email: string;
  public avatar: string;
  public name: string;
  public type: UserType;
  public password: string;
}
