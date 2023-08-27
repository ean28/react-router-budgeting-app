// Local storage
//fetches data given a key
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// delete item
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}