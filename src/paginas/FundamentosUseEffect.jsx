import React from 'react'
import FetchUsers from '../components/effect/FetchUser'
import Intro from '../components/effect/Intro'
import IntroUseEffect from '../components/effect/IntroUseEffect'

const FundamentosUseEffect = () => {
  return (
    <>
      <Intro/>
      <IntroUseEffect/>
      <FetchUsers/>
    </>
  )
}

export default FundamentosUseEffect

