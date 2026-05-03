import Image from 'next/image';
import Link from 'next/link';

const NavBar = ({ session }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-12 sticky top-0 z-50">
      {/* Navbar Start: Mobile Menu & Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/animals">All Animals</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">
          QurbaniHat 🐄
        </Link>
      </div>

      {/* Navbar Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/animals">All Animals</Link></li>
        </ul>
      </div>

      {/* Navbar End: Auth & Profile */}
      <div className="navbar-end gap-2">
        {session ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-primary">
              <div className="w-10 rounded-full relative">
                <Image 
                  alt="User" 
                  src={session?.user?.image || "/default-avatar.png"} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="px-4 py-2 font-bold text-gray-500">{session?.user?.name}</li>
              <div className="divider my-0"></div>
              <li><Link href="/my-profile">My Profile</Link></li>
              <li><button className="text-error font-semibold">Logout</button></li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/login" className="btn btn-ghost btn-sm hidden sm:flex">Login</Link>
            <Link href="/signUp" className="btn btn-primary btn-sm text-white">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;