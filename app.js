// import functions and grab DOM elements
import { testArray } from './testArray.js';
`import { lotrArray } from './testArray.js';
import { techBroArray } from './testArray.js';`

import { renderTestArray } from './utils.js';
`import {  } from './utils.js';
import {  } from './utils.js';`

function firstArray() {
    const arrayOne = document.getElementById('array-one');
    
    for (let array of testArray) {
        const arrayDiv = renderTestArray(array);
        arrayOne.append(arrayDiv);
    }
}

firstArray();