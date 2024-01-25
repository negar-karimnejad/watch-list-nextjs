import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="h-screen px-10 mt-10">
      <div className="">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Welcome To Watch List
        </h1>
        <p className="text-gray-400">
          Your personal space to curate and manage a wishlist of your favorite
          watches. Sign in to create, view, edit, and delete watches from your
          wishlist.
        </p>
        <div className="mt-8 bg-slate-800 p-5">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
