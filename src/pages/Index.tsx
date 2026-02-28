import logo from "@/assets/logo_garimpei.png";
import logoModa from "@/assets/moda_garimpei.png";
import logoEletronicos from "@/assets/eletronicos_garimpei.png";
import logoAcademia from "@/assets/academia_garimpei.png";
import banner from "@/assets/banner_garimpei.png";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";


const GROUPS = {
  academia: {
    title: "Garimpei! – Academia e Performance",
    url: "https://chat.whatsapp.com/Lvr7N3daXAIHfoPbWhfjJ1",
  },
  eletronicos: {
    title: "Garimpei! – Eletrônicos",
    url: "https://chat.whatsapp.com/KP5RTRGkuak5HrwtXqVbU5",
  },
  moda: {
    title: "Garimpei! – Moda e Acessórios",
    url: "https://chat.whatsapp.com/C9XuGt5U7G78Png9qEnrM4",
  },
};

const trackClick = (label: string) => {
  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  // @ts-ignore
  window.dataLayer.push({
    event: "click_linktree",
    botao_clicado: label,
    origem: "linktree"
  });
};

export default function Dashboard() {
  return (
    <>
      <div className="relative min-h-[100svh] flex justify-center md:items-center" style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-0" />

        <div className=" z-10 w-full md:max-w-[430px] md:my-10 md:rounded-[36px] bg-background md:shadow-2xl overflow-hidden border md:border-border">

          <main className=" text-foreground flex justify-center px-4">

            <div className="w-full max-w-md py-12">

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
              >
                <img
                  src={logo}
                  alt="Garimpei"
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover glow-text"
                />

                <h1 className="text-2xl font-bold">Garimpei!</h1>

                <p className="text-sm mt-2 text-muted-foreground">
                  Garimpamos as maiores lojas do{" "}
                  Brasil para entregar{" "}
                  oportunidades reais direto no WhatsApp!
                </p>

                <div className="flex justify-center gap-4 mt-4 text-primary">
                  <a
                    href="https://instagram.com/garimpei.ai"
                    onClick={() => trackClick("instagram")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:scale-110 transition"
                  >
                    <i className="text-[20px] fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=5543996098333"
                    onClick={() => trackClick("whatsapp")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:scale-110 transition"
                  >
                    <i className="text-[20px] fa-brands fa-whatsapp"></i>
                  </a>
                  <a
                    href="https://tiktok.com/@garimpei.ai"
                    onClick={() => trackClick("tiktok")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:scale-110 transition"
                  >
                    <i className="text-[18px] fa-brands fa-tiktok"></i>
                  </a>
                </div>
              </motion.div>

              <div className="space-y-4">

                <motion.a
                  href={GROUPS.academia.url}
                  onClick={() => trackClick("academia")}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative flex items-center w-full rounded-full py-3 px-4 border border-border text-foreground transition-all duration-200 hover:bg-primary hover:text-black"
                >
                  <img src={logoAcademia} className="w-10 h-10 rounded-full object-cover z-10" />
                  <span className="absolute inset-0 flex items-center justify-center text-[14px] font-medium pointer-events-none">
                    <span className="">
                      Garimpei! – Academia <span className="hidden md:inline">e Performance</span>
                    </span>

                  </span>
                </motion.a>

                <motion.a
                  href={GROUPS.eletronicos.url}
                  onClick={() => trackClick("eletronicos")}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative flex items-center w-full rounded-full py-3 px-4 border border-border text-foreground transition-all duration-200 hover:bg-primary hover:text-black"
                >
                  <img src={logoEletronicos} className="w-10 h-10 rounded-full object-cover z-10" />
                  <span className="absolute inset-0 flex items-center justify-center text-[14px] font-medium pointer-events-none">
                    Garimpei! – Eletrônicos
                  </span>
                </motion.a>

                {/* MODA */}
                <motion.a
                  href={GROUPS.moda.url}
                  onClick={() => trackClick("moda")}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative flex items-center w-full rounded-full py-3 px-4 border border-border text-foreground transition-all duration-200 hover:bg-primary hover:text-black"
                >
                  <img src={logoModa} className="w-10 h-10 rounded-full object-cover z-10" />
                  <span className="absolute inset-0 flex items-center justify-center text-[14px] font-medium pointer-events-none">
                    Garimpei! – Moda e Acessórios
                  </span>
                </motion.a>

              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 rounded-3xl overflow-hidden border border-border"
              >
                <img
                  src={banner}
                  alt="Garimpei banner"
                  className="w-full h-72 object-cover"
                />
              </motion.div>

              <footer className="mt-10 text-center text-xs text-muted-foreground mb-0">

                <div className="flex justify-center gap-4 mb-2">
                  <a
                    href="https://instagram.com/garimpei.ai"
                    onClick={() => trackClick("instagram_footer")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                  >
                    Instagram
                  </a>

                  <span>•</span>

                  <a
                    href="https://tiktok.com/@garimpei.ai"
                    onClick={() => trackClick("tiktok_footer")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                  >
                    TikTok
                  </a>

                  <span>•</span>

                  <a
                    href="https://api.whatsapp.com/send?phone=5543996098333"
                    onClick={() => trackClick("whatsapp_footer")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                  >
                    Contato
                  </a>
                </div>
                <div className="opacity-70">
                  © {new Date().getFullYear()} Garimpei. Todos os direitos reservados.
                </div>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}