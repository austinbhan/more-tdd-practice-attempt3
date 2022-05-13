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

export function renderLotrArray(character) {
    const divContainer = document.createElement('div');
    divContainer.setAttribute('id', 'lotr-array');

    const img = document.createElement('img');
    img.src = `./assets/${character.name}.jpg`;
    img.classList.add('sizing');

    const h4 = document.createElement('h4');
    h4.setAttribute('id', 'name-and-race');
    h4.textContent = `This is ${character.name}, a ${character.race}.`;

    const p = document.createElement('p');
    p.setAttribute('id', 'interests');
    p.textContent = `His primary interest(s) is/are ${character.interests}.`;

    divContainer.append(img, h4, p);
    return divContainer;
}

export function renderTechBroArray(techBro) {
    const divContainer = document.createElement('div');
    divContainer.setAttribute('id', 'tech-bro-array');

    const img = document.createElement('img');
    img.src = `./assets/${techBro.firstName}-${techBro.lastName}.jpg`;
    img.classList.add('sizing');

    const h4 = document.createElement('h4');
    h4.setAttribute('id', 'name-and-company');
    h4.textContent = `This is ${techBro.firstName} ${techBro.lastName}. He founded ${techBro.company}.`;

    const p = document.createElement('p');
    p.setAttribute('id', 'city');
    p.textContent = `He's based in ${techBro.city}.`;

    divContainer.append(img, h4, p);
    return divContainer;
}