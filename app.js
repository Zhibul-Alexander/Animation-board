const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const RANDOM_COLORS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => addColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function addColor(element) {
    const randomColor = getRandomColor()

    element.style.backgroundColor = randomColor
    element.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    let color = '#';
    const randomIndex = () => Math.floor(Math.random() * RANDOM_COLORS.length);

    for (let i = 0; i < 6; i++) {
        color += RANDOM_COLORS[randomIndex()];
    }
    return color;
}

