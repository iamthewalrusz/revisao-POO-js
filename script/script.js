var a = 0;
var lista = [];

while (a==0){
    let opcao = window.prompt('Quer adicionar um cliente? (1- Sim  2- Não)');
    if(opcao == 1){
        var cliente = new Cliente(window.prompt("Digite o nome: "), window.prompt("Digite o endereço: "));

        let opcao_conta = window.prompt('Quer adicionar uma conta para esse cliente? (1- Sim  2- Não)');
        if(opcao_conta == 1){
            let opcao_contas = window.prompt("Que tipo de conta? (1- Corrente  2- Poupança)");
            if(opcao_contas == 1){
                var conta = new Corrente(window.prompt("Digite o número da conta"), window.prompt("Digite a agência"), window.prompt("Digite o saldo"));
            }

            else{
                var conta = new Poupança(window.prompt("Digite o número da conta"), window.prompt("Digite a agência"), window.prompt("Digite o saldo"));
            }

            console.log("Taxa: " + conta.calculoTaxa());
            cliente.adicionarConta(conta);
        }

        lista.push(cliente);
        console.log(lista);
    }

    else{
        var a = 1;
    }
}