import bcrypt from 'bcrypt';
import HashComparer from '../../application/interfaces/cryptography/HashComparer';
import HashGenerator from '../../application/interfaces/cryptography/HashGenerator';

export class BcryptAdapter implements HashGenerator, HashComparer {
  hash(data: string): Promise<string> {
    throw new Error('Method not implemented.');
  }

  compare(plaintext: string, hash: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
