import { ExitToAppOutlined } from "@mui/icons-material";
import apiCall from "../../api";
import { apiCallGetToken } from "../../api";

export const FETCH_FLIGHTS_START = "FETCH_FLIGHTS_START";
export const FETCH_FLIGHTS_COMPLETE = "FETCH_FLIGHTS_COMPLETE";
export const FETCH_FLIGHTS_ERROR = "FETCH_FLIGHTS_ERROR";
export const ADD_SEARCH_ITEM = "ADD_SEARCH_ITEM";


export const fetchFlightsStart = () => ({
  type: FETCH_FLIGHTS_START,
});

const fetchFlightsComplete = (payload) => ({
  type: FETCH_FLIGHTS_COMPLETE,
  payload,
});

const fetchFlightsError = (error) => ({
  type: FETCH_FLIGHTS_ERROR,
  error,
});

//Action creator

export const fetchFlights = (params) => async (dispatch) => {
    

  try {
    
    const responseToken = await apiCallGetToken();
    console.log(responseToken);

    dispatch(fetchFlightsStart());

    let queryString = "";
    if (params.fechaVuelta === "") {
      queryString = `?originLocationCode=${params.origen}&destinationLocationCode=${params.destino}&departureDate=${params.fechaIda}&adults=${params.adultos}&max=5`;
    } else {
      queryString = `?originLocationCode=${params.origen}&destinationLocationCode=${params.destino}&departureDate=${params.fechaIda}&returnDate=${params.fechaVuelta}&adults=${params.adultos}&max=5`;
    }

    if(Number(params.ninos) > 0) {
        queryString += `&children=${params.ninos}`;
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${responseToken.access_token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const response = await apiCall(queryString, requestOptions);
    console.log("el data es: ", response);
    dispatch(fetchFlightsComplete(response?.data));
  } catch (error) {
    dispatch(fetchFlightsError(error));
  }
};


export const addSearchItem = (payload) => ({
  type: ADD_SEARCH_ITEM,
  payload,
});
