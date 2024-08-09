import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../_components/Navbar/Navbar";
import Footer from "../_components/Footer";
import Head from "next/head";
import { AOSInit } from "../_components/aos";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drprashantpadole.in/"),
  title: "Dr Prashant Padole - Indian National Congress",
  description:
    "Dr. Prashant Yadavrao Padole - Indian National Congress Nominated Lok Sabha Candidate. Dr. Prashant Yadavrao Padole is an eminent figure who has left an indelible impact on the Bhandara-Gondiya constituency through his unwavering strength and compassion.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <AOSInit />
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <script type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "lr8773fr19");`}
        </script>
      </Head>
      <body className={inter.className + " overflow-x-hidden"}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
