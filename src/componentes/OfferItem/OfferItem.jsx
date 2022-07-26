import { Button, Typography  } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';


export const OfferItem = ({ id, lastTicketingDate, numberOfBookableSeats, price  } ) => {
  
  const navigate = useNavigate();

  
  const handleDetailsClick = (id) => {
   navigate (`/details`);  
  }

  return (
    <>
        <div className="offer-item">
            <Typography className="offer-item_element"> id: {id}</Typography >
            <Typography  className="offer-item_element">  Asientos disponibles: {numberOfBookableSeats}</Typography >
            <Typography  className="offer-item_element"> Ultimo dia para reservar: {lastTicketingDate}</Typography >
            <Typography  className="offer-item_element"> Precio: {price.base} {price.currency} </Typography >
            <Button onClick={handleDetailsClick} variant="contained" color="primary">  Ver Detalles </Button>
        </div>
 
    </>
  )
}
