import { useTranslation } from "react-i18next";
import HomeBanner from "../../components/sections/home/banner/HomeBanner";
import MainLayout from "../../layouts/mainLayout/MainLayout";
import SecurityAudits from "../../components/sections/home/securityAudits/SecurityAudits";
import Presale from "../../components/sections/home/presale/Presale";
import Community from "../../components/sections/home/community/Comunity";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <MainLayout title="Escrow Home Page" description="Todo => Escrow Home Page">
      <HomeBanner t={t} />
      <Presale t={t} />
      <SecurityAudits t={t} />
      <Community t={t} />
    </MainLayout>
  );
}
