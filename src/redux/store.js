import { configureStore } from "@reduxjs/toolkit";
import donationReducer from "./reducers/donationSlice"; 

const store = configureStore({
  reducer: {
    donation: donationReducer,
    // Add other reducers if needed
  },
  // Optionally add middleware or enhancers as needed
});

export default store;
