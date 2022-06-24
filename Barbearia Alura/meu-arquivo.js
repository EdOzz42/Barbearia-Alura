var Missao = window.document.getElementById('Missao')
Missao.addEventListener('mouseenter', entrar)
Missao.addEventListener('mouseout', sair)

function entrar() {
    Missao.style.background = "green"
}
function sair() {
    Missao.style.background = "black"
}
var Banner = window.document.getElementById('banner')
Banner.addEventListener('click', clicarB)
Banner.addEventListener('mouseout', sairB)

function clicarB() {
    Banner.style.width = "75%"
    Banner.style.height = "75%"
}
function sairB() {
    Banner.style.width = "60%"
    Banner.style.height = "60%"
}