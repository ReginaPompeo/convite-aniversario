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

/* ==========================================
   BAIXAR CONVITE
========================================== */

async function baixarConvite() {
  const botao = document.querySelector(".baixar");

  botao.innerHTML = "BAIXANDO...";

  try {
    const resposta = await fetch("assets/convite.png");

    if (!resposta.ok) {
      throw new Error("Imagem do convite não encontrada.");
    }

    const blob = await resposta.blob();

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "regina-convite.png";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    botao.innerHTML = "✓ &nbsp; CONVITE BAIXADO";

    setTimeout(() => {
      botao.innerHTML = "↓ &nbsp; BAIXAR CONVITE";
    }, 2000);
  } catch (erro) {
    console.error("Erro ao baixar convite:", erro);

    botao.innerHTML = "ERRO AO BAIXAR";

    setTimeout(() => {
      botao.innerHTML = "↓ &nbsp; BAIXAR CONVITE";
    }, 2000);
  }
}
