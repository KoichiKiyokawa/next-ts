export const range = (
  numFisrt: number,
  numSecond: number = null,
  step: number = 1
) => {
  let start: number, end: number
  if (numSecond === null) {
    // ex) range(10)
    start = 0
    end = numFisrt
  } else {
    // ex) range(1, 10)
    start = numFisrt
    end = numSecond
  }

  const numArray: number[] = []
  for (let i = start; i <= end; i += step) {
    numArray.push(i)
  }

  return numArray
}
