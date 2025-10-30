const { ehExpressaoValida } = require('../src/ValidadorExpressao');

describe("Ciclo 1 — apenas números inteiros positivos e espaços", () => {
  test("aceita número simples", () => {
    expect(ehExpressaoValida("1")).toBe(true);
    expect(ehExpressaoValida("0007")).toBe(true);
  });

  test("ignora espaços ao redor e no meio", () => {
    expect(ehExpressaoValida("   42   ")).toBe(true);
    expect(ehExpressaoValida("1 2 3")).toBe(true);
  });

  test("rejeita null, vazio e só espaços", () => {
    expect(ehExpressaoValida(null)).toBe(false);
    expect(ehExpressaoValida("")).toBe(false);
    expect(ehExpressaoValida("   ")).toBe(false);
  });

  test("rejeita qualquer caractere não numérico", () => {
    expect(ehExpressaoValida("+")).toBe(false);
    expect(ehExpressaoValida("a")).toBe(false);
    expect(ehExpressaoValida("1a2")).toBe(false);
    expect(ehExpressaoValida("(")).toBe(false);
  });
});

describe("Ciclo 2 — expressões simples com operadores", () => {
  test("aceita expressão simples com um operador", () => {
    expect(ehExpressaoValida("1+2")).toBe(true);
    expect(ehExpressaoValida("5-3")).toBe(true);
    expect(ehExpressaoValida("2*4")).toBe(true);
    expect(ehExpressaoValida("8/2")).toBe(true);
  });

  test("aceita expressão com espaços ao redor do operador", () => {
    expect(ehExpressaoValida("1 + 2")).toBe(true);
    expect(ehExpressaoValida("10 - 5")).toBe(true);
  });

  test("rejeita expressão que começa com operador", () => {
    expect(ehExpressaoValida("+1")).toBe(false);
    expect(ehExpressaoValida("-5")).toBe(false);
  });

  test("rejeita expressão que termina com operador", () => {
    expect(ehExpressaoValida("1+")).toBe(false);
    expect(ehExpressaoValida("5*")).toBe(false);
  });
});
