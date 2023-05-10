
Caminante c[];
int cantidad = 10;
Paleta paleta;

void setup(){
  size( 1200 , 600 );
  paleta = new Paleta("markmasyga.png");
  c = new Caminante[ cantidad ];
  for( int i=0 ; i<cantidad ; i++ ){
    c[i] = new Caminante();
    c[i].asignarColor( paleta.darUnColor() );
  }
  background(215);
}
void draw(){
  for( int i=0 ; i<cantidad ; i++ ){
    c[i].actualizar();
    c[i].dibujar();
  }
}
