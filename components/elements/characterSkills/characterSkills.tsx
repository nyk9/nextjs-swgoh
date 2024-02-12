export default async function CharacterSkills() {
    const res = await fetch('/api/characterAbilities', {
        next: {
            revalidate: 5,
        },
    });
    if (!res.ok) {
        throw new Error('Error!!!');
    }
    const data = await res.json();
    console.log(data[0].id);
    return (
        <>
            {data[0].id}
        </>
    );
};