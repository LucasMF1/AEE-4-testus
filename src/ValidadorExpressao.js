const REGEX_CARACTERES_VALIDOS = /^[0-9+\-*/()]+$/;
const REGEX_COMECA_COM_OPERADOR = /^[+\-*/]/;
const REGEX_TERMINA_COM_OPERADOR = /[+\-*/]$/;

function ehExpressaoValida(expr) {
  if (expr == null) return false;

  const expressaoSemEspacos = String(expr).replace(/\s+/g, "");
  if (expressaoSemEspacos.length === 0) return false;

  if (!REGEX_CARACTERES_VALIDOS.test(expressaoSemEspacos)) {
    return false;
  }

  if (REGEX_COMECA_COM_OPERADOR.test(expressaoSemEspacos)) {
    return false;
  }

  if (REGEX_TERMINA_COM_OPERADOR.test(expressaoSemEspacos)) {
    return false;
  }

  if (/[+\-*/]{2}/.test(expressaoSemEspacos)) {
    return false;
  }

  let open = 0;
  for (let i = 0; i < expressaoSemEspacos.length; i++) {
    const c = expressaoSemEspacos[i];
    if (c === "(") {
      open++;
    } else if (c === ")") {
      if (open === 0) return false; 
      open--;
    }
  }
  if (open !== 0) return false;

  return true;
}

module.exports = { ehExpressaoValida };
