class Car {
  constructor(){
    this.wheels = 4
    this.modelYear = 1978
    this.lights = "off"
    this.turnLight= "off"
    this.speed = 0
    this.carInfo = `${this.wheels}, ${this.modelYear}`
  }
      lightsOn(){
        this.lights = "on"
      }
      lightsOff(){
        this.lights = "off"
      }
      turnON(){
        this.turnLight = "on"
      }
      turnOff(){
        this.turnLight = "off"
      }
};

class Tesla extends Car{
  constructor(){
    super()
  }
  acc(){
    this.speed += 10
  }
  brake(){
    if(this.speed != 0)
    this.speed -= 7
  }
};

class Tata extends Car{
  constructor(){
    super()
  }
  acc(){
    this.speed += 2
  }
  brake(){
    if(this.speed != 0)
    this.speed -= 1.25
}
};
class Toyota extends Car{
  constructor(){
    super()
  }
  acc(){
    this.speed += 7
  }
  brake(){
    if(this.speed != 0)
    this.speed -= 5
  }
};

var myTesla = new Tesla()
myTesla.modelYear = 1967;
var myTesla2 = new Tesla()
myTesla2.modelYear = 1999;
var myTata = new Tata()
myTata.modelYear = 1989;
var myTata2 = new Tata()
myTata2.modelYear = 1996;
var myToyota = new Toyota()
myToyota.modelYear = 1200;
var myToyota2 = new Toyota()
myToyota2.modelYear = 002;

var array= [myTesla, myTesla2, myTata, myTata2, myToyota, myToyota2]

var byName = array.sort(function(a, b){
return (a.constructor.name>b.constructor.name)*1 + (a.constructor.name<b.constructor.name)*-1;
});

var byYear = array.sort(function(a, b){
  return a.modelYear-b.modelYear
})

var byBoth = array.sort(function(a, b){
return (a.constructor.name>b.constructor.name)*1 + (a.constructor.name<b.constructor.name)*-1 ||   a.modelYear-b.modelYear;
});
