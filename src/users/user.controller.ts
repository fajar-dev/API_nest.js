import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseFilters, InternalServerErrorException } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./create-user.dto";

@Controller('users')
export class UserController{
  
  constructor(private readonly userService: UserService){}

  @Get()
  async findAll(){
    try {
      return{
        respons: 200,
        success: true,
        message: 'Read all user',
        data: await this.userService.findAll()
      };
    } catch (error) {
      throw new InternalServerErrorException('Error while fetching tasks');
    }
  }

  @Get(':id')
  async findOne( @Param('id') id: number ) {
    try {
      return{
        respons: 200,
        success: true,
        message: 'Read user by id: ' + id,
        data: await this.userService.findOne(id)
      };
    } catch (error) {
      throw new InternalServerErrorException('Error while fetching tasks');
    }
  }

  @Post('/create')
  async create( @Body() data: CreateUserDto) {
    try {
      return{
        respons: 200,
        success: true,
        message: 'Create user',
        data: await this.userService.create(data)
      };
    } catch (error) {
      throw new InternalServerErrorException('Error while fetching tasks');
    }
  }

  @Put('/update/:id')
  async update( @Body() data: CreateUserDto,  @Param('id') id: number) {
    try {
      return{
        respons: 200,
        success: true,
        message: 'Update user by id '+ id,
        data: await this.userService.update(data, id)
      };
    } catch (error) {
      throw new InternalServerErrorException('Error while fetching tasks');
    }
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete( @Param('id') id: number) {
    try {
      return{
        respons: 200,
        success: true,
        message: 'Delete user by id '+ id,
        data: await this.userService.delete(id)
      };
    } catch (error) {
      throw new InternalServerErrorException('Error while fetching tasks');
    }
  }

}