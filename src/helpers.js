// Local storage
//fetches data given a key
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}