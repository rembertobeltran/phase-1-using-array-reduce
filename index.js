const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const initVal = 0
const reducer = (accumulator, item) => {
  return accumulator + item
}

const totalBatteries = batteryBatches.reduce(reducer, initVal)