import { DEBOUNCE_VALUE } from '../constants.js';

let debounceDelay;
export function useDebounce(input, action) {
    clearTimeout(debounceDelay);
    return setTimeout(async () => {
        action(input);
    }, DEBOUNCE_VALUE);
}