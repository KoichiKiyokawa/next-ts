import React from 'react'

interface Props {
  str: string
}

const Monitor: React.FC<Props> = ({ str }) => {
  return (
    <>
      <div>
        <span>{str}</span>
      </div>
      <style jsx>
        {`
          div {
            height: 48px;
            width: 192px;
            line-height: 48px;
            background-color: gray;
            color: white;
            font-weight: bold;
            font-size: 2rem;
            text-align: right;
          }
          span {
            margin-right: 10px;
          }
        `}
      </style>
    </>
  )
}

export default Monitor
