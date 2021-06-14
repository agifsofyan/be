import { Document } from 'mongoose';

export interface IUser extends Document {
    nama: string;
    hobi: string;
    alamat: string;
    nomor_telp: number;
}
