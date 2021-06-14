import { 
    Controller,
    Post,
    Put,
    Get,
    Body,
    Res,
    Req,
    Param,
    Delete,
    HttpStatus
} from '@nestjs/common';
import {
    ApiTags,
    ApiOperation,
    ApiParam
} from '@nestjs/swagger';

import { UserRegisterDTO } from './dto/user-register.dto';
import { UpdateUserDTO } from './dto/user-edit.dto';
import { UserService } from './user.service';

@ApiTags("Users")
@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    /**
     * @route   POST api/v1/users
     * @desc    Create a new user
     * @access  Public
     */
    @Post()
    @ApiOperation({ summary: 'User registration' })
    async register(@Body() userRegisterDTO: UserRegisterDTO, @Res() res) {
        const result = await this.userService.create(userRegisterDTO);

        return res.status(HttpStatus.CREATED).json({
		statusCode: HttpStatus.CREATED,
		message: 'Registration is successful',
		data: result
	});
    }

    /**
     * @route   Get api/v1/users
     * @desc    Get all user data
     * @access  Public
     */
    @Get()
    @ApiOperation({ summary: 'User List' })
    async list(@Res() res) {
        const result = await this.userService.list();

        return res.status(HttpStatus.OK).json({
		statusCode: HttpStatus.OK,
		message: 'Get users is successful',
		data: result
	});
    }

    /**
     * @route   Get /api/v1/users/:id
     * @desc    Get user by Id
     * @access  Public
     **/

    @Get(':id')
    @ApiOperation({ summary: 'Get User By Id' })

    @ApiParam({
	name: 'id',
	required: true,
	explode: true,
	type: String,
	example: '60c71508777593a109d7e99a',
	description: 'User ID'
    })

    async detail(@Param('id') id: string, @Res() res)  {
	const result = await this.userService.detail(id);
	return res.status(HttpStatus.OK).json({
		statusCode: HttpStatus.OK,
		message: `Success get user by id ${id}`,
		data: result
	});
    }

    /**
     * @route   Put /api/v1/users/:id
     * @desc    Update user by Id
     * @access  Public
     **/

    @Put(':id')
    @ApiOperation({ summary: 'Update user by id' })

    @ApiParam({
	name: 'id',
	required: true,
	explode: true,
	type: String,
	example: '60c71508777593a109d7e99a',
	description: 'User ID'
    })

    async update(
	@Param('id') id: string,
	@Res() res,
	@Body() input: UpdateUserDTO
) {
	const result = await this.userService.update(id, input);
	return res.status(HttpStatus.OK).json({
		statusCode: HttpStatus.OK,
		message: 'The user has been successfully updated.',
		data: result
	});
    }

    /**
     * @route   Delete /api/v1/users/:id
     * @desc    Delete user by ID
     * @access  Public
    **/
    @Delete(':id')
    @ApiOperation({ summary: 'Delete user' })

    @ApiParam({
	name: 'id',
	required: true,
	explode: true,
	type: String,
	example: '60c71508777593a109d7e99a',
	description: 'User ID'
    })

    async delete(@Param('id') id: string, @Res() res){
	const result = await this.userService.delete(id);

	if (result == 'ok') {
		return res.status(HttpStatus.OK).json({
			statusCode: HttpStatus.OK,
			message: `Success remove user by id ${id}`
		});
	}
    }
}
