import { rename as rnm, access } from 'fs'

export const rename = async () => {
  access('files/properFilename.md', err => {
    if (err) {
      rnm('files/wrongFilename.txt', 'files/properFilename.md', err => {
        if (err) {
          throw new Error('FS operation failed')
        }
      })
    } else {
      throw new Error('FS operation failed')
    }
  })
};

rename()
