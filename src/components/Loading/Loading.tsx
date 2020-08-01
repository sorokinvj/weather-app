import React from 'react'
import { Lottie } from '@alfonmga/react-lottie-light-ts'
import animationData from './sun.json'

const Loading = () => {
  return <Lottie config={{ animationData, loop: true }} width="120px" style={{ margin: '0 auto' }} />
}

export default Loading
