import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bussinesItems: [],
  };
  
  const bussinesSlicer = createSlice({
    name: 'sliceUsers',
    initialState: { ...initialState },
    reducers: {
      setChangeVal: (state, action) => {
        state[action.payload.key] = action.payload.value;
      },
    },
    extraReducers: (builder) => {
    //   builder.addCase(getUsers.fulfilled, (state, action) => {
    //     // console.log('data balikan dari api :', action.payload);
    //     state.values = action.payload;
    //   });
    //   builder.addCase(findUsers.fulfilled, (state, action) => {
    //     state.findUser = action.payload;
    //   });
  
    //   builder.addCase(getUserRepo.fulfilled, (state, action) => {
    //     state.repoUser = action.payload;
    //   });
    },
  });
  export const {setChangeVal} = bussinesSlicer.actions
  export default bussinesSlicer.reducer;