import { Routes, Route} from "react-router-dom"
import { FlightDetails } from "../pages/FlightDetails"
import { SearchFlightPage } from "../pages/SearchFlightPage"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/search" element={ <SearchFlightPage /> } />
      <Route path="/details" element={ <FlightDetails /> } />
      <Route path="/*" element={ <SearchFlightPage /> } />
      
    </Routes>
  )
}
