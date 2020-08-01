import React from 'react'
import PropTypes from 'prop-types'
import { DefaultButton } from '@fluentui/react'

const BuyHarvester = ({ Buy }) => (
  <React.Fragment>
    <DefaultButton text="Buy" onClick={Buy} />
  </React.Fragment>
)

export default BuyHarvester

BuyHarvester.propTypes = {
  Buy: PropTypes.func.isRequired,
}
