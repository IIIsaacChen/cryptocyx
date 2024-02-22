// index.js
'use strict';

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @return {string} The capitalized string.
 */
function capitalize(str) {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverses a given string.
 * @param {string} str - The string to reverse.
 * @return {string} The reversed string.
 */
function reverseString(str) {
    if (typeof str !== 'string') return '';
    return str.split('').reverse().join('');
}

/**
 * Checks if a string is a palindrome.
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
    if (typeof str !== 'string') return false;
    const normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
    return normalizedStr === reverseString(normalizedStr);
}

/**
 * Converts a string to snake case.
 * @param {string} str - The string to convert.
 * @return {string} The snake cased string.
 */
function toSnakeCase(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/\W+/g, ' ')
              .split(/ |\B(?=[A-Z])/)
              .map(word => word.toLowerCase())
              .join('_');
}

/**
 * Converts a string to camel case.
 * @param {string} str - The string to convert.
 * @return {string} The camel cased string.
 */
function toCamelCase(str) {
    if (typeof str !== 'string') return '';
    return str.toLowerCase()
              .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

module.exports = {
    capitalize,
    reverseString,
    isPalindrome,
    toSnakeCase,
    toCamelCase
};
