/**
 * * ZADATAK:
 *
 * 1. Kreirati stranicu EditProfile
 *
 * 2. U toj stranici kreirati formu koja sadrzi sledeca polja:
 *    - Name & Surname
 *    - Email
 *    - Phone
 *    - Pol (Musko/Zensko)
 *
 * 3. Kada korisnik unese podatke i klikne na dugme SAVE
 *    potrebno je podatke prikazati ispod forme u fromatu:
 *
 *    Name: --------
 *    Email: --------
 *    Phone: --------
 *
 * 4. Stranica za Edit profila treba da bude protected i da
 *    korisnici koji nisu logovani u aplikaciju ne mogu da
 *    joj pristupe
 */

import { useState } from "react";

const EditProfile = ({ onSave }) => {
  const [userData, setUserData] = useState({
    name: "Petar",
    surname: "",
    email: "petar@gmail.com",
    phone: "",
    gender: "male",
  });

  const [savedData, setSavedData] = useState(null);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [fieldName]: fieldValue,
    }));
  };

  const handleSave = () => {
    onSave(userData);
    // stanje za prikaz podataka
    setSavedData(userData);
    // Resetuje stanje
    setUserData({
      name: "",
      surname: "",
      email: "",
      phone: "",
      gender: "male",
    });
  };

  return (
    <div className="instagram">
      <form className="editForm">
        <div>
          <label className="col-35">Name:</label>
          <input
            type="text"
            name="name"
            className="col-65"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="col-35">Surname:</label>
          <input
            type="text"
            name="surname"
            className="col-65"
            value={userData.surname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="col-35">Email:</label>
          <input
            type="text"
            name="email"
            className="col-65"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="col-35">Phone:</label>
          <input
            type="text"
            name="phone"
            className="col-65"
            value={userData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="col-35">Gender:</label>
          <select
            name="gender"
            value={userData.gender}
            onChange={handleChange}
            className="col-65"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="button" onClick={handleSave} className="saveBtn col-35">
          Save
        </button>
        <span className="col-65"></span>
      </form>

      {/* Prikaz podataka samo nakon klika na Save */}
      {savedData && (
        <div className="showData">
          <p>Name: {savedData.name}</p>
          <p>Surname: {savedData.surname}</p>
          <p>Email: {savedData.email}</p>
          <p>Phone: {savedData.phone}</p>
          <p>Gender: {savedData.gender}</p>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
