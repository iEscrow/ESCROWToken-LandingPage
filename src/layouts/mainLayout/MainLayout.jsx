import Navbar from "../navbar/Navbar";

export default function MainLayout({
  children,
  title = "Escrow",
  description = "Escrow",
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <Navbar />
      {children}
    </>
  );
}
