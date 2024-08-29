class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        
    }
    atacar(){
        let ataque;
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque padrão";
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
    
}

let heroiMago = new heroi("Jack", 27, "mago")

heroiMago.atacar()