import { ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import BusinessService from '../services/bussines.service';
import { IUser } from '../types/user.interface';
import { User } from '../decorators/user.decorator';
import {join} from "path";
const settings = require('../../settings.json');

@ApiTags('Settings')
@Controller("settings")
class SettingsController {
  constructor(private readonly businessService: BusinessService) {}

  @Get()
  async getCartProducts(@User() user: IUser, @Res() res: Response) {
    res.status(200).json(settings);
  }
}

export default SettingsController;
