'use strict'

//var    -> mutável  -> global
//let    -> mutável  -> bloco
//const  -> imutável -> bloco

function trocarTitulo () {
    const titulo = document.getElementById('titulo')
    const tituloDigitado = prompt('Digite um titulo')
    if (tituloDigitado =='') {
        titulo.textContent = 'SENAI'
    }else{
        titulo.textContent = tituloDigitado
        titulo.classList.add('verde')
    }
}
const botaoTrocarTitulo = document.getElementById('trocar-titulo')
botaoTrocarTitulo.addEventListener('click', trocarTitulo)

function cadastro () {
    const nome = document.getElementById('nome')
    const nomeDigitado = prompt('Digite se nome')
    
    const cidade = document.getElementById('cidade')
    const cidadeDigitado = prompt('Digite sua cidade')

    const media = document.getElementById('media') 
    const mediaDigitado = prompt('Digite sua média')

}

const botaoCadastro = document.getElementById('cadastro')
botaoCadastro.addEventListener('click', cadastrar)

   