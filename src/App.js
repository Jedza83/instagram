import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";
import EditProfile from "./pages/EditProfile";
import UserData from "./pages/UserData";
import { UserProvider } from "./UserContext";
import ProtectedRoute from "./components/PotectedRoute";

function App() {
  const handleSave = (userData) => {
    console.log("Podaci su sačuvani:", userData);
  };
  /*   Ova funkcija je prop u EditProfile komponenti i prosleđuje se onSave.
Kada korisnik pritisne Save, ova funkcija se poziva i ispisuje info u konzoli, tako sam krenula */

  const [user, setUser] = useState(null);
  /*  user -čuva informacije o trenutnom useru. */

  const onLogin = (userData) => {
    console.log("Okinuto dugme");
    setUser({
      name: userData.name,
      email: userData.email,
    });
  };
  /*   onLogin funkcija - kao prop u komponenti (EditProfile) i prosleđuje se kao onSave funkcija.
  Kada korisnik unese podatke u formu i pritisne Save, onSave f-ja u EditProfile poziva onLogin funkciju ove komponente i postavlja user stanje sa imenom i emailom koji su dobijeni iz userData. */

  return (
    <div style={styles.appContainer}>
      <UserProvider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout user={user} />}>
              <Route index element={<Navigate to="/login" />} />
              <Route
                path="home"
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
              <Route
                path="userdata"
                element={
                  <ProtectedRoute user={user}>
                    <UserData />
                  </ProtectedRoute>
                }
              />
              <Route path="login" element={<LoginPage onLogin={onLogin} />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

const styles = {
  appContainer: {
    display: "flex",
  },
};

export default App;
