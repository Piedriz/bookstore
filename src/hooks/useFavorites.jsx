
import { useLocalStorage } from "./useLocalStorage";

export function useFavorites(){
    // const {
    //     item : favoriteItems,
    //     saveItem: saveFavorite,
    //     loading,
    //     error,
    // } = useLocalStorage(
    //     'FAVORITES_LIST', []);
    const favoriteItems = localStorage.getItem('FAVORITES')
    if(!favoriteItems){
        localStorage.setItem('FAVORITES', JSON.stringify([]));   
    }

    const addFavorite = (payload) => {
        const favoriteItems = JSON.parse(localStorage.getItem('FAVORITES'))
        const newFavoritesArray = [...favoriteItems];
        newFavoritesArray.push(payload);
        localStorage.setItem('FAVORITES', JSON.stringify(newFavoritesArray));
        // saveFavorite(newFavoritesArray)
    }
    return ({addFavorite})
}