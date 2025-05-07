// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const risultatoLancio = Math.floor(Math.random() * 6) + 1;
      const lancioRiuscito = Math.random();
      //   console.log(lancioRiuscito, risultatoLancio);
      if (lancioRiuscito > 0.2) {
        resolve(`Il dado si è fermato sul numero ${risultatoLancio}`);
      } else {
        reject(
          "Il dado non ha rotolato a sufficienza, il tiro non può essere considerato valido"
        );
      }
    }, 3000);
  });
}

// lanciaDado()
//   .then((success) => console.log(success))
//   .catch((error) => console.log(error))
//   .finally(console.log("Lancio in corso..."));

// 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".

function creaLanciaDado() {
  let ultimoRisultato = null;
  return function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const risultatoLancio = Math.floor(Math.random() * 6) + 1;
        const lancioRiuscito = Math.random();
        //   console.log(lancioRiuscito, risultatoLancio);
        if (lancioRiuscito > 0.2) {
          if (risultatoLancio == ultimoRisultato) {
            console.log("Incredibile!");
          }
          ultimoRisultato = risultatoLancio;
          resolve(`Il dado si è fermato sul numero ${risultatoLancio}`);
        } else {
          reject(
            "Il dado non ha rotolato a sufficienza, il tiro non può essere considerato valido"
          );
        }
      }, 3000);
    });
  };
}

const dadoMagico = creaLanciaDado();

dadoMagico()
  .then((success) => console.log(success))
  .catch((error) => console.log(error))
  .finally(console.log("Lancio in corso..."));

dadoMagico()
  .then((success) => console.log(success))
  .catch((error) => console.log(error))
  .finally(console.log("Lancio in corso..."));
