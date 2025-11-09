import ShipSkills from "@/components/elements/shipSkills/shipSkills";

export default async function shipDetail(
  props: {
    params: Promise<{ shipId: string }>;
  }
) {
  const params = await props.params;
  return (
    <div className="pb-1 min-h-screen w-full bg-neutral-500">
      <div className="pt-1 lg:pt-0 mx-1">
        <ShipSkills url={params.shipId} />
      </div>
    </div>
  );
}
