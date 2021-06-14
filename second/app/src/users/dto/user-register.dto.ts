import {
    IsNotEmpty,
    MinLength,
    MaxLength,
    IsEmail,
    IsString, IsPhoneNumber
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserRegisterDTO {
    // Nama
    @ApiProperty({
        example: 'New User',
        description: 'User name',
        format: 'string'
    })
    @IsNotEmpty()
    @IsString()
    nama: string;

    // Hobi
    @ApiProperty({
        example: 'Jalan - jalan',
        description: 'Hoby',
        format: 'string'
    })
    @IsString()
    hobi: string;

    // Alamat
    @ApiProperty({
        example: 'Jalan kebenaran',
        description: 'Address',
        format: 'string'
    })
    @IsString()
    alamat: string;

    // Nomor Telp
    @ApiProperty({
        example: '085771461509',
        description: 'Phone Number',
        format: 'string',
        minLength: 9
    })
    @IsNotEmpty()
    @IsPhoneNumber('ID')
    @MinLength(9)
    @MaxLength(13)
    nomor_telp: string;

}
