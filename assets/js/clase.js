class CuentaBancaria {
    #saldo;
    titular;

    constructor(titular, saldoInicial) {
        this.titular = titular;
        if (saldoInicial >= 0){
            this.#saldo = saldoInicial;
        } else {
            this.#saldo = 0;
        }
    }

get setSaldo(){
    return this.#saldo;
}

set saldo(nuevoSaldo){
    if (nuevoSaldo >= 0){
        this.#saldo = nuevoSaldo;
    } else {
        this.#saldo = 0;
    }
}




depositar(monto){
    if (monto > 0){
        this.#saldo += monto;
    console.log(`deposito realizado: ${monto}.     Su saldo es :${this.#saldo}` );
    }
    else{
        console.log("No se puede depositar un monto negativo");
    }
}
}

