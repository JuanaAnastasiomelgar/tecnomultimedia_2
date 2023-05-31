class Caminante{

    constructor(){
        
        this.saltar();
        this.diam = random(5, 40);

        this.vel = 5;
        this.dir = radians(random(10));

        this.elColor = color(random(255), random(255), random(255) );
    }

    //-----------------------------------------------

    actualizar(amplitud){

        this.diam = map(amplitud, AMP_MIN, AMP_MAX, 5, 8 ); // mapeamos el valor de amp de entrada al diámetro del caminante
       // this.vel = map(amplitud, AMP_MIN, AMP_MAX, 1, 25 ); // lo mismo hacemos con la velocidad
        //Esto lo podemos usar para controlar las velocidades de las diferentes lineas
    }
    //-----------------------------------------------
    saltar(){
        this.x = random(windowWidth);
        this.y = random(windowHeight);
        //this.elColor = color(random(255), random(255), random(255) );
    }
    
    //-----------------------------------------------
    /*cambiarTam (tam){
    this.diam = tam;
     }*/

    //-----------------------------------------------
    cambiarColor(){
        this.elColor = color(random(255), random(255), random(255) );
       // this.elColor = nuevoColor;
    }
    //-----------------------------------------------
    mover(){

        this.dir += radians(random(-30, 30));
       // this.diam ++;

        this.x = this.x + this.vel * cos(this.dir);
        this.y = this.y + this.vel * sin(this.dir);

        //--------Espacio toroidal---

        this.x = this.x > windowWidth ? this.x - windowWidth :  this.x;
        this.x = this.x < 0 ? this.x + windowWidth : this.x;

        this.y = this.y > windowHeight ? this.y - windowHeight :  this.y;
        this.y = this.y < 0 ? this.y + windowHeight : this.y;
    }
    //-----------------------------------------------
    dibujar(){
  
        push();
        noStroke();
        fill(this.elColor)
        rect(this.x, this.y, this.diam, this.diam);
        pop();
    }
}