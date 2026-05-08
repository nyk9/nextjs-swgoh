import { requireAuth } from "@/lib/auth/guards";
import TWCounterForm from "./_components/TWCounterForm";

export default async function TWCounterFormPage() {
  await requireAuth("/TWCounters/forms");
  return <TWCounterForm />;
}
