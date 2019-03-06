import { AddToCart, RemoveFromCart, PlusQuantity, MinusQuantity } from "../actions/actionTypes/cartActionTypes";

const initState = {
    items: [
        { id: 1, title: 'iPhone X 256gb', price: 310000, img: 'https://cf4.s3.souqcdn.com/item/2017/10/23/26/94/17/69/item_XL_26941769_55971083.jpg' },
        { id: 2, title: 'iPhone Xs Max', price: 800000, img: 'https://cf4.s3.souqcdn.com/item/2017/10/23/26/94/17/69/item_XL_26941769_55971083.jpg' },
    ],
    addedItems: [],
    total: 0

}

const cartReducer = (state = initState, action) => {

    if (action.type === AddToCart) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }

    if (action.type === RemoveFromCart) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if (action.type === PlusQuantity) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }

    if (action.type === MinusQuantity) {
        let addedItem = state.items.find(item => item.id === action.id)
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
    }

    return state
}

export default cartReducer;