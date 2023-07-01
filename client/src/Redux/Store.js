import { configureStore } from "@reduxjs/toolkit";
import Billreducer from './BillDataRedux'

export default configureStore ({
    reducer:{
        BillData:Billreducer
    }
})