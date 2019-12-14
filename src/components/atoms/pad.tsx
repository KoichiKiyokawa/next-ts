import React from 'react'

interface Props {
  num: number | string
  onClick?: (arg: any) => any
  isLong?: boolean
}

const Pad: React.FC<Props> = props => {
  return (
    <>
      <button onClick={props.onClick}>{props.num}</button>
      <style jsx>{`
        button {
          width: ${props.isLong ? 96 : 48}px;
          height: 48px;
        }
      `}</style>
    </>
  )
}

export default Pad
