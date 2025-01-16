import Quotes from "./components/Quotes";
import Todos from "./components/Todos";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-between items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start flex-1">
        <div className="flex flex-col">
          <h1 className="text-3xl mb-2">
            Hi
          </h1>
          <h2 className="text-sm">
            bo-log(at development...)
          </h2>
        </div>

        <Todos />
      </main >

      <MainFooter />
    </div>
  );
}

const MainFooter = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center" >
      <Quotes />
    </footer>
  );
}