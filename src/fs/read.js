import { readFile } from 'fs'

export const read = async () => {
  readFile('files/fileToRead.txt', 'utf8', (err, data) => {
    if (err) {
      throw new Error('FS operation failed')
    } else {
      console.log(data)
    }    
  })
};

read()
