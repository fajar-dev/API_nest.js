import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseFilters, InternalServerErrorException } from "@nestjs/common";

import { UserService } from "./user.service";

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
        message: 'Read all user',
        data: await this.userService.findOne(id)
      };
    } catch (error) {
      throw new InternalServerErrorException('Error while fetching tasks');
    }
  }

}