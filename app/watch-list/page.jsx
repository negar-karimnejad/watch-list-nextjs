import EditWatch from "../components/EditWatch";
import WatchForm from "../components/WatchForm";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { deleteWatch } from "../server-actions/deleteWatch";

export default async function WatchList() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  const { data: watches, error } = await supabase
    .from("watches")
    .select("*")
    .eq("user_id", user.id)
    .order("brand", { ascending: true });

  if (error) {
    console.error("Error fetching watches");
  }
  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Watch List</h1>
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>

      <WatchForm />

      <div className="mt-8">
        {watches?.map((watch) => (
          <div key={watch.id} className="m-8">
            <h2 className="text-lg font-semibold">
              {watch.brand} - {watch.model}
            </h2>
            <div className="mt-2 flex items-center">
              <form action={deleteWatch} className="mr-2">
                <input type="hidden" name="id" value={watch.id} />
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none"
                >
                  Delete
                </button>
              </form>
              <EditWatch watch={watch} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
