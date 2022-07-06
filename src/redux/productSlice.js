import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getProducts} from "../services/productService";
const initialState = {
  productList:[],
  filters:[],
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
  reducers:{
    sortByCategory:(state,action)=>{
      if(state.filters.some(item=>item===action.payload)){
        state.filters=state.filters.filter((productCategory) => productCategory !== action.payload)
      }else{
        state.filters=[...state.filters, action.payload];
      } 
    },
    clearAll:(state)=>{
      state.filters=[];
    }

  },
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
export const { sortByCategory,clearAll } = productSlice.actions;
export const productReducer=productSlice.reducer; 
