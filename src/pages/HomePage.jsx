import { useTranslation } from "react-i18next";
import HomeBanner from "../sections/HomeBanner";
import Presale from "../sections/Presale";
import PriceAppreciation from "../sections/PriceAppreciation";
import SecurityAudits from "../sections/SecurityAudits";
import Header from "../components/Header";
import Exchange from "../sections/Exchange";
import Community from "../sections/Community";
import Footer from "../components/Footer";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <title>Escrow Landing Page</title>
      <meta name="description" content="escrow landing page" />
      <Header />
      <main>
        <Header />
        <HomeBanner t={t} />
        <Presale t={t} />
        <PriceAppreciation t={t} />
        <SecurityAudits t={t} />
        <Exchange t={t} />
        <Community t={t} />
      </main>
      <Footer />
    </>
  );
}
