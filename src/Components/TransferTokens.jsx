import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { DefaultButton, TextField } from '@fluentui/react'
import { useConstCallback } from '@uifabric/react-hooks'

import { CstTekst } from '../Cst'

const { Transfer: Txt } = CstTekst

const Styles = {
  Address: { fieldGroup: { width: 200 } },
  Amount: { fieldGroup: { width: 150 } },
}
const TransferTokens = ({ Action }) => {
  const [Address, setAddress] = useState()
  const [Amount, setAmount] = useState()

  const changeAddress = useConstCallback(
    (event, newValue) => { setAddress(newValue || '') },
  )
  const changeAmount = useConstCallback(
    (event, newValue) => { setAmount(newValue || '') },
  )

  return (
    <React.Fragment>
      <TextField label={Txt.ToAddress} onChange={changeAddress} styles={Styles.Address} />
      <TextField label={Txt.InputAmount} suffix="DSP" onChange={changeAmount} styles={Styles.Amount} />
      <DefaultButton onClick={() => Action(Address, Amount)} text={Txt.CmdAction} />

    </React.Fragment>
  )
}

export default TransferTokens

TransferTokens.propTypes = {
  Action: PropTypes.func.isRequired,
}
