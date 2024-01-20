import { DEBOUNCE_VALUE } from '../constants.js';

export function useDebounce(callBack) {
    let debounceDelay;
    const DebouncedAction = (...args) => {
        clearTimeout(debounceDelay);
        debounceDelay = setTimeout(async () => {
            callBack(...args);
        }, DEBOUNCE_VALUE)
    }
    return {
        DebouncedAction
    };
}