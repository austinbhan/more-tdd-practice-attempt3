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

// Prospective Expected Goes Under Here
`<div id="lotr-array"> 
<h4 id="name-and-race">This is Frodo, a hobbit.</h4>
<p id= "interests">His primary interests are breakfast.</p>
</div>

<div id="tech-bro-array">
<h4 id="name-and-company">This is Larry Ellison. He founded Oracle.</h4>
<p id="city">He's based in Redwood Shores.</p>
</div>`