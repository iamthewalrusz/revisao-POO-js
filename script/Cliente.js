class Cliente{

    constructor(nome, endereço) {
        this.nome = nome;
        this.endereço = endereço;
        this.contas = [];
    }

    adicionarConta(conta){
        this.contas.push(conta);
    }

    getContas(){
        console.log(this.contas);        
    }
}