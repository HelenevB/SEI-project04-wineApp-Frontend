import React from 'react'



export default function WineRow(props) {
  return (

    <div className="wine-row">
      <div className='wineBox'>
        <div className='wineBoxCenter'>
          <img className="wineImage" src={props.imageUrl}  alt="wine bottle"/>
        </div>
      </div>
      <div className="wine-summary">
        <h5 className="wine-info-row">{props.title}</h5>
        <h3 className="price">{props.price}</h3>
      </div>
    </div>

  )
}
