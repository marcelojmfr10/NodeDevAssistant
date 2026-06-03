import config from "./config.js";
import { askClaude } from "./llm/anthropic-client.js";

const CODIGO_CON_PROBLEMAS = `
async function getUser(id) {
  const query = "SELECT * FROM users WHERE id = " + id;
  const result = await db.query(query);
  return result[0];
}
function calcularDescuento(precio, tipo) {
  if (tipo == "vip") {
    return precio * 0.8;
  } else if (tipo == "regular") {
    return precio * 0.9;
  } else {
    return precio;
  }
}
`;

async function main(): Promise<void> {
  console.log("╔════════════════════════════════════════╗");
  console.log("║        DevAssistant - Curso IA         ║");
  console.log("║        Primera llamada                 ║");
  console.log("╚════════════════════════════════════════╝");
  console.log("");
  console.log(" Enviando pregunta a Claude...");
  console.log("");
  const question =
    "¿Qué es typescript y diferencia con javascript? responde máximo 3 puntos concisos";
  console.log(`Pregunta: ${question}`);
  const answer = await askClaude(question);
  console.log(`-`.repeat(50));
  console.log(answer);
  console.log(`-`.repeat(50));
}

main().catch((error) => console.error({ error }));
