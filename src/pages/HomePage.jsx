import { useTranslation } from "react-i18next";
import HomeBanner from "../sections/HomeBanner";
import Presale from "../sections/Presale";
import PriceAppreciation from "../sections/PriceAppreciation";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <title>Escrow Landing Page</title>
      <meta name="description" content="escrow landing page" />

      <main>
        <HomeBanner t={t} />
        <Presale t={t} />
        <PriceAppreciation t={t} />
      </main>
    </>
  );
}
