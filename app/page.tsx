"use client";
import schedules from './schedules';
import updates, { Updates } from './update';

export default function Home() {
  const update: Updates[] = updates;
  const schedule: Updates[] = schedules;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1 bg-neutral-700">
      <div className="z-10 max-w-5xl w-full m-10 items-center justify-between font-mono text-sm lg:flex" >
        <a
          className='relative left-0 bottom-5 border border-blue-600 bg-red-400 left-0 top-0 w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-2 m-3 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30 group rounded-lg border border-transparent  transition-colors hover:border-gray-300 hover:dark:scale-110 hover:bg-black-900 hover:light:border-neutral-700'
          href={'/about'}
        >
          About me
        </a>
      </div>
      <div className="w-full grid center text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href='https://swgoh.gg/'
          className='group rounded-lg border border-transparent px-1 py-4 mx-5 transition-colors hover:border-gray-300 hover:scale-110 hover:bg-orange-700 hover:light:border-neutral-700 bg-orange-200'
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
        </a>

        <a
          href='/character'
          className='group rounded-lg border border-transparent px-2 py-4 mx-5 mt-8 transition-colors hover:border-gray-300 hover:dark:scale-110 hover:bg-blue-900 hover:light:border-neutral-700 bg-blue-300'
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
        </a>

        <a
          
          className='group rounded-lg border border-transparent px-5 py-4 mx-5 mt-8 transition-colors hover:border-gray-300 hover:dark:scale-110 hover:bg-blue-900 hover:light:border-neutral-700 bg-blue-300'
          // target='_blank'
          rel='noopener noreferrer'
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
        </a>

        <a
          href="https://discord.gg/yX3pS2WemD"
          className="group rounded-lg border border-transparent px-5 py-4 mx-5 mt-8 transition-colors hover:border-gray-300 hover:dark:scale-110 hover:bg-blue-900 hover:light:border-neutral-700 bg-teal-200"
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
        </a>

        <a
          href="https://github.com/nyk9/nextjs-swgoh"
          className="group rounded-lg border border-transparent px-5 py-4 mx-5 mt-8 transition-colors hover:border-gray-300 hover:dark:scale-110 hover:bg-blue-900 hover:light:border-neutral-700 bg-teal-200"
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
        </a>

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
      <div>
        <a
          href="/privacy-policy"
          className='text-center'
        >
          プライバシーポリシー・免責事項
        </a>
      </div>
    </main>
  )
}
