import fs from 'fs'

export const read = async () => {
  const readStream = fs.createReadStream('files/fileToRead.txt')
  readStream.on('readable', () => {
    let data;

    while((data = readStream.read()) !== null) {
      process.stdout.write(data);
    }
  });
};

read()

// const data = readStream.read()
    // if (data) {
    //   process.stdout.write(data)
    // }
