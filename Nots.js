
/*Variables(Variaveis)*/

String - Palavras
Number - Numeros . parseInt(x):Converte algo em numero
Boolean - Falso, Verdadeiro
Array - Matriz
Object - Qualquer coisa/ Tudo 
Ex: (typeof Mostra q tipo a parada é)
typeof 42;
typeof "abc";
typeof true;
typeof undefined;
typeof null;
typeof { a: 1 };
typeof [1, 2, 3];
typeof function hello() {};
Declarar:
var - Variaveis
let - Usa dentro do bloco, não usa fora do loop, condição ou outra coisa
const - Mesmo q o var, mas não pode ser declarada novamente
Não precisa declarar no JS, Mas pode usar o modo 'use strict' 
use strict:
Coloca isso no começo do codigo e obriga a declarar todas as Variaveis

/*Operators(Operadores)*/

==	equal to
===	equal value and type
!=	not equal
!==	not equal value or
>	greater than;
<	less_than;
>=	greater or equal to	
<=	less or equal to
&&	AND
||	OR
!	NOT
Ex:
3 === 3.0; // true
"yes" === "yes"; // true
null === null; // true
false === false; // true
42 === "42"; // false
"hello" === "Hello"; // false
true === 1; // false
0 === null; // false
"" === null; // false
null === undefined; // false
//note the difference in a double equal comparison
42 == "42"; // true...the string "42" gets coerced into the number 42
"hello" == "Hello"; // false...are you surprised at this one?
1 == true; // true...the boolean value true gets coerced into the number 1
null == undefined; //  true
10 < 11; // true
42 > "42"; // false
43 > "42"; // true!  what is going on?
"a" < "b"; // true

/*Arrays(Matriz/listas)*/

Declarar: let names = ["Bob", "Sue", "Jorge", "Svetlana"];
Acessar um especifico: let aName = names[0];
Modificar: names[2] = "George";
Adiciona no final: names.push("Grace");
Remove o ultimo: names.pop();

/*String(Palavras)*/

Declara: let myString = "This is my String!";
Conta: myString.length; // 18
Acessar um especifico: myString[2]; // "i"
"" e '' São a mesma coisa, escolha um pá usa
Mas tem o ``, que serve pra usar codigo junto com string 
EX:
const complexString = hello + " " + world;
ou
const complexString = `${hello} ${world}`;
tbm
const myArray = ["one", "two", "three"];
const htmlString = `
<ol>
  <li>${myarray[0]}</li>
  <li>${myarray[1]}</li>
  <li>${myarray[2]}</li>
</ol>`;

/*If*/

if(boolean expression){
	//code if true
};
else if(boolean expression){
	//code if true
};
else{
	//code if no other match
};

/*Switch*/

!!O Switch vai continuas executando ate encontrar um break!!
É tipo um "If", mas tem q tomar cuidado pa não ter erro de logica
Ex:
let grade = "A";
let gpaPoints = 0;
switch (grade) {
  case "A":
    gpaPoints = 4;
    break;
  case "B":
    gpaPoints = 3;
    break;
  default:
    gpaPoints = -1;
}





