import Link from 'next/link';
import Image from 'next/image';
import Login_HomePage_Picture from '/src/styles/pictures/login001.jpg';
import Confide_Logo from '/src/styles/pictures/confide-logo-full-small.png';

export default function LoginPage() {
  return (
    <>
      <div className="relative flex bg-gray-200 placeholder:flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-10 bg-white rounded-md shadow-md max-w-3xl">
        <div className="flex items-center justify-center "> <Image className="w-2/4 " src={Confide_Logo} alt="Login - Logo" width={300} height={500} /></div> 
        <h1 className="text-xl text-center text-gray-700">Welcome</h1>
        <h1 className="text-3xl font-bold text-center text-gray-700">Login to your account</h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link
            href="/"
            className="text-xs text-blue-600 hover:underline"
          >
            back to home
          </Link>
          <div className="mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" >
            <Link href="/home-page">Log in now</Link>
            </button>

          </div>
        </form>
      </div>
    </div>
    </>
  );
}