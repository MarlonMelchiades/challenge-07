// ---- code validar campos de numeros ---- //

function somenteNumeros(num) {
    var er = /[^-,|^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
        campo.value = "";
    }
}

// ----- code step 61 ----- //

const inputNumeroStep61 = document.getElementById("numero-step61");
const textoResposta61 = document.getElementById("text-response-step61");

function incrementClickStep61() {
    const resultados = [];
    let numero = parseInt(inputNumeroStep61.value);
    for (let i = 1; i <= 10; i++) {
        let calculo = numero * i;
        let mascara = numero + " * " + i + " = " + calculo;
        resultados.push(mascara);
    }
    if (inputNumeroStep61.value.length === 0) {
        textoResposta61.innerHTML =
            '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
    } else {
        textoResposta61.innerHTML =
            '<ul class="m-0 p-0"><li style="list-style: none">' +
            resultados[0] +
            '</li><li style="list-style: none">' +
            resultados[1] +
            '</li><li style="list-style: none">' +
            resultados[2] +
            '</li><li style="list-style: none">' +
            resultados[3] +
            '</li><li style="list-style: none">' +
            resultados[4] +
            '</li><li style="list-style: none">' +
            resultados[5] +
            '</li><li style="list-style: none">' +
            resultados[6] +
            '</li><li style="list-style: none">' +
            resultados[7] +
            '</li><li style="list-style: none">' +
            resultados[8] +
            '</li><li style="list-style: none">' +
            resultados[9] +
            "</li></ul>";
    }
}

// ----- code step 62 ----- //

const botaoStep62 = document.getElementById("botao-step62");
const inputTermoStep62 = document.getElementById("n1-step62");
const inputRazaoStep62 = document.getElementById("n2-step62");
const textoResposta62 = document.getElementById("text-response-step62");
const pa = [];

function incrementClickStep62() {
    let termo = parseInt(inputTermoStep62.value);
    let razao = parseInt(inputRazaoStep62.value);
    if (
        inputTermoStep62.value.length === 0 ||
        inputRazaoStep62.value.length === 0
    ) {
        textoResposta62.innerHTML =
            '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
    } else {
        for (let i = termo; i; i += razao) {
            pa.push(i);
            if (pa.length === 10) {
                break;
            }
        }
    }
    for (var i = 0, total = 0; i < pa.length; total += pa[i++]);
    // ----- mensagem ----- //
    textoResposta62.innerHTML =
        '<p class="mt-3 mb-0"> A Progressão Aritmética é </br>' +
        pa +
        ".</br>E a soma total dos valores é de " +
        total +
        "!</p>";
    inputTermoStep62.value = "";
    inputRazaoStep62.value = "";
}

// ----- code step 63 ----- //

const botaoStep63 = document.getElementById("botao-step63");
const textoResposta63 = document.getElementById("text-response-step63");
const fibo = [0, 1];

function fibonacci() {
    let term = 8;
    let pen = 0,
        ult = 1,
        a;

    for (let coun = 1; coun <= term; coun++) {
        if (coun < 2) {
            fibo.push(coun);
        } else {
            a = ult;
            ult = ult + pen;
            pen = a;
            fibo.push(ult + pen);
        }
    }
    textoResposta63.innerHTML = '<p class="mt-3 mb-0">' + fibo + "!</p>";
}

botaoStep63.addEventListener("click", fibonacci);

// ----- code step 64 ----- //

const textoResposta64 = document.getElementById("text-response-step64");
const nomes = [];

function incrementClickStep64() {
    let nomeValue = document.getElementById("nome-step64");
    let nome = nomeValue.value;
    if (nomeValue.value.length === 0) {
        textoResposta64.innerHTML =
            '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
    } else {
        textoResposta64.innerHTML = "";
        nomes.push(nome);
        nomeValue.value = "";
        nomeValue.focus();
    }
}

function finalizarStep64() {
    if (nomes.length === 0) {
        textoResposta64.innerHTML =
            '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
    } else {
        textoResposta64.innerHTML =
            '<p class="mt-3 mb-0">Os nomes salvos foram:</br>' + nomes + "!</p>";
    }
}