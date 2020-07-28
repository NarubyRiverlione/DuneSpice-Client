// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { DefaultButton } from '@fluentui/react'

import { CstTekst } from '../Cst'

import ApiDuneSpice, { VerwerkFout } from '../Api/ApiDuneSpice'

import KiesNetwerk from '../Components/KiesNetwerk'
import TransferTokens from '../Components/TransferTokens'
import PauseerContract from '../Components/PauseerContract'

const { HoofdScherm: Txt } = CstTekst

let DuneSpiceApi

const HoofdScherm = () => {
  // const [Api, setApi] = useState()
  const [TotalSupply, setTotalSupply] = useState()
  const [BalansEth, setBalansEth] = useState()
  const [BalansDSP, setBalansDSP] = useState()
  const [Error, setError] = useState()
  const [WaitOnBlock, setWaitOnBlock] = useState()

  const NetwerkEnAccountGekozen = async (netwerkNaam, accountAdres, provider) => {
    // beveilig terug eerste dummy optie kiezen bij accounts
    if (!provider || !accountAdres) {
      setBalansEth()
      // setApi()
      DuneSpiceApi = null
      return
    }
    DuneSpiceApi = new ApiDuneSpice(netwerkNaam, accountAdres, provider)
    const totalSupply = await DuneSpiceApi.TotalSupply()
    setTotalSupply(totalSupply)
    // setApi(DuneSpiceApi)
    const balansEth = await provider.OphalenBalans(accountAdres)
    setBalansEth(balansEth)
    const balansDSP = await DuneSpiceApi.TokenBalans(accountAdres)
    setBalansDSP(balansDSP)
  }

  const TransferDSP = async (address, amount) => {
    try {
      await DuneSpiceApi.Transfer(address, amount)
      const balans = await DuneSpiceApi.TokenBalans()
      setBalansDSP(balans)
      setError()
    } catch (err) {
      setError(err.message)
    }
  }

  const ContractActie = async (actie) => {
    try {
      debugger
      setWaitOnBlock(true)
      await actie
      setError()
      setWaitOnBlock(false)
    } catch (fout) {
      setError(fout)
      setWaitOnBlock(false)
    }
  }

  return (
    <React.Fragment>
      <h1>{Txt.Title}</h1>
      <hr />
      {Error && (
        <h1 style={{ background: 'red', color: 'white', padding: '1rem' }}>{`Fout: ${Error}`}</h1>
      )}
      {WaitOnBlock && (
        <h4 style={{ background: 'green', color: 'white', padding: '1rem' }}>
          {Txt.WachtenOpBlok}
        </h4>
      )}
      <KiesNetwerk
        NetwerkEnAccountGekozen={NetwerkEnAccountGekozen}
        TotalSupply={TotalSupply}
        BalansEth={BalansEth}
        BalansDSP={BalansDSP}
      />
      <hr />
      {TotalSupply && (
        <div>
          <h2>{Txt.DSPtitle}</h2>
          <h4>{Txt.DspTransfer}</h4>
          <TransferTokens Action={TransferDSP} />
        </div>
      )}
    </React.Fragment>
  )
}

export default HoofdScherm
