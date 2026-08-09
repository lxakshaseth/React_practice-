import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Dashboard</h1>

        <p>Welcome to your dashboard 🎉</p>

        <button onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;