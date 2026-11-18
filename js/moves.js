import { tabuleiro, pecas } from './tabuleiro.js';

let casa_selecionada = null;
let peca_selecionada = null;

const brancas = '♙♖♘♗♕♔';
const pretas = '♟♜♞♝♛♚';
let jogador_atual = 'branco';

function vereficar_vez(peca) {
    if (!peca) return false;
    if (jogador_atual === 'branco') return brancas.includes(peca);
    return pretas,includes(peca)
}

function selecinar_casa(casa) {
    const linha = Number(casa.dataset.linha);
    const coluna = Number(casa.dataset.coluna);

    const peca = pecas[linha][coluna];

    if (!casa_selecionada) {
        if (!vereficar_vez(peca)) return;

        casa_selecionada = casa;
        peca_selecionada = peca;

        casa.classList.add('selecionada');
        return;
    }
    const linha_origem = Number(casa_selecionada.dataset.linha);
    const coluna_origem = Number(casa_selecionada.dataset.coluna);

    if (linha === linha_origem && coluna === coluna_origem) {
        
        casa_selecionada.classList.remove('selecionada');
        casa_selecionada = null;
        peca_selecionada = null;
        return;
    }
}