const fruit={
    name: 'banana',
sayHiArrow:()=> console.log('Hi I am a ${this.name}'),
sayHiFunction: function(){
    console.log('Hi I am a ${this.name}')
},
};

//Creating A Class

class Foo{ 
    constructor(bar){
        this.bar=bar;
    }
    greet: function() {
        console.log('Hi, this bar value is ${this.bar}')
    }
}


//Creating an Instance Class

const foo_one= new Foo('bazz');
foo_one.greeting(); 
