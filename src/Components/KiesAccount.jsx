import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from '@fluentui/react'
import { CstTekst } from '../Cst'

const { HoofdScherm: LandingTxt } = CstTekst

const dropdownStyles = { dropdown: { width: 400 } }

const KiesAccount = ({
  Accounts, AccountGekozen, BalansEth, BalansDSP,
}) => {
  const AccountKeuzeOpties = Accounts.map((account, index) => ({
    key: account,
    text: `${index}. ${account}`,
  }))

  const onChange = (event, item) => {
    AccountGekozen(item.key)
  }

  return (
    <React.Fragment>
      <h4>
        <Dropdown
          label={LandingTxt.AccountKeuze}
          onChange={onChange}
          placeholder="Kies account"
          options={AccountKeuzeOpties}
          styles={dropdownStyles}
        />

    &nbsp;&nbsp;
        {BalansEth && (<span>{`Balans: ${BalansEth.toFixed(4)} Eth.`}</span>)}
        &nbsp;&nbsp;
        {BalansDSP !== null && (
          <span>
            {BalansDSP === 0
              ? 'Owns no Dune Spice.'
              : `${BalansDSP.toFixed(1)} Dune Spice.`}
          </span>
        )}

      </h4>
    </React.Fragment>
  )
}

export default KiesAccount

KiesAccount.propTypes = {
  Accounts: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  AccountGekozen: PropTypes.func.isRequired,
  BalansEth: PropTypes.number,
  BalansDSP: PropTypes.number,
}

KiesAccount.defaultProps = {
  BalansEth: null,
  BalansDSP: null,
}
