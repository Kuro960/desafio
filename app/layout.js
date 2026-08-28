
import "./globals.css";
export const metadata = {
  title: "Viaje por Valdivia",
  description: "Prototipo de juego interactivo tipo Quiz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

