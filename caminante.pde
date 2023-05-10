
class Caminante {

  float x, y;
  float dir, vel;
  float t = random(2,25);
  color relleno;
  float variacionAngular;
  String estado;
  long marcaEnElTiempo;
  int tiempoEnEspera;

  Caminante() {
    x = random(width);
    y = random(height);
    vel = 2;
    dir = radians( random(360) );
    relleno = color( random(255), random(255), random(255));
    //variacionAngular = dir;

    saltarAlEstado( "recta" );
    tiempoEnEspera = int( random( 300, 600 ) );
  }

  void saltarAlEstado( String nuevoEstado ) {
    estado = nuevoEstado;
    marcaEnElTiempo = millis();
  }

  void actualizar() {
    if (mouseX <width/2){
      dibujar();
      mover();
      
      //variacionAngular = 1;
    }
    
    if (mouseX > width/2){
      dibujar();
      mover();
      //variacionAngular = dir;
    }

    if ( estado.equals("recta") ) { //estado recta
      //acciones del estado      
      variacionAngular=0;
      //mover();

      long ahora = millis();
      if ( ahora > marcaEnElTiempo + tiempoEnEspera ) { //evento
        saltarAlEstado( "punta" );
      }
      
    } else if ( estado.equals("punta") ) { //estado punta
      //acciones del estado      
      variacionAngular = radians( random(mouseX) );
      mover();
      estado = "recta"; //salta inmediatamente sin evento de por medio
    }
  }

  void asignarColor( color nuevoColor ) {
    relleno = nuevoColor;
  }

  void dibujar() {
    pushStyle();
    fill( relleno );
    noStroke();
    rect( x, y, t, t );
    popStyle();
  }

  void mover() {

    dir = dir + variacionAngular;

    //transformación de polares a cartesianas
    float dx = vel * cos( dir );
    float dy = vel * sin( dir );

    //cartesianas
    x = x + dx;
    y = y + dy;

    //toroidal
    x = ( x>width ? x-width : x );
    x = ( x<0 ? x+width : x );
    y = ( y>height ? y-height : y );
    y = ( y<0 ? y+height : y );
  }
}
