const pantalla = window.screen.width

function insertPetalos(){
    let girasol = document.getElementsByClassName('girasol')[0];
    for (let i = 0; i < 48; i++) {
        girasol.innerHTML += '<div class="petalo"> <div class="petalo-curvo"></div> </div>'
    }
     girasol.innerHTML += `
    <div class="centro" style="left: 165.2px;">
    <div class="centroText">
        <span class="typed"></span>
    </div>
    </div>
    `
    AnimacionAire();
}

//recien de Pasto Segun el tamaño de la pantalla
function insertPasto(){
    const style = document.createElement('style');
    document.head.appendChild(style);

    let pasto = document.getElementById('jardin');
    let indiceTmp = 0;
    let altura = 9;
    let pastoTotal =  Math.round(Math.round(pantalla) /14);
    for (let i = 0; i < (pastoTotal * 2.1); i++) {
        pasto.innerHTML += '<div class="pasto"></div>'
        let rotacionPasto = Math.floor(Math.random() * 65);
        let modifiPasto = Math.floor(Math.random() * (45 - 25 + 1) + 25);
        if(i <= pastoTotal){
            if (indiceTmp == 0) {
                document.getElementsByClassName('pasto')[i].style.left =   -14 + "px";
            }else if( indiceTmp == 1){
                document.getElementsByClassName('pasto')[i].style.left =   0 + "px";
            }else {
                document.getElementsByClassName('pasto')[i].style.left =  14 * (indiceTmp - 1) + "px";
            }
        }else{
            document.getElementsByClassName('pasto')[i].style.bottom =   3 + "px";
            document.getElementsByClassName('pasto')[i].style.zIndex =   -1 ;
            if (i == 97) {
                document.getElementsByClassName('pasto')[i].style.left =   (-14)-altura + "px";
            }else if( i == 98){
                document.getElementsByClassName('pasto')[i].style.left =   0-altura + "px";
            }else {
                document.getElementsByClassName('pasto')[i].style.left =  (14 * (indiceTmp -1))-altura + "px";
            }
        }
        document.getElementsByClassName('pasto')[i].style.transform =   'skew('+modifiPasto+'deg) rotate('+rotacionPasto+'deg)';
        let rule =`
        @keyframes movimiento`+i+` {
          0% {
            transform: skew(`+modifiPasto+`deg) rotate(`+rotacionPasto+`deg);
          }
          100% {
            transform: skew(`+(modifiPasto/2)+`deg) rotate(`+(rotacionPasto/2)+`deg);
          }
        }
      `
         const sheet = style.sheet;
        sheet.insertRule(rule, sheet.cssRules.length);
        document.getElementsByClassName('pasto')[i].style.animationName = "movimiento"+i;
        document.getElementsByClassName('pasto')[i].style.animationDuration = "3s";
   
        document.getElementsByClassName('pasto')[i].style.animationDirection = "alternate";
        document.getElementsByClassName('pasto')[i].style.animationIterationCount = "infinite"; 
        indiceTmp ++ ;
        if(i == pastoTotal){indiceTmp = 0}
    }
    
}
insertPasto()
insertPetalos()

function AnimacionAire(){
    let petalos = document.getElementsByClassName('petalo-curvo');
    for (let index = 0; index < petalos.length; index++) {
        
        petalos[index].style.animationName = "moving";
        petalos[index].style.animationDuration = "8s";
        petalos[index].style.animationDirection = "alternate";
        petalos[index].style.animationIterationCount = "infinite"; 
    }
     
}
function parrafos(a) {
    for (let index = 0; index < document.getElementsByClassName('borbuja').length; index++) {
        
        if(index != a){
            document.getElementsByClassName('borbuja')[index].classList.remove('activa');
            setTimeout(() => {
                document.getElementsByClassName('borbuja')[index].style.display = 'none'
            }, 300);
        }
    }
    if(document.getElementsByClassName('borbuja')[a].classList[1] == 'activa'){
        document.getElementsByClassName('borbuja')[a].classList.remove('activa');
        setTimeout(() => {
            document.getElementsByClassName('borbuja')[a].style.display = 'none'
        }, 300);
    }else{
        document.getElementsByClassName('borbuja')[a].style.display = 'block'
        document.getElementsByClassName('borbuja')[a].classList.add('activa');
        
    }
}
//En las etiquetas i colocar el texto que se quiere mostrar
const typed = new Typed('.typed', {
	strings: [
		'<i class="verboYou">La flor</i>',
		'<i class="verboYou">Más Linda</i>',
		'<i class="verboYou">De Los</i>',
		'<i class="verboYou">Olivos</i>'
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
//musica al abrir la pagina(no funciona por que papa google no le gusta que entren a una pagina y reproduscan algo sin que el usuario lo pida)
window.addEventListener('click', function() {
    document.getElementById("music1").volume = 1
    // while(document.getElementById("music1").volume < 0.5){
    //     setTimeout(() => {
    //         document.getElementById("music1").volume += 0.05
    //     }, 10);
    // }
    document.getElementById("music1").play()
});

addEventListener('click', function(value){
   
    let id;
    if(value.target.classList.value.length > 0){
        id = value.target.classList.value
    }else{
        id = value.target.id
    }

    switch (id) {
        case "centroText"   : openModal()       ; break;
        case "cruzCerrar"   : cerrarModal()     ; break;
        case "centradoModal": cerrarModal()     ; break;
        case "btnModal"     : llevarTarjetas()  ; break;
        case "estrellas"    : llevarATI()       ; break;
        case "imgoso"       : llevarOso()       ; break;
        
        default:
            break;
    }
})
addEventListener("mouseover", (event) => {
    
    
    if(event.target.id == "imgoso"){
        
        document.getElementsByClassName("borbuja2")[0].style.opacity = "1";
    }else{
        
        document.getElementsByClassName("borbuja2")[0].style.opacity = "0";
    }
});
//transicion entre paginas, esto si tienes mas de un hml y quede mas bonito
function fnOscurecer(){
    var overlay = document.getElementById("Oscurecer");

    setTimeout(function () {
        overlay.style.backgroundColor = "rgb(0 0 0)";
    }, 10);
}
// funciones para pasar entre paginas
// function llevarATI(){
   
//         fnOscurecer()
//         const final = new Promise(function (resolve) {overlay.addEventListener("transitionend", function () {resolve();}, { once: true }); });
//         final.then(function () {
//             window.location.href = "./html/ATI.html"
//         });
// }
// function llevarOso(){
// //    if(new Date() >= new Date("08/04/2023"))
// //    {
//     fnOscurecer()
//     const final = new Promise(function (resolve) {overlay.addEventListener("transitionend", function () {resolve();}, { once: true }); });
//     final.then(function () {
//         window.location.href = "./html/Oso.html"
//     });
// //    }
// //    else
// //    {
// //     return
// //    }
// }
function textoOso(){
    let texto = document.getElementById("textodeloso");
    // if(new Date() >= new Date("08/04/2023"))
    // {
        texto.textContent = "Ya ❤️"
        document.getElementsByClassName("borbuja2")[0].style.width = "40px"
    // }
    // else
    // {
    //     texto.textContent = "Aun no ❤️"
    // }
}
//validacion del password
function llevarTarjetas(){
    let nombre = document.getElementById("inputNombre").value 
    
    if(nombre.toLowerCase().trim() === 'katy'){
        fnOscurecer()
        const final = new Promise(function (resolve) {overlay.addEventListener("transitionend", function () {resolve();}, { once: true }); });
        final.then(function () {
            window.location.href = "https://youtu.be/izGwDsrQ1eQ"
        });
    }else{
        alert("Mensaje de  si falla la palabra clave(me dio flojera hacerlo bonito))")
    }
}
textoOso();
//Funciones de modal
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}
function cerrarModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
  // Función para cerrar el modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  var overlay = document.getElementById("Oscurecer");
        
        setTimeout(function () {
            overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
        }, 10);