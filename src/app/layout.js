import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import MyNavbar from "@components/Navbar";
import Footer from "@components/Footer";
export const metadata = {
  title: "KPRU Innovation",
  description: "KPRU Innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{backgroundColor: '#f4e1d1'}}>
        <MyNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
