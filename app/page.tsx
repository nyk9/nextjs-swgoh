"use client";
import Image from 'next/image';
import schedules from './schedules';
import updates, { Updates } from './update';

export default function Home() {
  const update: Updates[] = updates;
  const schedule: Updates[] = schedules;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex m-10" >
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p> */}
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
        <a
          className='relative left-0 bottom-5 border border-blue-600 bg-red-400 left-0 top-0 w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:scale-110 hover:bg-black-900 hover:light:border-neutral-700'
          href={'/about'}
        >
          About me
        </a>
      </div>

      <div className="flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] mb-20">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href='https://swgoh.gg/'
          className='group rounded-lg border border-transparent px-5 py-4 mx-5 my-8 transition-colors hover:border-gray-300 hover:dark:scale-110 hover:bg-red-900 hover:light:border-neutral-700'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2x1 font-semibold`}>
            swgoh {' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            外部リンク：swgoh.gg
          </p>
        </a>

        <a
          href='/character'
          className='group rounded-lg border border-transparent px-5 py-4 mx-5 my-8 transition-colors hover:border-gray-300 hover:dark:scale-110 hover:bg-blue-900 hover:light:border-neutral-700'
          // target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2x1 font-semibold`}>
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
          href="https://discord.gg/yX3pS2WemD"
          className="'group rounded-lg border border-transparent px-5 py-4 mx-5 my-8 transition-colors hover:border-gray-300 hover:dark:scale-110 hover:bg-blue-900 hover:light:border-neutral-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Discord{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            公式 Discord サーバー
          </p>
        </a>

      </div>
      <div className='border-y-2 border-double w-full text-center mb-10'>
        <div className='left-0 bottom-5 bg-red-400'>
          <h1 className='text-green-300'>アプデ：ログ</h1>
          {update.map((update)=>{
            return(
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
      <div className='border-y-2 border-double w-full text-center mb-1'>
        <div className='left-0 bottom-5 bg-sky-400'>
          <h1 className='text-green-700'>実装予定</h1>
          {schedule.map((schedule)=>{
              return(
                <div
                  className='border-dashed border-2 mb-1 text-left'
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
