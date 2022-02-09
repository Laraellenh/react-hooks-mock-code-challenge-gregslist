import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
const url = "http://localhost:6001/listings"

function App() {
  const [listings, setListings] = useState([])
  useEffect(() => {
    fetch(url)
    .then(r=>r.json())
    .then(setListings)
  }, [])

  console.log(listings)
//   const listing = [
//     {id,
//     description,
//   Imagelocation
// }
  
  // state for listings

  // const changeListingAvailability = () =>{
  //   setListings(!listings)
  // }
  

  //  setListed = ()=> { 
  //   listedListings = isListed?
  // listingData.filter((listing)=>listing.isListed===true) :
  // listingData
  // }
  


  
  return (
    <div className="app">
      <Header setListing= {listings}/>
      <ListingsContainer listingArray={listings} />
    </div>
  );
}

export default App;
// {
//   "id": 1,
//   "description": "heater",
//   "image": "./images/heater.jpg",
//   "location": "BROOKLYN"
//   },
//   {
  // 