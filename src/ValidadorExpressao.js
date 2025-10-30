// Expressões regulares para validação
const REGEX_CARACTERES_VALIDOS = /^[0-9+\-*/]+$/;
const REGEX_COMECA_COM_OPERADOR = /^[+\-*/]/;
const REGEX_TERMINA_COM_OPERADOR = /[+\-*/]$/;

function ehExpressaoValida(expr) {
  if (expr == null) return false;

  const expressaoSemEspacos = String(expr).replace(/\s+/g, "");
  if (expressaoSemEspacos.length === 0) return false;

  // Verifica se contém apenas números e operadores válidos
  if (!REGEX_CARACTERES_VALIDOS.test(expressaoSemEspacos)) {
    return false;
  }

  // Não pode começar com operador
  if (REGEX_COMECA_COM_OPERADOR.test(expressaoSemEspacos)) {
    return false;
  }

  // Não pode terminar com operador
  if (REGEX_TERMINA_COM_OPERADOR.test(expressaoSemEspacos)) {
    return false;
  }

  return true;
}

module.exports = { ehExpressaoValida };