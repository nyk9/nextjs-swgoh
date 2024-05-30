import abilitiesList from "@/types/swgoh/abilitieLists/abilitiesList";

export async function GET () {
    const response = await fetch("https://swgoh.gg/api/abilities/", {
        next: {
            revalidate: 36000,
        },
    });
    const data: abilitiesList[] = await response.json();
    return Response.json(data);
};