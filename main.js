// Eserzio 1: Manipolazione di stringhe e numeri 

const analizzaTesto = (x) => {
    let parolaInvertita = "";
    for (let i = x.length - 1; i >= 0; i--) {
        parolaInvertita += x[i];
    }
    return parolaInvertita
}


const risultato = analizzaTesto("Javascript è fantastico");
console.log(risultato);

