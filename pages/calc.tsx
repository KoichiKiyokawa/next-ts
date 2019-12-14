import React from 'react'

import Monitor from '~/components/atoms/monitor'
import Pad from '~/components/atoms/pad'
import { range } from '~/utils/range'

const Calc = () => {
  const [memory, setMemory] = React.useState('0')

  const init = () => {
    setMemory('0')
  }

  const handleMemory = (num: number) => {
    if (memory.length >= 10) {
      return
    }

    if (num ===0){
      if (memory === '0'){
        return
      }
    }
    if (memory === '0') {
      setMemory(`${num}`)
    } else {
      setMemory(`${memory}${num}`)
    }
  }

  return (
    <>
      <div>
        <Monitor str={`${memory}`} />
      </div>
      <div>
        <Pad num={'AC'} onClick={init} />
        <Pad num={'C'} />
        <Pad num={'%'} />
        <Pad num={'÷'} />
      </div>
      <div>
        <Pad num={7} onClick={() => handleMemory(7)} />
        <Pad num={8} onClick={() => handleMemory(8)} />
        <Pad num={9} onClick={() => handleMemory(9)} />
        <Pad num={'x'} />
      </div>
      <div>
        <Pad num={4} onClick={() => handleMemory(4)} />
        <Pad num={5} onClick={() => handleMemory(5)} />
        <Pad num={6} onClick={() => handleMemory(6)} />
        <Pad num={'-'} />
      </div>
      <div>
        <Pad num={1} onClick={() => handleMemory(1)} />
        <Pad num={2} onClick={() => handleMemory(2)} />
        <Pad num={3} onClick={() => handleMemory(3)} />
        <Pad num={'+'} />
      </div>
      <div>
        <Pad num={0} isLong onClick={()=>handleMemory(0)}/>
        <Pad num={'.'} />
        <Pad num={'='} />
      </div>
    </>
  )
}

export default Calc
