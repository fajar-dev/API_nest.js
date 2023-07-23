import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseFilters, InternalServerErrorException } from "@nestjs/common";
import { NotesService } from "./notes.service";
import { CreateNotesDto } from "./create-notes.dto";

@Controller('notes')
export class NotesController{
  
  constructor(private readonly notesService: NotesService){}

  @Get()
  async findAll(){
    try {
      return{
        respons: 200,
        success: true,
        message: 'Read all note',
        data: await this.notesService.findAll()
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
        message: 'Read note by id: ' + id,
        data: await this.notesService.findOne(id)
      };
    } catch (error) {
      throw new InternalServerErrorException('Error while fetching tasks');
    }
  }

  @Post('/create')
  async create( @Body() data: CreateNotesDto) {
    try {
      return{
        respons: 201,
        success: true,
        message: 'Create note',
        data: await this.notesService.create(data)
      };
    } catch (error) {
      throw new InternalServerErrorException('Error while fetching tasks');
    }
  }

  @Put('/update/:id')
  async update( @Body() data: CreateNotesDto,  @Param('id') id: number) {
    try {
      return{
        respons: 200,
        success: true,
        message: 'Update note by id '+ id,
        data: await this.notesService.update(data, id)
      };
    } catch (error) {
      throw new InternalServerErrorException('Error while fetching tasks');
    }
  }

  @Delete('/delete/:id')
  async delete( @Param('id') id: number) {
    try {
      return{
        respons: 200,
        success: true,
        message: 'Delete note by id '+ id,
        data: await this.notesService.delete(id)
      };
    } catch (error) {
      throw new InternalServerErrorException('Error while fetching tasks');
    }
  }

}