const arr = [ 2,3,4,2,4,3,32,3,3,5,3,3,3,2,212,2,3];

//Hacer otro array que tenga solo los impares y sin repetirse.

const imparesrepetidos = arr.filter(number => number%2!==0); //impares repetidos con filter

const resultado = imparesrepetidos.reduce((acc:number[],elem:number)=>{ //impares sin repetir con reduce
      if(!acc.includes(elem)){
      	acc.push(elem);
      }
      return acc;
    },[]);

console.log("Los numeros impares sin repetirse del array son: " + resultado);
