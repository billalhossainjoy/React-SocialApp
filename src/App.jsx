import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) dispatch(login({ user }));
        else logout();
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <BrowserRouter>
      <div>
        <Header />
        <main></main>
        <Footer />
      </div>
    </BrowserRouter>
  ) : null;
}

export default App;
