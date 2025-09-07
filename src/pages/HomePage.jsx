import { useTranslation } from "react-i18next";
import HomeBanner from "../components/HomeBanner";
import Presale from "../components/Presale";
import PriceAppreciation from "../components/PriceAppreciation";
import SecurityAudits from "../components/SecurityAudits";
import Navbar from "../components/Navbar";
import Exchange from "../components/Exchange";
import Community from "../components/Community";
import Footer from "../components/Footer";
import Bento from "../components/Bento";
import WhitepaperViewer from "../components/WhitepaperViewer";
import { useState } from "react";

export default function HomePage() {
  const { t } = useTranslation();
  const [openWhitepaper, setOpenWhitepaper] = useState(false);
  const pdfUrl =
    "/witepapper.pdf";

  const handleOpenWhitepaper = () => {
    setOpenWhitepaper(true);
  };

  const handleCloseWhitepaper = () => {
    setOpenWhitepaper(false);
  };
  return (
    <>
      <title>{t("Metadata.title")}</title>
      <meta name="description" content={t("Metadata.description")} />
      
      <Navbar t={t} handleOpenWhitepaper={handleOpenWhitepaper} />
      <main>
        <WhitepaperViewer
          open={openWhitepaper}
          onClose={handleCloseWhitepaper}
          pdfUrl={pdfUrl}
        />
        <HomeBanner t={t} handleOpenWhitepaper={handleOpenWhitepaper} />
        <Presale t={t} />
        <PriceAppreciation t={t} />
        <SecurityAudits t={t} />
        <Exchange t={t} />
        <Bento t={t} />
        <Community t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
