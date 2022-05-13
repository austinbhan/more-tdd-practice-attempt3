// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderTestArray } from '../utils.js';
import { testArray } from '../testArray.js';

const test = QUnit.test;

test('testArray Test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div id="test-array"><h4 id="number-statement">1</h4><h5 id="letter-statement">a</h5></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTestArray(testArray[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
