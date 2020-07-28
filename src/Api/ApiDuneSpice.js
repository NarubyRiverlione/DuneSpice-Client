// import Web3 from 'web3'
import Utils from 'web3-utils'
import DuneSpiceJson from './DuneSpice.json'
import { CstNetwerken, CstFouten } from '../Cst'

export const VerwerkFout = (fout) => {
  switch (fout.message) {
    case CstFouten.EthGeenEigenaar:
      return (CstFouten.EnkelDoorEigenaar)
    case CstFouten.EthNietVrij:
      return (CstFouten.KamerIsNietVrij)
    case CstFouten.EthIsGeenBoeker:
      return CstFouten.EnkelDoorBoeker
    case CstFouten.EthBeschikbareDagenOpgebruikt:
      return CstFouten.GeenBeschikbareDagen
    case CstFouten.EthGepauzeerd:
      return CstFouten.OpPause
    default:
      return (fout.message)
  }
}

const VindContract = (naam) => CstNetwerken.find((netwerk) => netwerk.naam === naam).contractadres

export default class ApiDuneSpice {
  constructor(netwerkNaam, account, EthProvider) {
    this.EthProvider = EthProvider
    this.address = account
    this.contractadres = VindContract(netwerkNaam)
    this.DuneSpice = this.EthProvider.OphalenContract(DuneSpiceJson.abi, this.contractadres)
  }

  TotalSupply = () => (
    this.DuneSpice.methods.totalSupply().call()
  )

  ContractPauze = () => (
    this.DuneSpice.methods.HandRem().send({ from: this.address })
  )

  Reset = () => (
    this.DuneSpice.methods.Reset().send({ from: this.address })
  )

  TokenBalans = async () => {
    const amountDSP = await this.DuneSpice.methods.balanceOf(this.address).call({ from: this.address })
    return parseFloat(amountDSP, 10)
  }

  Transfer = (toAddress, amount) => (
    this.DuneSpice.methods.transfer(toAddress, amount).send({ from: this.address })
  )
}
