
import { useEffect } from "react";
import {  useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
export const Details = ( id ) => {
  
  const{ numeroID } = useParams();
  console.log("el id es: ",numeroID);
  const searchResults = useSelector((state) => state.results.data);
  const dispatch = useDispatch();


  useEffect (() => {
    
  }
  , [searchResults]);
  
  return (
    <>
      <div>
        {searchResults.filter((item) => item.id ===  {id} ).map((item) => (
          <div>
            <h1> Itinerarios</h1>
            <div> Precio: {item.price.base}  <span> {item.price.currency}  </span> </div>
            <div key={item.id}></div> 
            <h2> Vuelo de Ida {item.itineraries[0].segments[0].departure.iataCode} - {item.itineraries[0].segments[0].arrival.iataCode}</h2>
            <div> Duracion: { item.itineraries[0].duration.replace("PT","").replace("H","H ")} </div>
            <div> Origen: { item.itineraries[0].segments[0].arrival.iataCode } </div>
            <div> Horario de salida: { item.itineraries[0].segments[0].departure.at } </div>
            <div> Horario de llegada: { item.itineraries[0].segments[0].arrival.at } </div>
            <div> Terminal { item.itineraries[0].segments[0].arrival.terminal } </div>

            <h2> Vuelo de Regreso {item.itineraries[1].segments[0].departure.iataCode} - {item.itineraries[1].segments[0].arrival.iataCode}</h2>
            <div> Duracion: { item.itineraries[0].duration.replace("PT","").replace("H","H ")} </div>
            <div> Origen: { item.itineraries[1].segments[0].arrival.iataCode } </div>
            <div> Horario de salida: { item.itineraries[1].segments[0].departure.at } </div>
            <div> Horario de llegada: { item.itineraries[1].segments[0].arrival.at } </div>
            <div> Terminal { item.itineraries[1].segments[0].arrival.terminal } </div>
            
                      
            </div>
        ))}
      </div>
    </>
  )
}
