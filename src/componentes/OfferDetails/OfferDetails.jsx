import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import {  useSelector } from "react-redux";
import './OfferDetails.css';
export const Details = () => {
  
  const searchResults = useSelector((state) => state.results.data);
  const handleBackClick = () => {
    window.history.back();
  }
  
  useEffect (() => {
    console.log(searchResults);
  }
  , [searchResults]);
  
  return (
    <>
    
      <div>
        {searchResults.filter((item) => item.id === "1").map((item) => (
          <div className="master-container" key={item.id}>
            <Typography variant="h2"> Itinerarios</Typography>
            <Typography className="precio" > Precio: {item.price.base}  <span> {item.price.currency}  </span> </Typography>
            <div key={item.id}></div> 
          <div className="container-ida">
            <Typography variant="h6"> Vuelo de Ida {item.itineraries[0].segments[0].departure.iataCode} - {item.itineraries[0].segments[0].arrival.iataCode}</Typography>
            <Typography> Duracion: { item.itineraries[0].duration.replace("PT","").replace("H","H ")} </Typography>
            <Typography> Horario de salida: { item.itineraries[0].segments[0].departure.at } </Typography>
            <Typography> Horario de llegada: { item.itineraries[0].segments[0].arrival.at } </Typography>
            <Typography> Terminal { item.itineraries[0].segments[0].arrival.terminal } </Typography>
          </div>
          <div className="container-regreso">
            <Typography variant="h6"> Vuelo de Regreso {item.itineraries[1].segments[0].departure.iataCode} - {item.itineraries[1].segments[0].arrival.iataCode}</Typography>
            <Typography> Duracion: { item.itineraries[1].duration.replace("PT","").replace("H","H ")} </Typography>
            <Typography> Horario de salida: { item.itineraries[1].segments[0].departure.at } </Typography>
            <Typography> Horario de llegada: { item.itineraries[1].segments[0].arrival.at } </Typography>
            <Typography> Terminal { item.itineraries[1].segments[0].arrival.terminal } </Typography>         
          </div>
          <Button sx={{ margin: 2 }} onClick={handleBackClick} variant="outlined" color="primary">  Atras </Button>
          </div>
        ))}
      </div>
    </>
  )
}
