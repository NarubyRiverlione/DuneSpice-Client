/* eslint {max-len:off} */

export const CstTekst = {
  Foutmeldingen: {
    ApiOnbereikbaar: 'Er kunnen geen gegevens opgehaald worden. Controleer de internetverbinding.',
  },
  HoofdScherm: {
    Title: 'Dune Spice Smart contract',
    AccountKeuze: 'Choice account',
    DSPtitle: 'Dune Spice actions',
    DspTransfer: 'Send to an other account',
    HarvesterTitle: 'Harvesters',
    HarvesterBuy: 'Buy a harvester',
    HarvesterList: 'Owned harvesters',
    VoorEidereen: 'Beschikbaar voor iedereen',
    EnkelContractEigenaar: 'Enkel contract eigenaar',
    EnkelBoeker: 'Enkel voor de boeker',
    WachtenOpBlok: 'Wachten totdat de transactie in een blok is opgenomen',
  },
  NietGevonden: {
    Tekst: 'De pagina is niet gevonden',
  },
  OnbekendeFout: 'Onbekende fout',
  Transfer: {
    ToAddress: 'Send to address',
    InputAmount: 'Amount',
    CmdAction: 'SEND',
  },
}

export const CstFouten = {
  EthGeenEigenaar: 'Returned error: VM Exception while processing transaction: revert Ownable: caller is not the owner',
  EnkelDoorEigenaar: 'Mag enkel uitgevoerd worden door de contract eigenaar',
  EthNietVrij: 'Returned error: VM Exception while processing transaction: revert Kamer is niet vrij',
  KamerIsNietVrij: 'Kan niet boeken omdat de kamer niet vrij is',
  EthIsGeenBoeker: 'Returned error: VM Exception while processing transaction: revert Enkel de boeker mag deze actie doen',
  EnkelDoorBoeker: 'Enkel de boeker kan deze actie doen',
  EthBeschikbareDagenOpgebruikt: 'Returned error: VM Exception while processing transaction: revert Alle geboekte dagen zijn opgebruikt',
  GeenBeschikbareDagen: 'Alle geboekte dagen zijn opgebruikt',
  EthGepauzeerd: 'Returned error: VM Exception while processing transaction: revert Pausable: paused',
  OpPause: 'Het smart contract is op onbruikbaar gezet door de eigenaar',
}

export const CstMetaMask = 'metamask'

export const CstNetwerken = [
  {
    naam: 'Ganache',
    DuneSpiceContract: '0x99e488818Ae3a242D07E3Eb8e8eC2De1B0992679',
    HarvestersContract: '0x77a6EeE6D2dbb0D40f48728Ac95F2c3268Ad6444',
    url: 'ws://127.0.0.1:7545',
  },
  {
    naam: 'Rinkeby',
    contractadres:
      '0x4cF397e7e5680A82b57E39a29a07A9aa02B0B352',
    url: CstMetaMask,
  },
  {
    naam: 'Ganache via Metamask',
    contractadres:
      '0x83F22DaDb34c517181dD197ea177C8ed61040945',
    url: CstMetaMask,
  },

]
