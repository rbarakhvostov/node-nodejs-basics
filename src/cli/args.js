export const parseArgs = () => {
  const res = process.argv
                .map((el, i, arr) => {
                        if (el.startsWith('--')) {
                          return `${el.slice(2)} is ${arr[i + 1]}`
                        }})
                .filter(el => el)
                .join(', ')

  console.log(res)
};

parseArgs()
