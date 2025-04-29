import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">My LMS</h1>
      <div className="flex space-x-4">
        <Link className="text-white hover:underline" to="/">Home</Link>
        <Link className="text-white hover:underline" to="/courses">Courses</Link>
        <Link className="text-white hover:underline" to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
