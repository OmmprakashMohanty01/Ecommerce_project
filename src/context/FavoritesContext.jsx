import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useLocalStorage('favorites', []);

    const toggleFavorite = (product) => {
        setFavorites(prevFavorites => {
            const isFavorited = prevFavorites.some(fav => fav.id === product.id);
            if (isFavorited) {
                return prevFavorites.filter(fav => fav.id !== product.id);
            }
            return [...prevFavorites, product];
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};