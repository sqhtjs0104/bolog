export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1 className="text-3xl mb-2">
            Hi, this is Bo-log
          </h1>
          <h2 className="text-sm">
            And it&apos;s still under development...
          </h2>
        </div>

        <div className="flex flex-col min-h-80">
          <div className="flex-1">
            <p className="mb-3">
              To-Do
            </p>
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] flex flex-col gap-1">
              <li>Create new model - <code>Todos</code></li>
              <li>Connect table <code>Todos</code> for here</li>
              <li>Insert famous saying API in footer</li>
            </ol>
          </div>
          <input type="text" placeholder="somthing to do?" className="border-b text-sm pb-1 px-1 outline-none" />
        </div>

      </main >
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Here&apos;s a footer. What do you wanna put in here?</p>
      </footer>
    </div >
  );
}
