import {configureStore} from '@reduxjs/toolkit'
import {productsReducers} from '../products/'
export const store = configureStore({
   reducer:{
    ...productsReducers,
   
   },

})


