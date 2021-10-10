
export const formatDate = (date) => `${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString()}`


export const formValuesToLocalStorage = (values, localStorageValue) => {
    localStorageValue.push(values);
    localStorage.setItem('eventsList', JSON.stringify(localStorageValue));
}


