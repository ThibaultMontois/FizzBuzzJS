let resp = document.getElementsByTagName('p')[0];

/**
 * Add 'text' in 'container'
 * 
 * @param { HTMLElement } container 
 * @param { String } text 
 */
function writeResp(container, text) {
    container.innerText += text;
}

/**
 * Check if 'num' is a multiple of 'den'
 * 
 * @param { Number } num 
 * @param { Number } den 
 * @returns { Boolean } true if 'num' is a multiple of 'den', else false
 */
function isMultiple(num, den) {
    return num % den === 0;
}

/**
 * Check if numbers from 1 to 100 are multiples of 3, 5 or both.
 * Write respectively 'Fizz', 'Buzz' or 'FizzBuzz' if they are.
 */
function fizzBuzz() {
    for (let num = 1; num <= 100; num++) {
        resp.innerText += `${num} : `;
        if (isMultiple(num, 3)) writeResp(resp, 'Fizz');
        if (isMultiple(num, 5)) writeResp(resp, 'Buzz');
        resp.innerText += '\n';
    }
}

fizzBuzz();