import Link from "next/link";

// export async function getStaticProps(){
//     return {
//         revalidate: 600,
//     };
// } 


export default function About() {
    return(
        <div className="bg-purple-200">
            <Link
                href={"/"}
                className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30"
            >  Home  </Link>
            <div>
                <div className="bg-blue-500 mx-8 text-center">
                    <h3 className="text-2xl justify-center ">nyk9</h3>
                    <div>
                        <h5 className="pt-2">1. 自己紹介</h5>
                        <p className="text-left p-3">
                            2024/1/21現在情報系の学部に通う大学2年生(2回生)、
                        </p>
                    </div>
                    <div>
                        <h5 className="pt-2">2. 使用した技術</h5>
                        <p className="text-left p-3">
                            Next.js : v.14.1.0 <br />
                            TypeScript <br/>
                            Tailwind CSS <br/>
                            Vercel (Deploy) <br/>
                            GitHub : <a href="http://github.com/nyk9/nextjs-swgoh">リンク</a> <br/>
                        </p>
                    </div>
                    主な連絡先：<a href="https://discord.gg/yX3pS2WemD">公式Discordサーバー</a>
                </div>
            </div>
        </div>
    );
}