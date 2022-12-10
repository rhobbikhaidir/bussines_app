import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import service from "../service/api";

export const getAllFood = createAsyncThunk(
  "/getAllFood",
  async (params, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoader(true));
      const response = await service.getAllFood(
        params.limit,
        params.page,
        params.categories,
        params.price
      );
      if(response.status) {
      dispatch(setLoader(false));

      }
      console.log(response.status);
      return response;
    } catch (error) {
      dispatch(setLoader(false));
      rejectWithValue(error);
    }
  }
);

const initialState = {
  bussinesItems: [],
  loader: false,
};

const bussinesSlicer = createSlice({
  name: "sliceUsers",
  initialState: { ...initialState },
  reducers: {
    setChangeVal: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
  extraReducers: (builder) => {
      builder.addCase(getAllFood.fulfilled, (state, action) => {
        // console.log('data balikan dari api :', action.payload);
        
        state.bussinesItems = action.payload.data.businesses;
      });
    //   builder.addCase(findUsers.fulfilled, (state, action) => {
    //     state.findUser = action.payload;
    //   });
    //   builder.addCase(getUserRepo.fulfilled, (state, action) => {
    //     state.repoUser = action.payload;
    //   });
  },
});
export const { setChangeVal, setLoader } = bussinesSlicer.actions;
export default bussinesSlicer.reducer;
