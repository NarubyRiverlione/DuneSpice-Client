import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { DefaultButton, TextField } from '@fluentui/react'

const textFieldStyles = { fieldGroup: { width: 150 } }

const Input = ({
  Label, Suffix, ActionTxt, Action,
}) => {
  const [InputValue, setInputValue] = useState()

  const doAction = (event) => {
    event.preventDefault()
    const { value } = event.target
    const valueFloat = parseFloat(value, 10)
    setInputValue(valueFloat)
  }

  return (
    <React.Fragment>
      <TextField label={Label} suffix={Suffix} onChange={doAction} styles={textFieldStyles} />
      <DefaultButton onClick={() => Action(InputValue)} text={ActionTxt} />
    </React.Fragment>
  )
}

export default Input

Input.propTypes = {
  Label: PropTypes.string.isRequired,
  Suffix: PropTypes.string,
  ActionTxt: PropTypes.string.isRequired,
  Action: PropTypes.func.isRequired,
}

Input.defaultProps = {
  Suffix: null,
}
