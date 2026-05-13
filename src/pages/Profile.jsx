import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import { getToken, getUser, clearToken } from "../utils/storage";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate("/login");
      return;
    }

    const storedUser = getUser();
    setUser(storedUser);
  }, [navigate]);

  const handleLogout = () => {
    clearToken();
    navigate("/login");
  };

  if (!user) {
    return null;
  }

  return (
    <Card>
      <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
        User Profile
      </h2>
      <p>
        <strong>Name:</strong> {user.fullName}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <Button
        text="Logout"
        onClick={handleLogout}
        variant="secondary"
      />
    </Card>
  );
}

export default Profile;
