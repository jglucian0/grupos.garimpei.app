import logoModa from "@/assets/moda_garimpei.png";
import logoEletronicos from "@/assets/eletronicos_garimpei.png";
import logoAcademia from "@/assets/academia_garimpei.png";
import banner from "@/assets/banner_garimpei.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const GROUP_CODE = "DY0ZZvUQao600pRH8SeiFF";
const WEB_URL = `https://chat.whatsapp.com/${GROUP_CODE}`;
const APP_URL = `whatsapp://chat?code=${GROUP_CODE}`;

const trackClick = () => {
  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  // @ts-ignore
  window.dataLayer.push({
    event: "click_whatsapp_nicho",
    nicho: "academia",
    origem: "landing_page"
  });
};

export default function PremiumLanding() {
  const frases = [
    "Vagas limitadas no grupo. |Entre antes que lote!",
    "Pare de jogar seu dinheiro fora. |Junte-se a nós!",
    "As ofertas esgotam em minutos.|Não fique de fora!",
    "Grupo silencioso. Apenas ofertas |reais e verificadas.",
    "Milhares de pessoas economizando |todos os dias."
  ];

  const [fraseAtual, setFraseAtual] = useState(frases[0]);
  const [countdown, setCountdown] = useState(5);
  const [startCountdown, setStartCountdown] = useState(false);

  const redirectToWhatsApp = () => {
    trackClick();

    window.location.href = APP_URL;

    setTimeout(() => {
      window.location.href = WEB_URL;
    }, 800);
  };

  useEffect(() => {
    const fraseSorteada = frases[Math.floor(Math.random() * frases.length)];
    setFraseAtual(fraseSorteada);

    trackClick();

    let appOpened = false;

    setTimeout(() => {
      window.location.href = APP_URL;
    }, 30);

    const handleBlur = () => {
      appOpened = true;
    };

    const handleFocus = () => {
      if (appOpened) {
        setStartCountdown(true);
      }
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  useEffect(() => {
    if (!startCountdown) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.href = WEB_URL;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [startCountdown]);

  return (
    <div
      className="relative h-[100dvh] flex items-center justify-center px-6"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay Premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90 backdrop-blur-xl" />

      <div className="relative z-10 max-w-2xl text-center">

        {/* Logo */}
        <motion.img
          src={logoAcademia}
          alt="Garimpei"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-28 h-28 mx-auto mb-10 rounded-full shadow-[0_0_40px_rgba(255,215,0,0.3)]"
        />

        {/* Headline forte */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-2"
        >
          <div className="leading-tight">
            <span className="bg-gradient-to-r from-[#ffaa33] to-[#ff8d00] bg-clip-text text-transparent">
              Garimpei!
            </span> <br /><span className="text-[clamp(29px,5vw,48px)]">Academia e Performance</span>
          </div>
        </motion.h1>
        {startCountdown && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-xl font-extrabold text-white leading-tight "
          >
            <div className="leading-tight">
              <span className="bg-gradient-to-r from-[#ffaa33] to-[#ff8d00] bg-clip-text text-transparent">
                Redirecionando em <span className="text-white">{countdown}s</span>
              </span>

            </div>
          </motion.h2>
        )}

        {/* Subheadline sofisticada */}
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg text-gray-300 leading-relaxed"
        >
          <p className="text-sm mt-4 text-gray-300 leading-relaxed">
            Nós garimpamos as melhores ofertas do Brasil e enviamos direto no seu WhatsApp.
            <br />
            Sem spam! Só oportunidades reais.
          </p>
        </motion.p> */}

        {/* Card Glass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-5 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          <p className="text-sm text-gray-400 mb-6">
            Acesso 100% gratuito
          </p>

          <motion.button
            onClick={redirectToWhatsApp}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="block w-full rounded-2xl py-5 text-lg font-semibold
            bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-700
            text-black shadow-xl hover:shadow-green-500/10
            transition-all duration-50"
          >
            <span className="ml-3 mr-3 whitespace-nowrap" >⛏️ ENTRAR NO GRUPO AGORA</span>
          </motion.button>

          <p className="text-sm text-gray-500 mt-4">
            {fraseAtual.split('|').map((linha, index, array) => (
              <span key={index}>
                {linha}
                {index < array.length - 1 && (
                  <>
                    {/* Quebra a linha no celular (block) e esconde a quebra a partir de telas médias (md:hidden) */}
                    <br className="block md:hidden" />

                    {/* Adiciona apenas um espaço em branco no desktop (inline) e esconde no celular (hidden) */}
                    <span className="hidden md:inline"> </span>
                  </>
                )}
              </span>
            ))}
          </p>
        </motion.div>

      </div>
    </div>
  );
}