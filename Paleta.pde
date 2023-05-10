class Paleta{

  PImage imagen;

  Paleta (String nombre){
    imagen = loadImage (nombre);
  }

  color darUnColor(){
    int posX = int (random (imagen.width));
    int posY = int (random (imagen.height));
    return imagen.get( posX, posY);
  }

  color darUnColor(float alfa){
    int posX = int (random (imagen.width));
    int posY = int (random (imagen.height));
    color este = imagen.get( posX, posY);
    return color (red (este) , green (este) , blue (este) , alfa);
  }

}
