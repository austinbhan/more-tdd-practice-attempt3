// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderTestArray, renderLotrArray, renderTechBroArray } from '../utils.js';
import { testArray, lotrArray, techBroArray } from '../testArray.js';



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

test('lotrArray Test', (expect) => {

    const expected = `<div id="lotr-array"><img src="./assets/Frodo.jpg" class="sizing"><h4 id="name-and-race">This is Frodo, a hobbit.</h4><p id="interests">His primary interest(s) is/are breakfast.</p></div>`;

    const actual = renderLotrArray(lotrArray[0]);

    expect.equal(actual.outerHTML, expected);
});

test('techBroArray Test', (expect) => {

    const expected = `<div id="tech-bro-array"><img src="./assets/Larry-Ellison.jpg" class="sizing"><h4 id="name-and-company">This is Larry Ellison. He founded Oracle.</h4><p id="city">He's based in Redwood Shores.</p></div>`;

    const actual = renderTechBroArray(techBroArray[0]);

    expect.equal(actual.outerHTML, expected);
});

// Prospective Expected Goes Under Here
