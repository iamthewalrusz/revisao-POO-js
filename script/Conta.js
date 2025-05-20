class Conta{

    constructor(numero, agencia, saldo){
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
    }

    setNumero(numero){
        this.numero = numero;
    }

    setAgencia(agencia){
        this.agencia = agencia;
    }

    setSaldo(saldo){
        this.saldo = saldo;
    }

    getNumero(){
        return this.numero;
    }

    getAgencia(){
        return this.agencia;
    }

    getSaldo(){
        return this.saldo;
    }

    calculoTaxa(){
        
    }
}