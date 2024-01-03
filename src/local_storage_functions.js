let localStorageValue;
export let setInLocalStorage = function (key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        localStorageValue = { key: key, value: value };
    }
};
export let getFromLocalStorage = function (key, defaultValue) {
    try {
        let storedValue = localStorage.getItem(key);
        return (storedValue !== null) ? JSON.parse(storedValue) : defaultValue;
    } catch (err) {
        console.log(err);
        return defaultValue;
    }
};