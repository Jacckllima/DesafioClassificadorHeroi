let saldoVitorias = quantidadeVeD(63,18)

function quantidadeVeD(vitorias, derrotas){
    let calculoDePartidasVencidas = vitorias - derrotas;
    return calculoDePartidasVencidas
}
let nivel = ""
if(saldoVitorias <= 10){
    nivel = "Ferro"
} else if(saldoVitorias >= 11 && saldoVitorias <= 20){
    nivel = "Bronze"
} else if(saldoVitorias >= 21 && saldoVitorias <= 50){
    nivel = "Prata"
} else if(saldoVitorias >= 51 && saldoVitorias <= 80){
    nivel = "Ouro"
} else if(saldoVitorias >= 81 && saldoVitorias <= 90){
    nivel = "Diamante"
} else if(saldoVitorias >= 91 && saldoVitorias <= 100){
    nivel = "Lendário"
} else if(saldoVitorias >= 101){
    nivel = "imortal"
}

console.log(`O Herói tem saldo de ${saldoVitorias} vitorias e está no nível de ${nivel}`)





