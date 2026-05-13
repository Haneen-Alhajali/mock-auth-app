import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";
import { saveUser } from "../utils/storage";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const user = { fullName, email, password };
    saveUser(user);

    navigate("/login");
  };

  return (
    <Card>
      <h2 style={{ textAlign: "center", marginBottom: "16px" }}>Register</h2>
      <form onSubmit={handleRegister}>
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button text="Register" type="submit" variant="primary" />
      </form>

      <p style={{ marginTop: "12px", fontSize: "14px" }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </Card>
  );
}

export default Register;
