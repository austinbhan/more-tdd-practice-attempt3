export function renderTestArray(test) {
    const divContainer = document.createElement('div');
    divContainer.setAttribute('id', 'test-array');

    const h4 = document.createElement('h4');
    h4.setAttribute('id', 'number-statement');
    h4.textContent = `${test.number}`;

    const h5 = document.createElement('h5');
    h5.setAttribute('id', 'letter-statement');
    h5.textContent = `${test.letter}`;

    divContainer.append(h4, h5);
    return divContainer;
}