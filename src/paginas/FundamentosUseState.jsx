import React from 'react'
import Array from '../components/state/Array'
import Conditional from '../components/state/Conditional'
import Counter from '../components/state/Counter'
import Emoji from '../components/state/Emoji'
import Intro from '../components/state/Intro'
import MensajesError from '../components/state/MensajesError'
import Objetos from '../components/state/Objetos'

const FundamentosUseState = () => {
  return (
    <>
        <Intro/>
        <Emoji/>
        <Counter/>
        <Conditional/>
        <MensajesError/>
        <Objetos/>
        <Array/>
    </>
  )
}

export default FundamentosUseState

