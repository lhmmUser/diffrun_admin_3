import React from "react";

export default function HpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-semibold text-black dark:text-zinc-50">
          Welcome to the HP Page!
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          This is a basic page located at <code>/hp</code>.
        </p>
        <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-300">
          You can add more content and functionality to this page as you need.
        </p>
      </main>
    </div>
  );
}
