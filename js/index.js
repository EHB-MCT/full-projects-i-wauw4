"use strict"

let one = ["true"]
let two = ["true"]
let tree = ["true"]
let four = ["true"]
let five = ["true"]
let six= ["true"]
let seven= ["true"]
let eight = ["true"]
let nine = ["true"]
let ten = ["true"]

function overheid() {
    if (one[0] == "true") {
        document.getElementById('overheid').innerHTML = 'Brussels mobiliteit, Vlaamse Overheid departement omgeving, Gemeente Dilbeek, leefmilieu Brussel'
        one.shift();
        one.push("false");
    } else if (one[0] == "false") {
        document.getElementById('overheid').innerHTML = ''
        one.shift();
        one.push("true");
    }
}

function bedrijven() {
    if (two[0] == "true") {
        document.getElementById('bedrijven').innerHTML = 'Zaventem Airport'
        two.shift();
        two.push("false");
    } else if (two[0] == "false") {
        document.getElementById('bedrijven').innerHTML = ''
        two.shift();
        two.push("true");
    }
}

function organisaties() {
    if (tree[0] == "true") {
        document.getElementById('organisaties').innerHTML = 'VITO, UGENT, Gezinsbond, Leuven Mindgate, SOM, Havanza, Koren, Carki, recyclart, COOP, Pronatura, Arib, TADA'
        tree.shift();
        tree.push("false");
    } else if (tree[0] == "false") {
        document.getElementById('organisaties').innerHTML = ''
        tree.shift();
        tree.push("true");
    }
}

function festival() {
    if (four[0] == "true") {
        document.getElementById('festival').innerHTML = 'Vijverfestival, Periferiafestival, StormOpKomst, Spot On Festival, Door to Door, Fablab, and& festival, How to Best Practice'
        four.shift();
        four.push("false");
    } else if (four[0] == "false") {
        document.getElementById('festival').innerHTML = ''
        four.shift();
        four.push("true");
    }
}

function cultuur() {
    if (five[0] == "true") {
        document.getElementById('cultuur').innerHTML = 'Bozar, CC Westrand, Z33, DeSingel'
        five.shift();
        five.push("false");
    } else if (five[0] == "false") {
        document.getElementById('cultuur').innerHTML = ''
        five.shift();
        five.push("true");
    }
}

function centrum() {
    if (six[0] == "true") {
        document.getElementById('centrum').innerHTML = 'Essegem, Destelheide, Muntpunt'
        six.shift();
        six.push("false");
    } else if (six[0] == "false") {
        document.getElementById('centrum').innerHTML = ''
        six.shift();
        six.push("true");
    }
}

function instelling() {
    if (seven[0] == "true") {
        document.getElementById('instelling').innerHTML = 'VAI, AWB, CIVA'
        seven.shift();
        seven.push("false");
    } else if (seven[0] == "false") {
        document.getElementById('instelling').innerHTML = ''
        seven.shift();
        seven.push("true");
    }
}

function scholen() {
    if (eight[0] == "true") {
        document.getElementById('scholen').innerHTML = 'de Kriebel, Jongslag, St-Lucas'
        eight.shift();
        eight.push("false");
    } else if (eight[0] == "false") {
        document.getElementById('scholen').innerHTML = ''
        eight.shift();
        eight.push("true");
    }
}

function wijkcontracten() {
    if (nine[0] == "true") {
        document.getElementById('wijkcontracten').innerHTML = 'DWC, CQD, Magritte'
        nine.shift();
        nine.push("false");
    } else if (nine[0] == "false") {
        document.getElementById('wijkcontracten').innerHTML = ''
        nine.shift();
        nine.push("true");
    }
}

function architecten() {
    if (ten[0] == "true") {
        document.getElementById('architecten').innerHTML = 'Atelier ACT, Cakri, Kiss, Onkruid, Cvek-Rigby, Urban Species, B-ILD, Bogdan-Vanbroeck, Tweestorm, Xavier, De Geyter, Landscape'
        ten.shift();
        ten.push("false");
    } else if (ten[0] == "false") {
        document.getElementById('architecten').innerHTML = ''
        ten.shift();
        ten.push("true");
    }
}