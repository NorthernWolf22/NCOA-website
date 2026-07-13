import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../../styles/global.scss";
import { notFound } from "next/navigation";

//services
import { getLinks } from "@/services/getLinks";

//components
import HeaderComponent from "@/components/HeaderComponent";
import FooterModule from "@/modules/FooterModule";

const montserrat = Montserrat({ //body
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Archery club",
  description: "Your local archery club",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
  const links = await getLinks("header-main");
  const footerLinks = await getLinks("footer-main");
  const footerPolicyLinks = await getLinks("footer-policies");

  if(!links) {
    notFound();
  }

  if(!footerLinks) {
    notFound();
  }

  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${montserrat.variable}`}>
        <main>
          <HeaderComponent links={links} />
          {children}
          <FooterModule footerLinks={footerLinks} footerPolicyLinks={footerPolicyLinks} />
        </main>
      </body>
    </html>
  );
}