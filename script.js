/* ==========================================
   WHATSAPP
========================================== */

const meuWhatsApp = "11945292874";

function confirmarPresenca() {
  const mensagem =
    "Oi, quero confirmar minha presença no seu aniversário de 23 anos!";

  const link = `https://wa.me/${meuWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
}
