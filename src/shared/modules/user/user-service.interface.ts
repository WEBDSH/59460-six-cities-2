import { DocumentType } from '@typegoose/typegoose';
import { UserEntity } from './user.entity.ts';
import { CreateUserDto } from './dto/create-user.dto.ts';

export interface UserService {
  create(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>>;
  findByEmail(email: string): Promise<DocumentType<UserEntity> | null>;
  findOrCreate(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>>;
}
