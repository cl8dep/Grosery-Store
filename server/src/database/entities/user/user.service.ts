import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { REPOSITORY_NAME } from './user.providers';

@Injectable()
export class UserService {
  constructor(
    @Inject(REPOSITORY_NAME)
    private photoRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.photoRepository.find();
  }
}
