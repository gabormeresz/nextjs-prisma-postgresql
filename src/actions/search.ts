"use server";

import { redirect } from "next/navigation";
import paths from "@/paths";

export async function search(formData: FormData) {
  const term = formData.get("term");
  if (!term || typeof term !== "string") {
    redirect(paths.home());
  }

  redirect(`/search?term=${term}`);
}
