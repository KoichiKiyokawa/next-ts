import React from 'react'

interface Props {
  space?: number
}

const Space: React.FC<Props> = ({ space }) => (
  <>
    <div />
    <style jsx>
      {`
        div {
          padding: ${space || 10}px;
        }
      `}
    </style>
  </>
)

export default Space
