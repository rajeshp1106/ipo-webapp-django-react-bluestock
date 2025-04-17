import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Bluestock IPO Portal</h1>
      <Link to="/login" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
    </div>
  );
}
