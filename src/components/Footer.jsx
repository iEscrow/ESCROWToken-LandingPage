import FooterLogo from "../assets/images/footer.svg";
import LangFooterSelector from "../features/i18n/components/LangFooterSelector";

export default function Footer({ t }) {
  return (
    <footer className="w-full px-4 pt-4 border-t-[1px] border-card-border ">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <img
          src={FooterLogo}
          alt="Escrow"
          draggable="false"
          loading="lazy"
          className="w-full mx-auto py-10 lg:max-w-[974px]"
        />

        <div className="w-full text-center flex flex-col-reverse items-center border-t-[1px] border-card-border py-4 lg:flex-row lg:w-full lg:justify-between">
          <p className="text-primary text-sm mt-6 lg:mt-0 lg:w-full lg:text-start">
            &copy; 2025 {t("Footer.copyright")}
          </p>

          <ul className="w-full flex flex-col items-center gap-2 text-text-secondary sm:flex-row sm:justify-center lg:justify-end lg:gap-8">
            <li>
              <LangFooterSelector />
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                {t("Footer.protocol")}
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary">
                {t("Footer.privacy")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
