// src/pages/Login.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { mockUsers } from "../../services/mockUsers";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      dispatch(login({ username: user.username, role: user.role }));
      if (user.role === "admin") navigate("/admin");
      else navigate("/user");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        {error && <p className="text-red-600">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 w-full py-2 text-white rounded">
          Login
        </button>
      </form>
    </div>
  );
}
