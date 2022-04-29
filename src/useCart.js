import React, { useState } from "react";
import { Cart } from "./Cart";
// import {useEffect} from "react"


const cart = new Cart();
export const useCart = () => {
    const [items, setItems] = useState(cart.items)
    const [quantity, setQuantity] = useState(cart.quantity)
    const [total, setTotal] = useState(cart.total)

    
    const addItem = (product) => {
        cart.addItem(product);
        refreshState();
    }

    const removeItem = (product) => {
        cart.removeItem(product);
        refreshState();
    }

    const decrementItem = (product) => {
        cart.decrement(product);
        refreshState();
    }

    const refreshState = () => {
        setItems(cart.items);
        setQuantity(cart.quantity);
        setTotal(cart.total);
    }

    return {items, addItem, removeItem, decrementItem, quantity, total }


}

