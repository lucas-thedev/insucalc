let fatorGlicemia = 25;
let fatorCarboidrato = {
    cafe: 2,
    almoco: 4,
    lanche: 8,
    janta: 4,
    extra: 8
}
let selectedRefeicao = fatorCarboidrato.extra;
let selectedConfigRefeicao = 'extra';

function getGlicemia () {
    return document.getElementById('glicemia').value;
}

function getCarboidratos () {
    return document.getElementById('carboidratos').value;
}

function getGlicemiaConfig () {
    return document.getElementById('glicemia-config').value;
}

function getCarboidratosConfig () {
    return document.getElementById('carboidratos-config').value;
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
    setElementSelected(refeicao)

}

function setElementSelected (refeicao) {
    let refeicoes = ['cafe', 'almoco', 'lanche', 'janta', 'extra']
    refeicoes.forEach((item) => {
        document.getElementById(item).classList.remove('active')
    })

    document.getElementById(refeicao).classList.add('active')

}

function setElementSelected2 (refeicao) {
    let refeicoes = ['cafe2', 'almoco2', 'lanche2', 'janta2', 'extra2']
    refeicoes.forEach((item) => {
        document.getElementById(item).classList.remove('active')
    })

    document.getElementById(refeicao).classList.add('active')

}

function configRefeicao (refeicao) {
    selectedConfigRefeicao = refeicao
    setElementSelected2(refeicao + "2")
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
    document.getElementById('calc-result').innerHTML = result.toString()
}

function configInsulin() {
    if (getCarboidratosConfig())
    fatorCarboidrato[selectedConfigRefeicao] = +getCarboidratosConfig()

    if (getGlicemiaConfig())
    fatorGlicemia = +getGlicemiaConfig()
}

function selectTab(tab) {
    let firstpage = document.getElementById('first-page');
    let secondpage = document.getElementById('second-page');

    if (tab === 1) { 
        firstpage.style.display = 'flex';
        secondpage.style.display = 'none';
    } else {
        firstpage.style.display = 'none';
        secondpage.style.display = 'flex';
    }
}



