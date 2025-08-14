import { useTranslation } from "react-i18next";
import HomeBanner from "../sections/HomeBanner";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <title>Escrow Landing Page</title>
      <meta name="description" content="escrow landing page" />

      <main>
        <HomeBanner t={t} />
      </main>
    </>
  );
}
