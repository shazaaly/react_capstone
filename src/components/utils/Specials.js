/* This component that loops over the 
specials that come from a data source)
 */

import React from 'react'

export const Specials = ({ data }) => {
    let infoPiece = data.map(item => item.info)

    return (
        <div>{infoPiece}</div>
    )
}
