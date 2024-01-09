import { DEBOUNCE_VALUE } from '../constants.js';

let debounceDelay;
export function useDebounce(callBack) {
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