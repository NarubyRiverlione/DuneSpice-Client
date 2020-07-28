import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from '@fluentui/react'

import Eth from '../Api/Eth'
import { CstNetwerken } from '../Cst'
import KiesAccount from './KiesAccount'

const dropdownStyles = { dropdown: { width: 200 } }

const KiesNetwerk = ({
  NetwerkEnAccountGekozen, TotalSupply, BalansEth, BalansDSP,
}) => {
  const [Provider, setProvider] = useState()
  const [NetwerkNaam, setNetwerkNaam] = useState()
  const [Accounts, setAccounts] = useState()

  const NetwerkKeuzeOpties = CstNetwerken.map((net) => ({ key: net.naam, text: net.naam }))

  const onChange = async (event, item) => {
    const Netwerk = CstNetwerken.find((netwerk) => netwerk.naam === item.key)
    const { url } = Netwerk
    setNetwerkNaam(item.key)
    if (!url) {
      // beveilig terug eerste dummy optie kiezen bij netwerken
      setAccounts()
      NetwerkEnAccountGekozen()
      return
    }
    const eth = new Eth()
    await eth.Connect(url)
    setProvider(eth)
    const accounts = await eth.OphalenAccounts()
    setAccounts(accounts)
  }

  return (
    <React.Fragment>
      <Dropdown
        label="Kies netwerk"
        onChange={onChange}
        placeholder="Netwerk"
        options={NetwerkKeuzeOpties}
        styles={dropdownStyles}
      />

      {TotalSupply && (<div>{`Total supply Dune Spice = ${TotalSupply} `}</div>)}

      {Accounts && (
        <KiesAccount
          Accounts={Accounts}
          AccountGekozen={(account) => { NetwerkEnAccountGekozen(NetwerkNaam, account, Provider) }}
          BalansEth={BalansEth}
          BalansDSP={BalansDSP}
        />
      )}
    </React.Fragment>
  )
}

export default KiesNetwerk

KiesNetwerk.propTypes = {
  NetwerkEnAccountGekozen: PropTypes.func.isRequired,
  TotalSupply: PropTypes.number,
  BalansEth: PropTypes.number,
  BalansDSP: PropTypes.number,
}
KiesNetwerk.defaultProps = {
  TotalSupply: null,
  BalansEth: null,
  BalansDSP: null,
}
