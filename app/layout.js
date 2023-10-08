import "./globals.css"
import Sidebar from './(components)/Sidebar';

export default function Layout({ children }) {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  );
}
