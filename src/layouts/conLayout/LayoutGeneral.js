import React from 'react'

const LayoutGeneral = (props) => {
     const {children} = props;
  return (
      <>
    <div>Menu</div>
        <saction style={{marginTop: "75px"}}>
        <div>{children}</div>
    </saction>
    </>
  )
}

export default LayoutGeneral