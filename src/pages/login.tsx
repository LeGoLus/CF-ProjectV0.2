import { type NextPage } from "next";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { type FormEventHandler } from "react";
import Confide_Logo from '/src/styles/pictures/confide-logo-full-small.png';
import Image from 'next/image';

const Login: NextPage = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };
  return (
    <div className="relative flex bg-gray-200 placeholder:flex-col items-center justify-center min-h-screen overflow-hidden">
    <div className="w-full p-10 bg-white rounded-md shadow-md max-w-3xl">
      <div className="flex items-center justify-center "> <Image className="w-2/4 " src={Confide_Logo} alt="Login - Logo" width={300} height={500} /></div> 
      <h1 className="text-xl text-center text-gray-700">Welcome</h1>
      <h1 className="text-3xl font-bold text-center text-gray-700">Login to your account</h1>
    <div className="">
      <div className="mx-auto w-1/2 max-w-xl p-8 lg:w-full">
        {" "}
        <div className="rounded-t-lg bg-white p-8">
          <div>
            {" "}
            <div className="mt-3 flex items-center justify-center space-x-4">
              {" "}
              <button
                onClick={() =>
                  signIn("discord", {
                    callbackUrl: "/",
                  })
                }
                className="flex transform items-center rounded border border-transparent bg-white py-2 px-4 text-sm font-medium uppercase text-indigo-500 shadow-md transition hover:-translate-y-0.5 hover:border-transparent hover:bg-gray-100 hover:text-gray-700 hover:shadow-lg"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-6 w-6"
                  viewBox="0 0 48 48"
                >
                  {" "}
                  <path
                    fill="#fbc02d"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />{" "}
                  <path
                    fill="#e53935"
                    d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                  />{" "}
                  <path
                    fill="#4caf50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />{" "}
                  <path
                    fill="#1565c0"
                    d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />{" "}
                </svg>{" "}
                Google{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="rounded-b-lg bg-gray-100 py-12 px-4 lg:px-24">
          {" "}
          <p className="text-center text-sm font-light text-gray-500">
            {" "}
            Or sign in with credentials{" "}
          </p>{" "}
          <form className="mt-6" onSubmit={handleSubmit}>
            {" "}
            <div className="relative">
              {" "}
              <input
                className="focus:shadow-outline w-full appearance-none rounded-md border border-gray-100 py-3  pl-12  leading-tight text-gray-600 shadow-sm transition focus:placeholder-gray-600 focus:shadow-md focus:outline-none focus:ring-gray-600"
                id="email"
                type="text"
                placeholder="Email"
                name="email"
              />{" "}
              <div className="absolute inset-y-0 left-0 flex items-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3 h-7 w-7 p-1 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />{" "}
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />{" "}
                </svg>{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative mt-3">
              {" "}
              <input
                className="focus:shadow-outline w-full appearance-none rounded-md border border-gray-100 py-3  pl-12  leading-tight text-gray-600 shadow-sm transition focus:placeholder-gray-600 focus:shadow-md focus:outline-none focus:ring-gray-600"
                id="password"
                type="password"
                placeholder="Password"
                name="password"
              />{" "}
              <div className="absolute inset-y-0 left-0 flex items-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3 h-7 w-7 p-1 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />{" "}
                </svg>{" "}
              </div>{" "}
            </div>{" "}
            <div className="mt-4 flex items-center text-gray-500">
              {" "}
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-3"
              />{" "}
              <label htmlFor="remember">Remember me</label>{" "}
            </div>{" "}
            <Link href="/register" className="mt-2 block">
              Don&apos;t have an account sign up?
            </Link>
            <Link href="/home-page" className="mt-2 block">
              Homepage
            </Link>
            <div className="mt-8 flex items-center justify-center">
              {" "}
              <button className="transform rounded bg-indigo-500 py-2 px-4 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-lg">
                {" "}
                Sign in{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Login;
