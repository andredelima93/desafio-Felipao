
let categoria ="";
const Saldo_rankeadas = calculo_vitorias(105,100);
const nivel = ["Ferro","Bronze","Prata","Ouro","Diamante","Lendario","Imortal"];

function calculo_vitorias(vitorias, derrotas ){
    return  vitorias-derrotas;
      
    }

if (Saldo_rankeadas <= 10){
    categoria=nivel[0];
}   
else if(Saldo_rankeadas>=11 && Saldo_rankeadas<=20){
    categoria=nivel[1];
}
else if(Saldo_rankeadas>=21 && Saldo_rankeadas <=50){
    categoria=nivel[2];
}
else if(Saldo_rankeadas>= 51 && Saldo_rankeadas<=80){
    categoria=nivel[3];
}
else if(Saldo_rankeadas>=81 && Saldo_rankeadas<=90){
    categoria=nivel[4];
}
else if(Saldo_rankeadas>=91 && Saldo_rankeadas<=100){
    categoria=nivel[5];
}
else if(Saldo_rankeadas >= 101){
    categoria=nivel[6];
}
console.log(`O Herói tem o saldo de ${Saldo_rankeadas} vitórias e está no nível ${categoria}`);


