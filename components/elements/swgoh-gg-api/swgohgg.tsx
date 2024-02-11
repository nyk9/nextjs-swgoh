
export async function SWGOHGG() {
    const res = await fetch('https://swgoh.gg/api/abilities', {
        next: {
            revalidate: 5,
        },
    });
    if (!res.ok) {
        throw new Error('res.okではありません')
    }
    const data = await res.json();
    const length = data.length;
    const gk = data[1011];
    // console.log(length);
    // for (let i = 0; i<5; i++){
    //     console.log(data[i+1011]);
    // }
    return (
        <>
            <p>Hello there!</p>
            <p>basic skill:
                <span
                    className="text-blue-300 text-xl"
                >
                    {data[1011].name}
                </span>
            </p>
            {/* <Image
                alt="a"
                src={gk.image}
                width={50}
                height={50}
            /> */}
            <p>description:
                <span
                    className="text-blue-300 text-xl"
                >
                    {data[1011].description}
                </span>
            </p>
        </>
    )
}