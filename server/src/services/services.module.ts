import { Module } from '@nestjs/common';
import HashingService from './security/HashingService';

@Module({
  providers: [HashingService],
  exports: [HashingService],
})
class ServicesModule {}

export default ServicesModule;
