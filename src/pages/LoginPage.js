import { useState } from "react";

// trenutna vrednost se nalazi u input polju, kada promeni korisnik u polju pokreće se event onChange() koji updajtuje trenutnu vrednost i tako  u krug;
/*  const [name, setName] = useState("Marko Markovic");
  const [email, setEmail] = useState(""); */

function LoginPage({ onLogin }) {
  const [inputs, setInputs] = useState({
    name: "Petar",
    email: "petar@gmail",
  });

  const handleChange = (event) => {
    const imePolja = event.target.name;
    const vrednostPolja = event.target.value;

    setInputs((prethodnaVrednost) => {
      return {
        ...prethodnaVrednost,
        [imePolja]: vrednostPolja,
      };
    });
  };

  const handleLogin = () => {
    onLogin(inputs);
  };

  return (
    <div className="instagram">
      <form style={styles.form}>
        <div style={styles.inputContainer}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            style={styles.input}
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </div>
        <div style={styles.inputContainer}>
          <label>Email</label>
          <input
            type="text"
            style={styles.input}
            name="email"
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </div>
      </form>
      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

const styles = {
  button: {
    backgroundColor: "rgba(145, 50, 145, 0.662)",
    color: "whitesmoke",
    bordeRadius: "15px",
    border: "none",
    padding: ".5rem 1rem",
    margin: "2rem",
  },
  inputContainer: {
    display: "flex",
    flexFlow: "column",
    marginBottom: "10px",
    color: "white",
  },
  input: {
    padding: ".5rem 1rem",
    marginTop: ".3rem",
  },
  form: {
    margin: "2rem",
  },
};

export default LoginPage;
