import {creteSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    error: {},
    data: {}
}

const detailSlice = creteSlice({
    name: 'flightdetail',
    initialState,
    reducers: {
        fetchFlightsStart: (state) => {
            state.isLoading = true;
        },
        fetchFlightsComplete: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        fetchFlightsError: (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        }
        
    }
}
);


export const {fetchFlightsStart, fetchFlightsComplete, fetchFlightsError} = detailSlice.actions;
export default detailSlice.reducer;


