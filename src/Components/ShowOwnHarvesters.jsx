import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { DefaultButton } from '@fluentui/react'

const ShowOwnHarvesters = ({ Api }) => {
  const [Harvesters, setHarvesters] = useState()

  const getOwnHarvesters = async () => {
    const harvesterIDs = await Api.GetOwnHarvesterIDs()
    setHarvesters(harvesterIDs)
  }

  return (
    <React.Fragment>
      <DefaultButton text="Get list" onClick={getOwnHarvesters} />
      {Harvesters && (
        Harvesters.map((harvester) => (
          <div key={harvester}>{`Owns harvester with ID: ${harvester}`}</div>
        ))
      )}
    </React.Fragment>
  )
}

export default ShowOwnHarvesters

ShowOwnHarvesters.propTypes = {
  Api: PropTypes.object.isRequired,
}
