class Pessoa  {
    constructor(name, age, occupation) {
        this.name = name,
        this.age = age,
        this.occupation = occupation
    }


    get saudacao() {
        return `Olá! muito prazer, meu nome é ${this.name}, possuo ${this.age} anos, e atuo como ${this.occupation}`
    }
}


const Higor = new Pessoa("Higor", 19, "Desenvolvedor");

module.exports = Higor;