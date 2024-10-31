export async function GET() {
  const response = await fetch("https://swgoh.gg/api/characters/", {
    next: {
      revalidate: 36000,
    },
  });
  const data = await response.json();
  return Response.json(data);
}
