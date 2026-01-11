import { ContainerModule } from 'inversify';
import { UserService } from './user-service.interface.ts';

import { DefaultUserService } from './default-user.service.ts';
import {Component} from '../../types/index.ts';
import { types } from '@typegoose/typegoose';
import {UserEntity, UserModel} from './user.entity.ts';

export const createUserContainer = () => new ContainerModule(({bind}) => {
  bind<UserService>(Component.UserService).to(DefaultUserService).inSingletonScope();
  bind<types.ModelType<UserEntity>>(Component.UserModel).toConstantValue(UserModel);
});
