//import { Input } from './Input.js';
import { Obj3D } from './Obj3D.js';
//import { Canvas3D } from './Canvas3D.js';
//import { CvWireframe } from './CvWireFrame.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
var canvas;
var graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
var cv;
var obj;
var ang = 0;
var maxClickA = 0;
var countClickA = 0;
var maxClickC = 10;
var countClicC = 0;
var maxClickAA = 0;
var countClickAA = 0;
var maxClickCC = 10;
var countClicCC = 0;
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;
        mostrarContenido(contenido);
        obj = new Obj3D();
        if (obj.read(contenido)) {
            //sDir = sDir1;
            cv = new CvHLines(graphics, canvas);
            cv.setObj(obj);
            cv.paint();
        }
    };
    lector.readAsText(archivo);
}
function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    //
    //readObject(new Input(contenido));
    elemento.innerHTML = contenido;
}
function vp(dTheta, dPhi, fRho) {
    if (obj != undefined) {
        var obj_1 = cv.getObj();
        if (!obj_1.vp(cv, dTheta, dPhi, fRho))
            alert('datos no validos');
    }
    else
        alert('aun no has leido un archivo');
}
function eyeDownFunc() {
    vp(0, 0.1, 1);
}
function eyeUpFunc() {
    vp(0, -0.1, 1);
}
function eyeLeftFunc() {
    vp(-0.1, 0, 1);
}
function eyeRightFunc() {
    vp(0.1, 0, 1);
}
function incrDistFunc() {
    vp(0, 0, 2);
}
function decrDistFunc() {
    vp(0, 0, 0.5);
}
function pza1IzqFunc() {
    var af = -10;
    Rota3D.initRotate(obj.w[139], obj.w[140], af * Math.PI / 180);
    for (var i = 201; i <= 238; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
var trIz = -4, trDr = -2;
function DesplazarXN() {
    var tr = 1;
    if (trIz <= -1) {
        for (var i = 9; i < 652; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        for (var i = 653; i <= 653; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        for (var i = 654; i <= 654; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        for (var i = 655; i <= 656; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        cv.setObj(obj);
        cv.paint();
        trIz++;
        trDr--;
    }
}
function DesplazarXP() {
    var tr = -1;
    if (trDr <= 1) {
        for (var i = 9; i < 652; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        for (var i = 653; i <= 653; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        for (var i = 654; i <= 654; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        for (var i = 655; i <= 656; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        cv.setObj(obj);
        cv.paint();
        trIz--;
        trDr++;
    }
}
var trATR = -7, trADL = -5;
function DesplazarAT() {
    var tr = 1;
    if (trATR <= -1) {
        for (var i = 9; i < 652; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        for (var i = 653; i <= 653; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        for (var i = 654; i <= 654; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        for (var i = 655; i <= 656; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        cv.setObj(obj);
        cv.paint();
        trATR++;
        trADL--;
    }
}
function DesplazarAD() {
    var tr = -1;
    if (trADL <= 1) {
        for (var i = 9; i < 652; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        for (var i = 653; i <= 653; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        for (var i = 654; i <= 654; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        for (var i = 655; i <= 656; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        cv.setObj(obj);
        cv.paint();
        trADL++;
        trATR--;
    }
}
var trARR = -5, trABJ = -4;
function DesplazarAR() {
    var tr = 1;
    if (trARR <= -1) {
        for (var i = 9; i < 652; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        for (var i = 653; i <= 653; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        for (var i = 654; i <= 654; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        for (var i = 655; i <= 656; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        cv.setObj(obj);
        cv.paint();
        trARR++;
        trABJ--;
    }
}
function DesplazarAB() {
    var tr = -1;
    if (trABJ <= 1) {
        for (var i = 9; i < 652; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        for (var i = 653; i <= 653; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        for (var i = 654; i <= 654; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        for (var i = 655; i <= 656; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        cv.setObj(obj);
        cv.paint();
        trABJ++;
        trARR--;
    }
}
function AbrirA() {
    if (countClicC < maxClickC) {
        var af = -5, af2 = 5;
        Rota3D.initRotate(obj.w[653], obj.w[653], af * Math.PI / 180);
        for (var i = 301; i <= 430; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        Rota3D.initRotate(obj.w[654], obj.w[654], af2 * Math.PI / 180);
        for (var i = 501; i <= 630; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countClickA--;
        countClicC++;
    }
}
function CerrarA() {
    if (countClickA < maxClickA) {
        var af = 5, af2 = -5;
        Rota3D.initRotate(obj.w[653], obj.w[653], af * Math.PI / 180);
        for (var i = 301; i <= 430; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        Rota3D.initRotate(obj.w[654], obj.w[654], af2 * Math.PI / 180);
        for (var i = 501; i <= 630; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countClickA++;
        countClicC--;
    }
}
function AbrirAG() {
    if (countClicCC < maxClickCC) {
        var af = 5;
        Rota3D.initRotate(obj.w[655], obj.w[656], af * Math.PI / 180);
        for (var i = 9; i <= 129; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countClickAA--;
        countClicCC++;
    }
}
function CerrarAG() {
    if (countClickAA < maxClickAA) {
        var af = -5;
        Rota3D.initRotate(obj.w[655], obj.w[656], af * Math.PI / 180);
        for (var i = 9; i <= 129; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countClickAA++;
        countClicCC--;
    }
}
function pza12DerFunc() {
    var af = 10;
    console.log(obj.w[29], obj.w[30], obj.w[6]);
    Rota3D.initRotate(obj.w[29], obj.w[30], af * Math.PI / 180);
    for (var i = 101; i <= 140; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    for (var i = 201; i <= 238; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
function pza12IzqFunc() {
    var af = -10;
    console.log(obj.w[29], obj.w[30]);
    Rota3D.initRotate(obj.w[29], obj.w[30], af * Math.PI / 180);
    for (var i = 101; i <= 140; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    for (var i = 201; i <= 238; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
function Patitafunc() {
    var af = 20;
    Rota3D.initRotate(obj.w[101], obj.w[102], af * Math.PI / 180);
    for (var i = 1; i <= 8; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
function MoveR() {
    var ramdom;
    ramdom = Math.ceil(Math.random() * 8);
    console.log(ramdom);
    switch (ramdom) {
        case 1:
            DesplazarXP();
            break;
        case 2:
            DesplazarXN();
            break;
        case 3:
            DesplazarAB();
            break;
        case 4:
            DesplazarAR();
            break;
        case 5:
            DesplazarAT();
            break;
        case 6:
            DesplazarAD();
            break;
        case 7:
            AbrirAG();
            break;
        case 8:
            CerrarAG();
            break;
    }
}
function MoveA() {
    var ramdom;
    ramdom = Math.ceil(Math.random() * 2);
    console.log(ramdom);
    switch (ramdom) {
        case 1:
            AbrirA();
            break;
        case 2:
            CerrarA();
            break;
    }
}
var animmation;
function Iniciaranimacion() {
    animmation = setInterval(MoveR, 200);
}
function IniciaranimacionA() {
    animmation = setInterval(MoveA, 1);
}
function detenerAnimacion() {
    clearInterval(animmation);
}
function detenerAnimacionA() {
    clearInterval(animmation);
}
document.getElementById('file-input').addEventListener('change', leerArchivo, false);
document.getElementById('eyeDown').addEventListener('click', eyeDownFunc, false);
document.getElementById('eyeUp').addEventListener('click', eyeUpFunc, false);
document.getElementById('eyeLeft').addEventListener('click', eyeLeftFunc, false);
document.getElementById('eyeRight').addEventListener('click', eyeRightFunc, false);
document.getElementById('incrDist').addEventListener('click', incrDistFunc, false);
document.getElementById('decrDist').addEventListener('click', decrDistFunc, false);
//movimiento de piezas
document.getElementById('X-').addEventListener('click', DesplazarXN, false);
document.getElementById('X+').addEventListener('click', DesplazarXP, false);
document.getElementById('y+').addEventListener('click', DesplazarAT, false);
document.getElementById('y-').addEventListener('click', DesplazarAD, false);
document.getElementById('z+').addEventListener('click', DesplazarAR, false);
document.getElementById('z-').addEventListener('click', DesplazarAB, false);
document.getElementById('AA').addEventListener('click', AbrirA, false);
document.getElementById('CA').addEventListener('click', CerrarA, false);
document.getElementById('AAG').addEventListener('click', AbrirAG, false);
document.getElementById('CAG').addEventListener('click', CerrarAG, false);
document.getElementById('MovimR').addEventListener('click', Iniciaranimacion, false);
document.getElementById('MovimA').addEventListener('click', IniciaranimacionA, false);
document.getElementById('DetenerCuerpo').addEventListener('click', detenerAnimacion, false);
document.getElementById('DetenerAlas').addEventListener('click', detenerAnimacionA, false);
var Pix, Piy;
var Pfx, Pfy;
var theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
var flag = false;
function handleMouse(evento) {
    Pix = evento.offsetX;
    Piy = evento.offsetY;
    flag = true;
}
function makeVizualization(evento) {
    if (flag) {
        Pfx = evento.offsetX;
        Pfy = evento.offsetY;
        //console.log(Pfx, Pfy)
        var difX = Pix - Pfx;
        var difY = Pfy - Piy;
        vp(0, 0.1 * difY / 50, 1);
        Piy = Pfy;
        vp(0.1 * difX, 0 / 50, 1);
        Pix = Pfx;
        /*if( Piy>Pfy+1 ){
          phi += SensibilidadY;
          vp(0, 0.1*, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Piy=Pfy;
        }
    
        if(Pfy>Piy+1){
          phi -= SensibilidadY;
          vp(0,-0.1, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Piy=Pfy;
        }*/
        /*if (Pix > Pfx + 1) {
          theta += SensibilidadX;
          vp(0.1, 0, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Pix = Pfx;
        }
            
        if (Pfx > Pix + 1) {
          theta -= SensibilidadX;
          vp(-0.1, 0, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Pix = Pfx;
        }*/
    }
}
function noDraw() {
    flag = false;
}
canvas.addEventListener('mousedown', handleMouse);
canvas.addEventListener('mouseup', noDraw);
canvas.addEventListener('mousemove', makeVizualization);
