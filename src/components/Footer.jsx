import Logo from "../assets/images/logo.svg";
import LangFooterSelector from "../features/i18n/components/LangFooterSelector";
import FooterDropdown from "./ui/FooterDropdown";
import SocialButton from "./ui/SocialButton";

export default function Footer({ t }) {
  const company = {
    title: t("Footer.about.title"),
    items: [
      {
        href: "/#",
        target: "_self",
        label: t("Footer.about.about"),
      },
      {
        href: "/#",
        target: "_self",
        label: t("Footer.about.terms"),
      },
      {
        href: "/#",
        target: "_self",
        label: t("Footer.about.privacy"),
      },
    ],
  };

  const services = {
    title: t("Footer.services.title"),
    items: [
      {
        href: "/#",
        target: "_self",
        label: t("Footer.services.download"),
      },
      {
        href: "/#",
        target: "_self",
        label: t("Footer.services.marketplace"),
      },
      {
        href: "/#",
        target: "_self",
        label: t("Footer.services.escrow"),
      },
      {
        href: "/#",
        target: "_self",
        label: t("Footer.services.program"),
      },
      {
        href: "/#",
        target: "_self",
        label: t("Footer.services.application"),
      },
    ],
  };

  const support = {
    title: t("Footer.support.title"),
    items: [
      {
        href: "/#",
        target: "_self",
        label: t("Footer.support.center"),
      },
      {
        href: "/#",
        target: "_self",
        label: t("Footer.support.security"),
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
                {t("Footer.community")}
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
            &copy; 2025 {t("Footer.copyright")}
          </p>

          <ul className="w-full flex flex-col items-center gap-2 text-text-secondary sm:flex-row sm:justify-center lg:justify-end lg:gap-8">
            <li>
              <LangFooterSelector />
            </li>
            <li>
              <a href="#">{t("Footer.protocol")}</a>
            </li>
            <li>
              <a href="#">{t("Footer.privacy")}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
