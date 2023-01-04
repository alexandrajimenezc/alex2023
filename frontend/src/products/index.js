import {productsListReducer} from './products.slice'
import {productReducer}from './oneProduct.slice'

export * from './products.api'
export * from './products.slice'

export * from './oneProduct.api'
export * from './oneProduct.slice'

export const productsReducers={
    productsList:productsListReducer,
    product:productReducer,
}