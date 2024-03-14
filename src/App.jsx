import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) dispatch(login({user}));
        else logout();
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div>
      <div>
        <Header />
        <main></main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App;
