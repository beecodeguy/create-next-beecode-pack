import "app/globals.css";
import "assets/styles/main.scss";
import StoreProvider from "core/hocs/StoreProvider";

import ThemeProviderRoot from "app/ThemeProviderRoot";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sharebigya",
  description: "Complete solution to Nepal Stock Market Analytics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <StoreProvider>
          <ThemeProviderRoot>{children}</ThemeProviderRoot>
        </StoreProvider>
      </body>
    </html>
  );
}
