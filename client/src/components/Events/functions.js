
export const formatDate = (date) => `${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString()}`


export const formValuesToLocalStorage = (values, localStorageValue) => {
    localStorageValue.push(values);
    localStorageValue.sort((a,b) => Date.parse(a.warnFor) - Date.parse(b.warnFor))
    localStorage.setItem('eventsList', JSON.stringify(localStorageValue));
}

export const getTimeRemaining = (total) => {
    // const total = Date.parse(endTime) - Date.now();
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );

    return {
        // total,
        days,
        hours,
        minutes,
        seconds
    };
}

export const deleteEvent = (index) => {
    const localStorageValue = JSON.parse(localStorage.getItem("eventsList"));  
    localStorageValue.splice(index, 1);
    localStorage.setItem('eventsList', JSON.stringify(localStorageValue));
}

export const progressBar = (item, progressBarWidth) => {
    const progress = (Date.parse(item.warnFor) - Date.now()) *100 / (Date.parse(item.warnFor) - Date.parse(item.today))
    return progressBarWidth.current.style.width = progress+'%'
}