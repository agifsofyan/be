import { UserRegisterDTO } from './dto/user-register.dto';
import { UpdateUserDTO } from './dto/user-edit.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(userRegisterDTO: UserRegisterDTO, res: any): Promise<any>;
    list(res: any): Promise<any>;
    detail(id: string, res: any): Promise<any>;
    update(id: string, res: any, input: UpdateUserDTO): Promise<any>;
    delete(id: string, res: any): Promise<any>;
}
