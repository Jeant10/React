import React from 'react'
import FetchUsers from '../components/effect/FetchUser'
import Intro from '../components/effect/Intro'
import IntroUseEffect from '../components/effect/IntroUseEffect'
import Marvel from '../components/effect/Marvel'

const FundamentosUseEffect = () => {
  return (
    <>
      <Intro/>
      <Marvel/>
      <IntroUseEffect/>
      <FetchUsers/>
    </>
  )
}

export default FundamentosUseEffect

