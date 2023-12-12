// import viteLogo from '/vite.svg';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import LoginHeader from './components/LoginHeader.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import LoginPage from './pages/Login.jsx';
import RegisterPage from './pages/Register.jsx';
import RootLayout from './pages/Root.jsx';
import SettingsPage from './pages/Settings.jsx';
import CreateArticlePage from './pages/CreateArticle.jsx';
import ProfilePage from './pages/profile.jsx';
import ArticlePage from './pages/Article.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/settings', element: <SettingsPage /> },
      { path: '/editor', element: <CreateArticlePage /> },
      { path: '/profile/eric-simons', element: <ProfilePage /> },
      {
        path: '/article/:slug',
        element: <ArticlePage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Header /> */}
      {/* <LoginHeader /> */}
      {/* <Footer /> */}
    </>
  );
}
export default App;
