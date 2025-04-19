import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateAuthDto {
    username: string;
    email: string;
    password: string;
  }
  


  