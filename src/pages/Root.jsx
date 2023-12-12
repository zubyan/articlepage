import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoginHeader from '../components/LoginHeader';
import { createContext, useState } from 'react';

import { AuthContext } from '../store/auth-context';
function RootLayout() {
  const [user, setUser] = useState(() => {
    const currentUser = JSON.parse(localStorage.getItem('user-info'));
    return currentUser ? currentUser.user : null;
  });
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Header />
      {/* <LoginHeader /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </AuthContext.Provider>
  );
}
export default RootLayout;
