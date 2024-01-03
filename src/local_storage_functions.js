let localStorageValue;
export let setInLocalStorage = function (key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        localStorageValue = { key: key, value: value };
    }
};
export let getFromLocalStorage = function (key) {
    try {
        let storedValue = localStorage.getItem(key);
        if (storedValue === null) {
            localStorage.setItem(key, JSON.stringify(storedValue));
        }
        return JSON.parse(storedValue)
    } catch (err) {
        console.log(err);
        return localStorageValue[key];
    }
};