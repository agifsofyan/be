import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    create(input: any): Promise<IUser>;
    list(): Promise<IUser[]>;
    detail(id: string): Promise<IUser>;
    update(id: string, input: any): Promise<IUser>;
    delete(id: string): Promise<string>;
}
