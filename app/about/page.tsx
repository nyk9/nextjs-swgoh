// export async function getStaticProps(){
//     return {
//         revalidate: 600,
//     };
// } 
import Home from "@/components/layouts/header/Home";

export default function About() {
    return (
        <div className="bg-purple-200 min-h-screen">
            <div className="w-full text-center border-b border-black bg-gradient-to-b backdrop-blur-2xl">
                <Home />
            </div>

            <div className="bg-blue-500 mx-2 mt-2 text-center">
                <h3 className="text-2xl">nyk9</h3>
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
                        TypeScript <br />
                        Tailwind CSS <br />
                        Vercel (Deploy) <br />
                        GitHub : <a href="http://github.com/nyk9/nextjs-swgoh">リンク</a> <br />
                    </p>
                </div>
                主な連絡先：<a href="https://discord.gg/yX3pS2WemD">公式Discordサーバー</a>
            </div>
        </div>
    );
}