import { DEBOUNCE_VALUE } from '../constants.js';
export function useDebounce(input, action) {
    let debounceDelay;
    clearTimeout(debounceDelay);
    return setTimeout(async () => {
        action(input);
    }, DEBOUNCE_VALUE);
}