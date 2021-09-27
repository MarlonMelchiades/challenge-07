// ----- Algumas informações fixas variáveis ----- //

let inputParte4step61 =
    '</p><div class="input-group mt-1 mb-3"><input id="numero-step' +
    numeroStep61 +
    '" type="text" onkeyup="somenteNumeros(this);" class="form-control" placeholder="' +
    textoInputStep61 +
    '" aria-label="number"></input><button onclick="incrementClickStep61()" id="botao-step';

let parte6Step61 = "</button>" + '</div><span id="text-response-step';

let inputParte4step62 =
    "</p>" +
    '<div class="input-group mb-3">' +
    '<input id="n1-step' +
    numeroStep62 +
    '" type="text" onkeyup="somenteNumeros(this);" class="form-control" placeholder="Primeiro termo" aria-label="number">' +
    '<input id="n2-step' +
    numeroStep62 +
    '" type="text" onkeyup="somenteNumeros(this);" class="form-control" placeholder="Razão" aria-label="number">' +
    "</div>" +
    '<button onclick="incrementClickStep62()" id="botao-step';

let inputParte4step64 =
    "</p>" +
    '<input id="nome-step' +
    numeroStep64 +
    '" type="text" class="form-control mb-3" placeholder="Nomes" aria-label="number">' +
    '<button onclick="incrementClickStep64()" id="botao-step' +
    numeroStep64 +
    '" class="btn btn-dark me-2" type="button" id="button-addon2">Salvar Nome</button><button onclick="finalizarStep64()" id="botao-step';


// ----- Informações de dados e estrutura fixa ----- //

let parte1 =
    '<section style="margin-top: 25px;">' +
    '<div class="card text-center">' +
    '<div class="card-header">' +
    "step ";

let parte2 = "</div>" + '<div class="card-body">' + '<h5 class="card-title">';
let parte3 = "</h5>" + '<p class="card-text">';
let parte4 = '</p> <button id="botao-step';
let parte5 = '" class="btn btn-dark" type="button" id="button-addon2">';
let parte6 = "</button>" + '<span id="text-response-step';
let parte7 = '"></span>' + "</div>" + '<div class="card-footer text-muted">';
let parte8 = "</div>" + "</div>" + "</section>";

// ----- Estrutura dos dados ----- //

let cardStep61 =
    parte1 +
    numeroStep61 +
    parte2 +
    tituloStep61 +
    parte3 +
    textoStep61 +
    inputParte4step61 +
    numeroStep61 +
    parte5 +
    textoButtonStep61 +
    parte6Step61 +
    numeroStep61 +
    parte7 +
    textoCardFooterStep61 +
    parte8;

let cardStep62 =
    parte1 +
    numeroStep62 +
    parte2 +
    tituloStep62 +
    parte3 +
    textoStep62 +
    inputParte4step62 +
    numeroStep62 +
    parte5 +
    textoButtonStep62 +
    parte6 +
    numeroStep62 +
    parte7 +
    textoCardFooterStep62 +
    parte8;

let cardStep63 =
    parte1 +
    numeroStep63 +
    parte2 +
    tituloStep63 +
    parte3 +
    textoStep63 +
    parte4 +
    numeroStep63 +
    parte5 +
    textoButtonStep63 +
    parte6 +
    numeroStep63 +
    parte7 +
    textoCardFooterStep63 +
    parte8;

let cardStep64 =
    parte1 +
    numeroStep64 +
    parte2 +
    tituloStep64 +
    parte3 +
    textoStep64 +
    inputParte4step64 +
    numeroStep64 +
    parte5 +
    textoButtonStep64 +
    parte6 +
    numeroStep64 +
    parte7 +
    textoCardFooterStep64 +
    parte8;