type toggleObject = {
  [key: string]: boolean
}

export const makeClass = (classes: toggleObject): { className: string } => {
  const classArray: string[] = []

  for (const className in classes) {
    if (classes[className]) {
      classArray.push(className)
    }
  }

  return { className: classArray.join(' ') }
}
