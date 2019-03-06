import { AddToCart, RemoveFromCart, MinusQuantity, PlusQuantity } from './actionTypes/cartActionTypes'

export const addToCart = (id) => {
    return {
        type: AddToCart,
        id
    }
}

export const removeFromCart = (id) => {
    return {
        type: RemoveFromCart,
        id
    }
}

export const plusQuantity = (id) => {
    return {
        type: PlusQuantity,
        id
    }
}

export const minusQuantity = (id) => {
    return {
        type: MinusQuantity,
        id
    }
}