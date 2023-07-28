import { useAppSelector } from '@/src/redux/hook'
import React from 'react'

function Post() {
  const state = useAppSelector((state) => state.loading)

  console.log(state)

  return <div>Post</div>
}

export default Post
