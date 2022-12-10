import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import service from "../service/api";

export const getAllFood = createAsyncThunk(
  "/getAllFood",
  async (params, { rejectWithValue }) => {
    try {
      const response = await service.getAllFood(
        params.limit,
        params.page,
        params.categories,
        params.price
      );
      console.log(response);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
  bussinesItems: [],
};

const bussinesSlicer = createSlice({
  name: "sliceUsers",
  initialState: { ...initialState },
  reducers: {
    setChangeVal: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
      builder.addCase(getAllFood.fulfilled, (state, action) => {
        console.log('data balikan dari api :', action.payload);
        // state.values = action.payload;
      });
    //   builder.addCase(findUsers.fulfilled, (state, action) => {
    //     state.findUser = action.payload;
    //   });
    //   builder.addCase(getUserRepo.fulfilled, (state, action) => {
    //     state.repoUser = action.payload;
    //   });
  },
});
export const { setChangeVal } = bussinesSlicer.actions;
export default bussinesSlicer.reducer;
