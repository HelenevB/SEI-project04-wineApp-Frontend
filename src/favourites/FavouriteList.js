import  axios  from 'axios'
import React from 'react'
import FavouritesCreateForm from './FavouritesCreateForm'
import { useState } from 'react'

export default function FavouriteList() {
    const [wineNights, setWineNights] = useState([]);

    const loadWineNight = () => {
        // Axios Code will go here
        axios.get("favourites/index")
        .then(response => {
            console.log(response);
            // this is equivalent to this.setState in class components.
            // Setting the state will rerender the whole component again.
            setWineNights(response.data)
        })
        .catch(error => {
            console.log("Error When Retrieving Wines")
            console.log(error);
        })
    }


    const addNewWineNight = (wineNight) => {
        axios.post("favourites/add", wineNight 
        // ,{headers: {
        //     "Authorization": "Bearer " + localStorage.getItem("token")
        // } }
    )
        .then(response => {
            loadWineNight();
        })
        .catch(error => {
            console.log(error)
            console.log("Error");
        }) 
    
}
    




  return (
    <div>
        <h1>FavouriteList</h1>
        
        <FavouritesCreateForm addNewWineNight={addNewWineNight}></FavouritesCreateForm>
    </div>
  )
}