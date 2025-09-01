import Logo from "../assets/images/logo.svg";
import FooterDropdown from "./ui/FooterDropdown";
import SocialButton from "./ui/SocialButton";

export default function Footer() {
  const company = {
    title: "Sobre Nosotros",
    items: [
      {
        href: "/#",
        target: "_self",
        label: "Acerca",
      },
      {
        href: "/#",
        target: "_self",
        label: "Términos",
      },
      {
        href: "/#",
        target: "_self",
        label: "Privacidad",
      },
    ],
  };
  const services = {
    title: "Servicios",
    items: [
      {
        href: "/#",
        target: "_self",
        label: "Descargar",
      },
      {
        href: "/#",
        target: "_self",
        label: "Marketplace",
      },
      {
        href: "/#",
        target: "_self",
        label: "Escrow",
      },
      {
        href: "/#",
        target: "_self",
        label: "Programa de referidos",
      },
      {
        href: "/#",
        target: "_self",
        label: "Solicitud de listado",
      },
    ],
  };
  const support = {
    title: "Soporte",
    items: [
      {
        href: "/#",
        target: "_self",
        label: "Centro de ayuda",
      },
      {
        href: "/#",
        target: "_self",
        label: "Seguridad",
      },
    ],
  };

  return (
    <footer className="w-full px-4 pt-4 border-t-[1px] border-card-border ">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-4 items-start w-full lg:py-8">
          <a href="#" className="hidden lg:flex">
            <img
              src={Logo}
              alt="iEscrow Logo"
              draggable="false"
              loading="eager"
              className="w-40"
            />
          </a>

          <div className="flex flex-col w-full gap-4 md:flex-row md:gap-8 md:justify-between lg:justify-end lg:gap-10 xl:gap-28 2xl:gap-40">
            <FooterDropdown title={company.title} list={company.items} />
            <FooterDropdown title={services.title} list={services.items} />
            <FooterDropdown title={support.title} list={support.items} />

            <div className="w-full lg:w-auto">
              <span className="text-primary uppercase font-semibold">
                Community
              </span>
              <div className="flex items-start justify-start gap-7 flex-wrap max-w-[160px] mt-4">
                <SocialButton
                  href="https://www.facebook.com/profile.php?id=61580173739629"
                  title="Facebook"
                  icon="facebook"
                  variant="secondary"
                />
                <SocialButton
                  href="https://www.instagram.com/iescrowcrypto"
                  title="instagram"
                  icon="instagram_secondary"
                  variant="secondary"
                />
                <SocialButton
                  href="https://x.com/iEscrowcrypto"
                  title="Twitter"
                  icon="twitter_secondary"
                  variant="secondary"
                />
                <SocialButton
                  href="https://www.tiktok.com/@iescrowcrypto"
                  title="Tiktok"
                  icon="tiktok"
                  variant="secondary"
                />
                <SocialButton
                  href="https://www.youtube.com/@iEscrowcrypto"
                  title="Youtube"
                  icon="youtube_secondary"
                  variant="secondary"
                />
                <SocialButton
                  href="https://t.me/+HByTVekbjfJiMzdh"
                  title="Telegram"
                  icon="telegram_secondary"
                  variant="secondary"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center flex flex-col-reverse items-center border-t-[1px] border-card-border py-4 lg:flex-row lg:w-full lg:justify-between">
          <p className="text-primary mt-6 lg:mt-0 lg:w-full lg:text-start">
            &copy; 2025 iEscrow.crypto Derechos Reservados
          </p>

          <ul className="w-full flex flex-col items-center gap-2 text-text-secondary sm:flex-row sm:justify-center lg:justify-end lg:gap-8">
            <li>Español</li>
            <li>
              <a href="#">Protocol disclaimer</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
