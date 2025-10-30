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

describe("Ciclo 3 — proibir operadores duplicados e casos triviais inválidos", () => {
  test("rejeita operadores duplicados sem espaço", () => {
    expect(ehExpressaoValida("1++2")).toBe(false);
  });

  test("rejeita operadores duplicados mesmo com espaços entre eles", () => {
    expect(ehExpressaoValida("3/ * 2")).toBe(false); // deve falhar por '/ *'
  });

  test("rejeita operadores diferentes consecutivos no meio da expressão", () => {
    expect(ehExpressaoValida("4+-5")).toBe(false);
  });

  test("rejeita operadores diferentes consecutivos com espaço antes e depois dos operadores", () => {
    expect(ehExpressaoValida("10 *    / 2")).toBe(false);
  });

  describe("Ciclo 4 — parênteses balanceados (ordem básica)", () => {
    test("aceita expressões com parênteses corretamente balanceados", () => {
      expect(ehExpressaoValida("(1+2)")).toBe(true);
      expect(ehExpressaoValida("((12))")).toBe(true);
      expect(ehExpressaoValida("(1)+(2)")).toBe(true);
    });

    test("rejeita quando falta fechar parênteses", () => {
      expect(ehExpressaoValida("(1+2")).toBe(false);
    });

    test("rejeita quando fecha antes de abrir", () => {
      expect(ehExpressaoValida(")1+2(")).toBe(false);
      expect(ehExpressaoValida(")(")).toBe(false);
    });

    test("rejeita ordem impossível mesmo que quantidades fechem", () => {
      expect(ehExpressaoValida("())(")).toBe(false);
    });
  });

  
});