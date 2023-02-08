import React, { Children } from 'react'
import p from 'prop-types'

const Heading = ({children}) => {
  return (
    <div>{children}</div>
  )
}

Heading.protoTypes ={
  children: p.node.isRequired,
  colorDark: p.bool.isRequired
}
export default Heading