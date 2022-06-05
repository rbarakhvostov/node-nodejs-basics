import { Worker, isMainThread, parentPort, workerData } from 'worker_threads'

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  parentPort.postMessage(nthFibonacci(workerData))
};

if (isMainThread) {
  const worker = new Worker('./worker.js', {
    workerData: 7
  })

  worker.on('message', data => {
    console.log(data)
  })
} else {
  sendResult()
}
