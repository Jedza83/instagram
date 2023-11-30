import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";
import ProtectedRoute from "./components/PotectedRoute";
import EditProfile from "./pages/EditProfile";

function App() {
  const handleSave = (userData) => {
    console.log("Podaci su sačuvani:", userData);
  };
  /*   Ova funkcija je prop u EditProfile komponenti i prosleđuje se onSave.
Kada korisnik pritisne Save, ova funkcija se poziva i ispisuje info u konzoli, tako sam krenula */
  const [user, setUser] = useState(null);
  /*  user -čuva informacije o trenutnom useru. */

  const onLogin = (userData) => {
    console.log("okinuto dugme");
    setUser({
      name: userData.name,
      email: userData.email,
    });
  };
  /*   onLogin funkcija - kao prop u komponenti (EditProfile) i prosleđuje se kao onSave funkcija.
  Kada korisnik unese podatke u formu i pritisne Save, onSave f-ja u EditProfile poziva onLogin funkciju ove komponente i postavlja user stanje sa imenom i emailom koji su dobijeni iz userData. */
  return (
    <div style={styles.appContainer}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} />}>
            <Route
              index
              element={
                <ProtectedRoute user={user}>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute user={user}>
                  <ProfilePage user={user} />
                </ProtectedRoute>
              }
            />

            <Route
              path="edit"
              element={
                <ProtectedRoute user={user}>
                  <EditProfile onSave={handleSave} />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />}></Route>
            <Route
              path="login"
              element={<LoginPage onLogin={onLogin} />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const styles = {
  appContainer: {
    display: "flex",
  },
};

export default App;
