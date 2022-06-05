import { rm } from 'fs'

export const remove = async () => {
  rm('files/fileToRemove.txt', err => {
    if (err) {
      throw new Error('FS operation failed')
    }  
  })
};

remove()
