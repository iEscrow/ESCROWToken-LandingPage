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

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <title>Escrow Landing Page</title>
      <meta name="description" content="escrow landing page" />
      <Navbar t={t} />
      <main>
        <HomeBanner t={t} />
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
