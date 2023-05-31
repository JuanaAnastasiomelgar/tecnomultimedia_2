

//----CONFIGURACION-----
let AMP_MIN = 0.02; // umbral mínimo de sonido qiu supera al ruido de fondo
let AMP_MAX = 0.2 // amplitud máxima del sonido

let AMORTIGUACION = 0.9; // factor de amortiguación de la señal

let IMPRIMIR =false;


//----MICROFONO----
let mic;


//-----AMPLITUD-----
let amp; // variable para cargar la amplitud (volumen) ee la señal de entrada del mic
let haySonido = false;
let antesHabiaSonido = false; // memoria del estado de "haySonido" un fotograma atrás

//-------CAMINANTE----
let c; // el caminante
let c2; // el caminante2

//----GESTOR----
let gestorAmp;


function setup() {
  //createCanvas(600, 600);
  createCanvas(windowWidth, windowHeight);

  //-------CAMINANTE----
  c = new Caminante();  //el de los profes
  c2 = new Caminante2();  //caminante2


  /*fondo1 = createGraphics (displayWidth, displayHeight);
  c = [];
  for (let i = 0; i < cantidad; i++) {
    c[i] = new Caminante();
  }
  background(255);*/



  //----MICROFONO-----
  mic = new p5.AudioIn(); // objeto que se comunica con la enrada de micrófono
  mic.start(); // se inicia el flujo de audio

  //----GESTOR----
  gestorAmp = new GestorSenial(AMP_MIN, AMP_MAX); // inicilizo en goestor con los umbrales mínimo y máximo de la señal

  gestorAmp.f = AMORTIGUACION;
  //------MOTOR DE AUDIO-----
  userStartAudio(); // esto lo utilizo porque en algunos navigadores se cuelga el audio. Esto hace un reset del motor de audio (audio context)
}

function draw() {

gestorAmp.actualizar(mic.getLevel());  

amp = gestorAmp.filtrada;

haySonido = amp > AMP_MIN; 

let empezoElSonido = haySonido && !antesHabiaSonido; // EVENTO

if(empezoElSonido){ // esto se va a producir solomante en 1 fotogrma en el cambio de estados. Cuando comienza un nuevo sonido
  c.saltar();
  c.cambiarColor();
  c2.saltar();
  c2.cambiarColor();
}

if(haySonido){  // ESTADO
    c.actualizar(amp);
    c2.actualizar(amp);


    // el de los profes
    c.mover();
    c.dibujar();

    c2.mover();
    c2.dibujar();

   /* for (let i = 0; i < cantidad; i++){
      c[i].dibujar();
      c[i].mover();
   
     }*/

  }
  

  if(IMPRIMIR){
    printData();
  }

  antesHabiaSonido = haySonido; // guardo el estado del fotograma anteior

}
//--------------------------------------------------------------------
function windowResized() {
  	resizeCanvas(windowWidth, windowHeight);
}

function printData(){

  background(255);
  push();
  textSize(16);
  fill(0);
  let texto;

  texto = 'amplitud: ' + amp;
  text(texto, 20, 20);

  fill(0);
  ellipse(width/2, height-amp * 300, 30, 30);

  pop();

  gestorAmp.dibujar(100, 500);
}
