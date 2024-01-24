import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div class="h-screen px-10 mt-10">
      <div class="">
        <h1 class="text-4xl font-bold mb-4 text-white">
          Welcome To Watch List
        </h1>
        <p class="text-gray-400">
          Your personal space to curate and manage a wishlist of your favorite
          watches. Sign in to create, view, edit, and delete watches from your
          wishlist.
        </p>
        <div class="mt-8 bg-slate-800 p-5">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
