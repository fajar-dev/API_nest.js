import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Notes } from "./notes.entity";
import { CreateNotesDto } from "./create-notes.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class NotesService{
  
    constructor(@InjectRepository(Notes) private readonly notesRepository: Repository<Notes>) {}

  findAll(){
    return this.notesRepository.find();
  }

  findOne(id: number) {
    return this.notesRepository.findOneBy({id: id})
  }

  create(data: CreateNotesDto) {
    const user = new Notes();
    user.title = data.title;
    user.author = data.author;
    user.content = data.content;
    user.isActive = data.isActive;
    return this.notesRepository.save(user);
  }

  update(data: CreateNotesDto, id: number) {
    return this.notesRepository.save({ ...data, id: Number(id)});
  }

  delete(id: number) {
    return this.notesRepository.delete(Number(id));
  }

} 