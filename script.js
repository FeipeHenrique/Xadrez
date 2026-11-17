const tabuleiro = document.querySelector('.tabuleiro');

const pecas = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
];

for (let linha = 0; linha < 8; linha++) {
    for (let coluna = 0; coluna < 8; coluna++) {
        const casa = document.createElement('div');

        if ((linha + coluna) % 2 === 0) {
            casa.classList.add('casa_branca');
        } else {
            casa.classList.add('casa_preta');
        }

        casa.textContent = pecas[linha][coluna];
        tabuleiro.appendChild(casa);
    }
}