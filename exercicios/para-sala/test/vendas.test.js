const somaCompras = require("../testes-unitarios/compras.js");
const estoque = require("../testes-unitarios/estoque.js")

// expect - seguinifica eu espero que (algo).seja exatamente(isso) = expect(retornado).tobe(esperado)
test("Deve retornar a soma das compras com taxa de entrega", () => {
    const esperado = 2530;
    const retornado = somaCompras(2500, 30);

    expect(retornado).toBe(esperado)
});

test("Deve retornar a diferença que restou no estoque", () => {
    const esperado = 2530;
    const retornado = estoque(2500, 30);

    expect(retornado).toBe(esperado)
});