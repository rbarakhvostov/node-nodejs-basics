import { readFile } from 'fs/promises'
import { createHash } from 'crypto'

export const calculateHash = async () => {
  const fileBuffer = await readFile('files/fileToCalculateHashFor.txt')
  const hashSum = createHash('sha256')
  hashSum.update(fileBuffer)
  console.log(hashSum.digest('hex'))
};

calculateHash()
