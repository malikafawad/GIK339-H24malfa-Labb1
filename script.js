
// Uppgift 2:

// console.log(ärStudent);  // Det ger error, variabeln finns inte än
// console.log(ålder);      // Det ger error
// console.log(namn);       // Det ger error

{
    var ärStudent = true;
    let ålder = 23;
    const namn = "Malika";

    console.log(ärStudent); // fungerar
    console.log(ålder);     // fungerar
    console.log(namn);      // fungerar
}

console.log(ärStudent); // fungerar, var är inte block-scoped
// console.log(ålder);   // error, let är block-scoped
// console.log(namn);    // error, const är block-scoped

/* 
Uppgift 2 - Reflektion:

1. var, let och const fungerar olika i block. var går att nå utanför blocket,
   medan let och const bara gäller inuti blocket.

2. Om console.log() ligger före blocket blir det fel eftersom variablerna 
   inte är deklarerade än. Inuti blocket fungerar alla tre. Efter blocket 
   fungerar endast var.
*/


// Uppgift 3:

console.log("'3' == 3:", '3' == 3);   // true, typkonvertering
console.log("'3' === 3:", '3' === 3); // false, olika typer

console.log("NaN === NaN:", NaN === NaN); // false
console.log("null == undefined:", null == undefined);   // true
console.log("null === undefined:", null === undefined); // false

// Ternary-test
let check = undefined ? "truthy" : "falsy";
console.log("undefined är:", check); // falsy

/* 
Uppgift 3 - Reflektion:
1. När jag testade de olika jämförelserna fick jag följande resultat:
 '3' == 3 gav true eftersom == gör typkonvertering. 
 '3' === 3 gav false eftersom === kräver samma typ och värde.

2. I en ternary eller if-sats kontrolleras om uttrycket är truthy eller falsy.
Undefined är falsy och därför väljs else-delen (den efter :)

3. NaN betyder "Not a Number" och är aldrig lika med sig själv.
   undefined betyder att variabeln inte fått något värde.
   null används när man vill ge ett tomt värde.
*/



// Uppgift 4:

// En enkel funktion som tar emot ett namn och returnerar en hälsning
function greet(name) {
    return "Hej " + name;
}

// Anropa funktionen
console.log(greet("Malika"));

// En variabel utanför funktionen som också heter name
let name = "Isatou";

// Skriver ut variabeln utanför funktionen
console.log("Utanför funktionen:", name);

// Använder den yttre variabeln som argument i funktionen
console.log(greet(name));


/*
Uppgift 4 - Reflektion:

1. Det finns olika sätt att skriva funktioner. Jag använder en funktionsdeklaration
   eftersom den är enkel och går att anropa innan den står i koden.

2. Funktionsdeklarationer fungerar i hela filen, medan funktionsuttryck och 
   arrowfunktioner bara fungerar efter att de har skapats.

3. Parametern name i funktionen och variabeln name utanför funktionen är två olika saker.
   Parametern gäller bara inne i funktionen och påverkar inte den yttre variabeln.

4. En parameter är namnet i funktionen. Ett argument är värdet man skickar in.
   En variabel är ett värde man lagrar och kan använda utanför funktionen.
*/
