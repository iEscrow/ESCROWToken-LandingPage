import { useTranslation } from "react-i18next";
import HomeBanner from "../../components/sections/home/banner/HomeBanner";
import MainLayout from "../../layouts/mainLayout/MainLayout";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <MainLayout title="Escrow Home Page" description="Todo => Escrow Home Page">
      <HomeBanner t={t} />
    </MainLayout>
  );
}
