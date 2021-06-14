import {
    Injectable,
    BadRequestException,
    NotFoundException,
    NotImplementedException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { IUser } from './interfaces/user.interface';

const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<IUser>
    ) {}

    async create(input: any): Promise<IUser> {
        let user = new this.userModel(input);

        // Check if user name is already exist
        const isNameExist = await this.userModel.findOne({ nama: user.nama });
        if (isNameExist) {
            throw new BadRequestException('The name you\'ve entered is already exist.');
        }

	// Check if user phone number is already exist
        const isHPExist = await this.userModel.findOne({ nomor_telp: user.nomor_telp });
        if (isHPExist) {
            throw new BadRequestException('The phone number you\'ve entered is already exist.');
        }
       
	await user.save()

	return user
    }

    async list(): Promise<IUser[]> {
        const users = await this.userModel.find()
        return users
    }

    async detail(id: string): Promise<IUser> {
	const user = await this.userModel.findById(id)

	if(!user) throw new NotFoundException('user not found');

	return user
    }

    async update(id: string, input: any): Promise<IUser> {
	let user = await this.userModel.findById(id)

        if (!user) {
            throw new BadRequestException('user not found');
        }

	try{
	    await this.userModel.findByIdAndUpdate(id, input)
	    return await this.userModel.findById(id)
	}catch(err){
	    throw new NotImplementedException("can't update this user")
	}
    }

    async delete(id: string): Promise<string> {
	try{
		await this.userModel.findByIdAndRemove(id)
		return 'ok'
	}catch(err){
		throw new NotImplementedException('The user could not be deleted or user not found')
	}
    }
}
