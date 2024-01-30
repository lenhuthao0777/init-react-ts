import React, { forwardRef, useImperativeHandle, useState } from 'react'

function HomeList(props: any, ref: any) {
  const [homeState, setHomeState] = useState<any>({
    name: 'hao',
    email: 'hao@gmail.com',
  })
  
  useImperativeHandle(ref, () => {
    return {
      homeState,
    }
  })

  return <div>HomeList</div>
}

export default forwardRef(HomeList)
