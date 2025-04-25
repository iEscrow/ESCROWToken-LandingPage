import HomeBanner from "../../components/sections/home/banner/HomeBanner";
import MainLayout from "../../layouts/mainLayout/MainLayout";

export default function HomePage() {
  return (
    <MainLayout title="Escrow Home Page" description="Todo => Escrow Home Page">
      <HomeBanner />
    </MainLayout>
  );
}
