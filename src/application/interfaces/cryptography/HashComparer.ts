export default interface HashComparer {
  compare(plaintext: string, hash: string): Promise<boolean> | string;
}
