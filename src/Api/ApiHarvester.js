// import Web3 from 'web3'
import Utils from 'web3-utils'
import HarvesterJson from './HarvesterFactory.json'
import { CstNetwerken } from '../Cst'

const VindContract = (naam) => CstNetwerken.find((netwerk) => netwerk.naam === naam).HarvestersContract

export default class ApiHarvester {
  constructor(netwerkNaam, account, EthProvider) {
    this.EthProvider = EthProvider
    this.address = account
    this.contractadres = VindContract(netwerkNaam)
    this.Harvesters = this.EthProvider.OphalenContract(HarvesterJson.abi, this.contractadres)
  }

  ContractPauze = () => (
    this.Harvesters.methods.HandRem().send({ from: this.address })
  )

  Reset = () => (
    this.Harvesters.methods.Reset().send({ from: this.address })
  )

  Buy = async () => {
    const Price = await this.Harvesters.methods.Price().call()
    this.Harvesters.methods.buyHarvester().send({ from: this.address, value: Price })
  }

  GetOwnHarvesterIDs = async () => {
    const lastID = await this.Harvesters.methods.lastID().call()

    const ownIDs = []
    const getHarveterOwnersPromises = []
    for (let id = 0; id < lastID; id += 1) {
      getHarveterOwnersPromises.push(
        this.Harvesters.methods.harvesterToOwner(id).call()
          .then((owner) => {
            if (this.address === owner) {
              ownIDs.push(id)
            }
            return Promise.resolve()
          }),
      )
    }

    await Promise.all(getHarveterOwnersPromises)

    return ownIDs
  }
}
