// Eserzio 1: Manipolazione di stringhe e numeri 

const analizzaTesto = (x) => {
    let testoInMinuscolo = x.toLowerCase();

    let parolaInvertita = "";
    for (let i = x.length - 1; i >= 0; i--) {
        parolaInvertita += x[i];
    }

    return {
        testoInMinuscolo,
        parolaInvertita
    };
}

const risultato = analizzaTesto("Javascript è Fantastico");
console.log(risultato.testoInMinuscolo);
console.log(risultato.parolaInvertita);
