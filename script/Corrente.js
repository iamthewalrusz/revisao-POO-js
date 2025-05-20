class Corrente extends Conta{
    calculoTaxa(){
        return this.saldo * 0.07;
    }
}