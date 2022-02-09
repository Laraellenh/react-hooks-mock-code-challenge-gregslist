import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  
  const listingsComPonents = listings.map(l =>
    <ListingCard key={l.id} listing ={l} description={l.description} /> );

  
  return (
    <main>
      <ul className="cards">
      
           <ListingCard />
      
      </ul>
    </main>
  );
}

export default ListingsContainer;
