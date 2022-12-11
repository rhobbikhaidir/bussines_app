import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import service from '../service/api';

export const getAllFood = createAsyncThunk(
  '/getAllFood',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoader(true));
      const response = await service.getAllFood(
        params.limit,
        params.page,
        params.categories,
        params.price,
        params.term
      );
      if (response.status) {
        dispatch(
          setChangeVal({ key: 'totalCount', value: response.data.total })
        );

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

export const getDetailFood = createAsyncThunk(
  '/getDetailFood',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      // dispatch(setLoader(true));
      const response = await service.getDetailFood(params.id);
      // if (response.status) {
      //   dispatch(
      //     setChangeVal({ key: "totalCount", value: response.data.total })
      //   );

      //   dispatch(setLoader(false));
      // }
      // console.log(response.status);
      return response;
    } catch (error) {
      // dispatch(setLoader(false));
      rejectWithValue(error);
    }
  }
);

const initialState = {
  bussinesItems: [],
  loader: false,
  totalCount: 0,
  detailItems: {},
};

const bussinesSlicer = createSlice({
  name: 'sliceUsers',
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
      state.bussinesItems = action.payload.data.businesses;
    });
    builder.addCase(getDetailFood.fulfilled, (state, action) => {
      state.detailItems = action.payload.data;
    });
  },
});
export const { setChangeVal, setLoader } = bussinesSlicer.actions;
export default bussinesSlicer.reducer;
