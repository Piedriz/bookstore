import React from "react";

export function useLocalStorage(itemName, initialValue) {

    const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
    const {
        loading,
        error,
        item
    } = state


    //Actions cretors
    const onSuccess = (parsedItem) => { dispatch({ type: actionTypes.success, payload: parsedItem }) }
    const onError = (e) => { dispatch({ type: actionTypes.error, payload: e }) }
    const onSave = (newItem) => { dispatch({ type: actionTypes.save, payload: newItem }) }

    React.useEffect(() => {

        try {

            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;

            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue
            } else {
                parsedItem = JSON.parse(localStorageItem);
            }
            onSuccess(parsedItem);
        } catch (e) {
            onError(e)
        }

    }, [])

    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            onSave(newItem)
        } catch (e) {
            onError(e)
        }
    }

    return {
        item, error, loading, saveItem
    }   
}

const initialState = ({ initialValue }) => ({
    loading: true,
    error: false,
    item: initialValue,
})

//Action types
const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.error:
            return {
                ...state,
                error: true,
            }
        case actionTypes.success:
            return {
                ...state,
                loading: false,
                item: action.payload,
            }
        case actionTypes.save:
            return {
                ...state,
                item: action.payload,
            }
        default:
            return {
                ...state,
            }
    }
}