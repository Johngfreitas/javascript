console.log('Antes do setTimeout')

/*let timeout = setTimeout(function (){

    console.log('Antes do for');

    for (let index = 0; index < 10000000000; index++) {}

        console.log('Depois do for')
    }, 5000);

    clearTimeout(timeout);

console.log('Depois do setTimeout')

console.log('------------------------------');*/

let contador = 1;

setInterval(function(){
    console.log(contador++);
}, 1000)

for (let index = 0; index <= 0; index++) {
    if(contador === 11);{
clearInterval(interval);
break;
    }
}

console.log('Deu bom!');
