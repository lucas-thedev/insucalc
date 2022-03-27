let fatorGlicemia = 25;
let fatorCarboidrato = {
    cafe: 2,
    almoco: 4,
    lanche: 8,
    janta: 4,
    extra: 8
}
let selectedRefeicao = fatorCarboidrato.extra;

function getGlicemia () {
    return document.getElementById('glicemia').value;
}

function getCarboidratos () {
    return document.getElementById('carboidratos').value;
}

function getRefeicao (refeicao) {
    let result = fatorCarboidrato.extra
    switch(refeicao) {
        case 'cafe': result = fatorCarboidrato.cafe; break;
        case 'almoco': result = fatorCarboidrato.almoco; break;
        case 'lanche': result = fatorCarboidrato.lanche; break;
        case 'janta': result = fatorCarboidrato.janta; break;
        case 'extra': result = fatorCarboidrato.extra; break;
    }

    selectedRefeicao = result
}

function calcGlicemia(glicemia) {
    if (glicemia < 120) 
        return 0

    return Math.round((glicemia - 120)/fatorGlicemia)
}

function calcCarboidrato(carboidrato, refeicao) {
    return Math.round(carboidrato/refeicao)
}

function calcInsulin() {
    const glicemia = +getGlicemia()
    const carboidratos = +getCarboidratos()
    const result = calcGlicemia(glicemia) + calcCarboidrato(carboidratos, selectedRefeicao)
    console.log(selectedRefeicao)
    document.getElementById('calc-result').innerHTML = result.toString()
}