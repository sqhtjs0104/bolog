import Tooltip from "./components/Tooltip";

interface IQuote {
  author: string;
  category: string;
  quote: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const url = `${baseUrl}/api/quotes`;

const getQuote = async () => {
  const response = await fetch(url, {
    cache: "no-store",
  });
  const json: IQuote[] = await response.json();
  return json;
}

export default async function Quotes() {
  const quotes = await getQuote();

  return (
    <div>
      {
        quotes.map((quote, i) => (
          <div key={`${quote.category}-${i}`} className="text-right">
            <p className="w-full text-sm mb-1">
              <i>&quot;{quote.quote}&quot;</i>
            </p>
            <span className="text-xs">
              <Tooltip title="About author: Wikipedia">
                <a href={`https://en.wikipedia.org/wiki/${quote.author}`} target="_blank">
                  <i>- {quote.author} -</i>
                </a>
              </Tooltip>
            </span>
          </div>
        ))
      }
    </div>
  );
}