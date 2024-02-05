import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <div
            className="min-h-screen bg-neutral-700"
        >
            <Link
                href={"/"}
                className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30"
            >Home</Link>
            <header
                className="text-center pt-20 lg:pt-0 text-5xl"
            >
                プライバシーポリシー
            </header>
            <div>
                <h2 className="m-2 text-2xl">
                    個人情報の定義
                </h2>
                <p>
                    個人情報とは、個人に関する情報であり、氏名、住所、性別、電話番号、メールアドレス、職業、勤務先、通学先等
                    これらのうち1つまたは複数を組み合わせることにより、特定の個人を識別し得る情報をいいます。
                </p>
            </div>
            <div>
                <h2 className="m-2 text-2xl">
                    個人情報の取得・利用について
                </h2>
                <p>
                    個人情報の取得は適法かつ公正な手段によって行います。 <br />
                    取得する個人情報の利用目的をできるだけ特定し明らかにします。 <br />
                    個人情報の利用は、利用目的の範囲内で、具体的な作業に応じて作業上必要な範囲内で行います。
                </p>
                <h2 className="m-2 text-2xl">
                    個人情報の第三者への開示・提供について
                </h2>
                <p>
                    法令等に基づく、又は個人を特定できない状態(統計情報等)で開示する場合を除き、ご本人の同意を得ることなく個人情報を第三者に開示・提供することはいたしません。
                </p>
                <h2 className="m-2 text-2xl">
                    セキュリティー対策について
                </h2>
                <p>
                    個人情報に対する不正アクセス、個人情報の紛失、改ざん、漏洩などを防止するために、適切な安全対策を講じます。 <br />
                    個人情報の取り扱いに関する規定を定め、着実に実行するとともに、継続的に改善していきます。
                </p>
                {/* <h2>
                    個人情報の収集の目的について
                </h2> */}
            </div>

            <h2 className="m-2 text-2xl">
                個人情報の収集方法について
            </h2>
            <div>
                <h3 className="text-xl">
                    Vercel Web Analytics (提供者: Vercel Inc.)
                </h3>
                <div>
                    <p>
                        利用目的：サイトの利用状況分析
                    </p>
                    <p>
                        収集する情報 : Webサイト内の閲覧情報、閲覧時の位置情報(IPアドレス)、ブラウザ、端末、参照元等
                    </p>
                    <p>
                        プライバシー : 匿名化されたデータのみを保存し、Cookieは使用しません。
                    </p>
                </div>
            </div>
            <div>
                <h1
                    className="mt-10 text-center text-5xl"
                >
                    免責事項
                </h1>
                <div>
                    <h4 className="m-2 text-2xl">
                        情報の正確性と完全性
                    </h4>
                    <p>
                        このウェブサイトに掲載されている情報は、提供される当時のものであり、正確性や完全性を保証するものではありません。
                        変更される可能性がありますので、最新の情報を確認するようお願いします。
                    </p>
                    <h4 className="m-2 text-2xl">
                        法的助言の不提供
                    </h4>
                    <p>
                        このウェブサイトに含まれる情報は法的助言を提供するものではありません。特定の法的問題に関するアドバイスが
                        必要な場合は、専門の法的助言を求めることを強くお勧めします。
                    </p>
                    <h4 className="m-2 text-2xl">
                        外部リンクに関する責任
                    </h4>
                    <p>
                        当ウェブサイトからの外部リンクに関して、その正確性や信頼性について責任を負いません。外部サイトへの
                        リンクを利用する際は、ユーザ自身の責任で行動してください。
                    </p>
                    <h4 className="m-2 text-2xl">
                        サービスの提供の停止
                    </h4>
                    <p>
                        当ウェブサイトは予告なくサービスを停止する場合があり、その際に発生する損失について一切の責任を負いません。
                    </p>
                    <h4 className="m-2 text-2xl">
                        免責範囲
                    </h4>
                    <p>
                        このウェブサイトの利用によって発生した損害やトラブルに対して、一切の責任を負いません。
                        情報の利用はユーザの自己責任で行ってください。
                    </p>
                </div>

            </div>
            <p  className="my-2 text-2xl">
                制定日： 2024年 2 月 07 日
            </p>

        </div>
    );
}