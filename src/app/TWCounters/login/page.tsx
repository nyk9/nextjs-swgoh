import { redirect } from "next/navigation";

export default function LegacyTWCounterLoginPage() {
  redirect("/login?callbackUrl=/TWCounters/forms");
}
