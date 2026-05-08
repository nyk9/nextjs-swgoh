import type { Metadata } from "next";

const PRIVACY_TITLE = "プライバシーポリシー";
const PRIVACY_DESCRIPTION =
  "swgoh4jp（銀河の英雄 日本語データベース）のプライバシーポリシー。個人情報の取り扱い、Cookie、アクセス解析に関する方針を記載しています。";

export const metadata: Metadata = {
  title: PRIVACY_TITLE,
  description: PRIVACY_DESCRIPTION,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    type: "article",
    url: "/privacy-policy",
    title: PRIVACY_TITLE,
    description: PRIVACY_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: PRIVACY_TITLE,
    description: PRIVACY_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-700">
      <header className="text-center pt-20 lg:pt-0 text-5xl">
        プライバシーポリシー
      </header>
      <div>
        <h2 className="m-2 text-2xl">個人情報の定義</h2>
        <p>
          個人情報とは、個人に関する情報であり、氏名、住所、性別、電話番号、メールアドレス、職業、勤務先、通学先等
          これらのうち1つまたは複数を組み合わせることにより、特定の個人を識別し得る情報をいいます。
        </p>
      </div>
      <div>
        <h2 className="m-2 text-2xl">個人情報の取得・利用について</h2>
        <p>
          個人情報の取得は適法かつ公正な手段によって行います。 <br />
          取得する個人情報の利用目的をできるだけ特定し明らかにします。 <br />
          個人情報の利用は、利用目的の範囲内で、具体的な作業に応じて作業上必要な範囲内で行います。
        </p>
        <h2 className="m-2 text-2xl">個人情報の第三者への開示・提供について</h2>
        <p>
          法令等に基づく、又は個人を特定できない状態(統計情報等)で開示する場合を除き、ご本人の同意を得ることなく個人情報を第三者に開示・提供することはいたしません。
        </p>
        <h2 className="m-2 text-2xl">セキュリティー対策について</h2>
        <p>
          個人情報に対する不正アクセス、個人情報の紛失、改ざん、漏洩などを防止するために、適切な安全対策を講じます。{" "}
          <br />
          個人情報の取り扱いに関する規定を定め、着実に実行するとともに、継続的に改善していきます。
        </p>
        {/* <h2>
                    個人情報の収集の目的について
                </h2> */}
      </div>

      <h2 className="m-2 text-2xl">アクセス解析・Cookieの利用について</h2>
      <div>
        <h3 className="m-2 text-xl">
          Vercel Web Analytics（提供者: Vercel Inc.）
        </h3>
        <p className="m-2">
          当サイトはサイト改善のために Vercel Web Analytics
          を利用しています。Vercel
          はページビュー数、参照元、デバイス種別、おおよその地域（IPアドレスから推定）等を集計しますが、
          IPアドレスは保存前に匿名化され、個人を特定するために用いられません。
          詳細は{" "}
          <a
            href="https://vercel.com/docs/analytics/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Vercel Web Analytics プライバシーポリシー
          </a>
          をご確認ください。
        </p>
        <h3 className="m-2 text-xl">Cookieの利用について</h3>
        <p className="m-2">
          当サイトはログインセッションの維持等の目的でCookieを使用します。
          ブラウザの設定からCookieを無効化することができますが、その場合一部機能が利用できなくなることがあります。
        </p>
      </div>
      <div>
        <h2 className="m-2 text-2xl">広告配信について</h2>
        <p className="m-2">
          当サイトでは将来的に、第三者配信事業者である Google
          が提供する広告サービス（Google AdSense
          を含む）を利用する可能性があります。Google
          を含む第三者配信事業者は、Cookie を使用して、ユーザーが当サイトや他のサイトに
          過去アクセスした情報に基づき、ユーザーの興味に応じた広告を配信することがあります。
        </p>
        <p className="m-2">
          Google AdSense は、広告配信のために「DoubleClick DART
          Cookie」と呼ばれる仕組みを利用する場合があります。Cookie
          を介して収集される情報には氏名、住所、メールアドレス、電話番号等の個人を直接特定する情報は含まれません。
        </p>
        <p className="m-2">
          ユーザーは以下のリンクから、広告のパーソナライズを無効化することができます。
        </p>
        <ul className="m-2 list-disc pl-6">
          <li>
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              広告設定（Google アカウント）
            </a>
          </li>
          <li>
            <a
              href="https://optout.aboutads.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              YourAdChoices オプトアウトページ（aboutads.info）
            </a>
          </li>
        </ul>
        <p className="m-2">
          Google
          のパーソナライズ広告の仕組みや、ユーザーが自身のデータを管理する方法の詳細については
          {" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google の広告ポリシー
          </a>
          {" "}
          および{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            広告主としての Google
          </a>
          をご確認ください。
          ブラウザによっては、サードパーティ Cookie
          をブロックする設定により広告のパーソナライズを停止できます。
        </p>
      </div>
      <div>
        <h1 className="mt-10 text-center text-5xl">免責事項</h1>
        <div>
          <h4 className="m-2 text-2xl">情報の正確性と完全性</h4>
          <p>
            このウェブサイトに掲載されている情報は、提供される当時のものであり、正確性や完全性を保証するものではありません。
            変更される可能性がありますので、最新の情報を確認するようお願いします。
          </p>
          <h4 className="m-2 text-2xl">法的助言の不提供</h4>
          <p>
            このウェブサイトに含まれる情報は法的助言を提供するものではありません。特定の法的問題に関するアドバイスが
            必要な場合は、専門の法的助言を求めることを強くお勧めします。
          </p>
          <h4 className="m-2 text-2xl">外部リンクに関する責任</h4>
          <p>
            当ウェブサイトからの外部リンクに関して、その正確性や信頼性について責任を負いません。外部サイトへの
            リンクを利用する際は、ユーザ自身の責任で行動してください。
          </p>
          <h4 className="m-2 text-2xl">サービスの提供の停止</h4>
          <p>
            当ウェブサイトは予告なくサービスを停止する場合があり、その際に発生する損失について一切の責任を負いません。
          </p>
          <h4 className="m-2 text-2xl">免責範囲</h4>
          <p>
            このウェブサイトの利用によって発生した損害やトラブルに対して、一切の責任を負いません。
            情報の利用はユーザの自己責任で行ってください。
          </p>
        </div>
      </div>
      <p className="my-2 text-2xl">
        制定日： 2024 年 2 月 7 日 / 改定日： 2026 年 5 月 9 日
      </p>
    </div>
  );
}
