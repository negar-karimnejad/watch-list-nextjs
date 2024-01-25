"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function editWatch(formData) {
  const watchId = formData.get("id");
  const model = formData.get("model");
  const brand = formData.get("brand");
  const referenceNumber = formData.get("referenceNumber");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) {
    console.error("User is not authenticated within editWatch server action");
    return;
  }

  const { data, error } = await supabase
    .from("watches")
    .update({
      model,
      brand,
      reference_number: referenceNumber,
      user_id: user.id,
    })
    .match({ id: watchId, user_id: user.id });

  if (error) {
    console.error("Error updating data", error);
    return;
  }

  revalidatePath("/watch-list");

  return { message: "Success" };
}
