import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";
import { getUser, saveToken } from "../utils/storage";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = getUser();

    if (!storedUser) {
      setError("No user found. Please register first.");
      return;
    }

    if (
      storedUser.email === email.trim() &&
      storedUser.password === password
    ) {
      const token = Math.random().toString(36).substring(2) + Date.now();
      saveToken(token);
      navigate("/profile");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <Card>
      <h2 style={{ textAlign: "center", marginBottom: "16px" }}>Login</h2>
      <form onSubmit={handleLogin}>
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

        {error && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
            {error}
          </p>
        )}

        <Button text="Login" type="submit" variant="primary" />
      </form>

      <p style={{ marginTop: "12px", fontSize: "14px" }}>
        Don&apos;t have an account? <Link to="/register">Register</Link>
      </p>
    </Card>
  );
}

export default Login;
