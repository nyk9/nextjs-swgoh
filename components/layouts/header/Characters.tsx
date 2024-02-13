import Link from "next/link";

const Characters = () => {
    return(
        <header>
            <Link
                href={"/characters"}
                className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30"
            >
                Characters
            </Link>
        </header>
    );
};
export default Characters;