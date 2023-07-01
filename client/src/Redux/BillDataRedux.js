import {createSlice} from '@reduxjs/toolkit'

const BillData=createSlice({
    name:'BillData',
    initialState:{
        currentBill:null,
        TotalPrice:null
    },
    reducers:{
        addtoBill:(state,action)=>{
            state.currentBill=action.payload
        },
        TotalAmount:(state,action)=>{
state.TotalPrice=action.payload
        }
    }

})

export const {addtoBill,TotalAmount} =BillData.actions
export default BillData.reducer