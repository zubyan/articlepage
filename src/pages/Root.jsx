import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoginHeader from '../components/LoginHeader';

function RootLayout() {
  return (
    <>
      <Header />
      {/* <LoginHeader /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default RootLayout;
