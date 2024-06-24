import { Public_Sans } from "next/font/google";
import "./globals.css";
import AuthContextProvider from "@/context/UserContext";
import PetContextProvider from "@/context/PetContext";

const public_sans = Public_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "PeTrack",
  description:
    "Now you can easily keep eye on your loving pets by tracking them globally",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="html-tag">
      <body className={public_sans.className}>
        <AuthContextProvider>
          <PetContextProvider>{children}</PetContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
