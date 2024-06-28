"use client";
import Link from 'next/link';
import schedules from '../features/mainpages/constant/schedules';
import updates, { Updates } from '../features/mainpages/constant/update';

export default function Home() {
  const update: Updates[] = updates;
  const schedule: Updates[] = schedules;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1 bg-neutral-700">
      <div className="mt-5 md:mt-0 grid center text-center w-full md:w-2xl md:grid-cols-3 xl:grid-cols-4  lg:w-full lg:mb-0 lg:text-left">
        <Link
          href='https://swgoh.gg/'
          className='group rounded-lg border border-transparent px-1 py-4 mx-5 md:mt-5 transition-colors hover:border-gray-300 hover:scale-110 hover:bg-orange-700 hover:light:border-neutral-700 bg-orange-200'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            参考にしたサイト {' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            swgoh.gg
          </p>
        </Link>

        <Link
          href='/characters'
          className='group rounded-lg border border-transparent px-2 py-4 mx-5 mt-8 md:mt-5 transition-colors hover:border-gray-300 hover:dark:scale-110 hover:bg-blue-900 hover:light:border-neutral-700 bg-blue-300'
          // target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-3xl font-semibold`}>
            Characters {' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            キャラ一覧
          </p>
        </Link>

        <Link
          className='group rounded-lg border border-transparent px-5 py-4 mx-5 mt-8 md:mt-5 transition-colors hover:border-gray-300 hover:dark:scale-110 hover:bg-blue-900 hover:light:border-neutral-700 bg-blue-300'
          // target='_blank'
          rel='noopener noreferrer'
          href='/ships'
        >
          <h2 className={`mb-3 text-3xl font-semibold`}>
            Ships {' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            ※ 今後追加予定
          </p>
        </Link>

        <Link
          className='group rounded-lg border border-transparent px-5 py-4 mx-5 mt-8 md:mt-5 transition-colors hover:border-gray-300 hover:dark:scale-110 hover:bg-blue-900 hover:light:border-neutral-700 bg-blue-300'
          // target='_blank'
          rel='noopener noreferrer'
          href='/TWCouters'
        >
          <h2 className={`mb-3 text-3xl font-semibold`}>
            TW Counters {' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            ※ 不具合多発のため、ご注意ください
          </p>
        </Link>

        <Link
          href="https://discord.gg/yX3pS2WemD"
          className="group rounded-lg border border-transparent px-5 py-4 mx-5 mt-8 md:mt-5  transition-colors hover:border-gray-300 hover:dark:scale-110 bg-teal-200 hover:bg-teal-700 hover:light:border-neutral-700 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-3xl font-semibold`}>
            Discord {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            公式 Discord サーバー
          </p>
        </Link>

        <Link
          href="https://github.com/nyk9/nextjs-swgoh"
          className="group rounded-lg border border-transparent px-5 py-4 mx-5 mt-8 md:mt-5 transition-colors hover:border-gray-300 hover:dark:scale-110 bg-teal-200 hover:bg-teal-700 hover:light:border-neutral-700 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-3xl font-semibold`}>
            GitHub{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            ソースコード
          </p>
        </Link>

      </div>
      <div className='w-full text-center mb-10 m-1 my-6'>
        <div className='left-0 bottom-5 bg-red-400'>
          <h1 className='text-black'>アプデ：ログ</h1>
          {update.map((update) => {
            return (
              <div
                className='border-dotted border-2 mb-1 text-left'
                key={update.ver}
              >
                <p className=''>
                  {update.date} : {update.title}
                </p>
                <small className='ml-2'>詳細：{update.detaill}</small>
              </div>
            );
          })}
        </div>
      </div>
      <div className='border-double w-full text-center mb-1'>
        <div className='left-0 bottom-5 bg-sky-400'>
          <h1 className='text-black'>実装予定</h1>
          {schedule.map((schedule) => {
            return (
              <div
                className='border-dashed border-2 text-left'
                key={schedule.ver}
              >
                <p>
                  {schedule.date} : {schedule.title}
                </p>
                <small className='pl-2'>詳細 : {schedule.detaill}</small>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-4 text-sm" >
        <Link
          href={'/about'}
        >
          About me
        </Link>
      </div>
      <div>
        <Link
          href="/privacy-policy"
          className='text-center mt-2'
        >
          プライバシーポリシー・免責事項
        </Link>
      </div>
    </main>
  )
}
