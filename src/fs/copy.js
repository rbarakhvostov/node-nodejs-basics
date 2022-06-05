import { cp } from 'fs'

export const copy = async () => {
  cp('files', 'files_copy', { force: false, errorOnExist: true, recursive: true }, (err) => {
    if (err) {
      throw new Error('FS operation failed')
    }
  })
};

copy()
