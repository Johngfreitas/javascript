//DEFININDO VALOR DA VARIÁVEL
let price = 100;
//APLICANDO DESCONTO de 10%
let desconto = price * 0.1;

let valorComDesconto = price - desconto;
//let texto = "De " + price + " por " + valorComDesconto;
//let texto = "De ".concat(price, " por ", valorComDesconto);
let texto = `De ${price} por ${valorComDesconto}`;


//EXIBINDO RESULTADO
console.log(texto);
