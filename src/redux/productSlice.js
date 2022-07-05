import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getProducts} from "../services/productService";
const initialState = {
  productList:[],
  status: 'idle',
  error:"",
};

export const getAllProducts=createAsyncThunk(
  "product/getAllProducts",async(_,{rejectWithValue})=>{
    try{
      const {data}=await getProducts();
      return data;
    }catch(error){
      return rejectWithValue(error.message);
    }
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers:{
    [getAllProducts.pending]:(state,action)=>{
      state.status="pending";
      state.productList=[];
      state.error="";
    },
    [getAllProducts.fulfilled]:(state,action)=>{
      state.status="fulfilled";
      state.productList=action.payload;
      state.error="";
    },
    [getAllProducts.rejected]:(state,action)=>{
      state.status="rejected";
      state.productList=[];
      state.error=action.payload;
    }
  }
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export const selectCount = (state) => state.counter.value;
export const productReducer=productSlice.reducer; 
