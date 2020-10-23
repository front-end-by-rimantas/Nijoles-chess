const size = 8;
const selector = 'body > div.board';
let HTML = '';

// randame norima elementa HTML'e pagal pateikta selector'iu
const boardDOM = document.querySelector(selector);

// naujo norimo HTML generavimas
const elementSize = 100 / size;
for (let row = 0; row < size; row++) {
    HTML += `<div class="row" style="height: ${elementSize}%;">`;

    for (let cell = 0; cell < size; cell++) {
        let color = '';

        if ((row + cell) % 2 === 0) {
            color = 'white';
        } else {
            color = 'black';
        }

        HTML += `<div class="cell ${color}" style="width: ${elementSize}%;"></div>`
    }

    HTML += `</div>`;
}

// perrasome elemento turini (HTML struktura)
boardDOM.innerHTML = HTML;