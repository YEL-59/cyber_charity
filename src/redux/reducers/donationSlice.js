import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 100, // Initial default amount
};

export const donationSlice = createSlice({
  name: "donation",
  initialState,
  reducers: {
    setDonationAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const { setDonationAmount } = donationSlice.actions;

export default donationSlice.reducer;
