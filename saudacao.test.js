const Higor = require("./Pessoa");


test("Testando higor", () => {
    expect(Higor).toEqual({name: "Higor", age: 19, occupation: "Desenvolvedor"})
}) 