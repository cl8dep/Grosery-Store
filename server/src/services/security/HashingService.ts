import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
class HashingService {
  saltOrRounds = 10;

  /**
   * @param arg      The data to be encrypted.
   * @return A promise to be either resolved with the encrypted data salt or rejected with an Error
   */
  async computeHash(arg: string): Promise<string> {
    return await bcrypt.hash(arg, this.saltOrRounds);
  }

  async compare(arg: string, hashed: string): Promise<boolean> {
    return await bcrypt.compare(arg, hashed);
  }
}

export default HashingService;
