function ehExpressaoValida(expr) {
  if (expr == null) return false;
  const s = String(expr).replace(/\s+/g, "");
  if (s.length === 0) return false;

  return /^[0-9]+$/.test(s);
}
module.exports = { ehExpressaoValida };