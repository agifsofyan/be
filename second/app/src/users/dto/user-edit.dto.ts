import {
    IsNotEmpty,
    MinLength,
    MaxLength,
    IsEmail,
    IsString, IsPhoneNumber
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { UserRegisterDTO } from './user-register.dto';

export class UpdateUserDTO extends PartialType(UserRegisterDTO) { }
