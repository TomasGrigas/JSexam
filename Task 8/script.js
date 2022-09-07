/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator (a, b){
    this.a = a;
    this.b = b;
    this.sum = function (){
        return a+b;
    }
    this.subtraction = function (){
        return a-b;
    }    
    this.multiplication = function(){
        return a*b;
    }
    this.division = function(){
        return a/b;
    }
    
}
const suma = new Calculator(6, 4);
console.log(suma.sum());
const skirtumas = new Calculator(6, 4);
console.log(skirtumas.subtraction());
const daugyba = new Calculator(6, 4);
console.log(daugyba.multiplication());
const dalyba= new Calculator(6, 4);
console.log(dalyba.division());