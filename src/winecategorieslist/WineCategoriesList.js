import React, {useState} from 'react'
import WineDetails from './WineDetails'
import WineList from './WineList'

export default function WineCategoriesList(props) {
  
  const[currentWine, setCurrentWine] =useState({})
  const handleDetailsClick= (wine) => {
    setCurrentWine(wine)
    console.log('clicked')
    console.log(wine)
    }
   
   
  // the main page/ 'div' that hold or our winelist details'
  return (
  
      <div className="wine-library">
      {/* within this we render the display for our WineList component  and winedetails components */}
      <WineList wineDetails={handleDetailsClick} wineList={props.wineList}  wineCategory={props.wineCategory}></WineList>  
      <WineDetails currentWine={currentWine}></WineDetails>
      </div>
    
  )
}
