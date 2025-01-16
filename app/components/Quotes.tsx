"use client";

import { useEffect, useState } from "react";

interface IQuote {
  author: string;
  category: string;
  quote: string;
}

export default function Quotes() {
  const [quotes, setQuotes] = useState<IQuote[]>([]);

  useEffect(() => {
    fetch("/api/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  return (
    <div>
      {
        quotes.map((quote, i) => (
          <div key={`${quote.category}-${i}`} className="text-right">
            <p className="w-full text-sm mb-1">
              <i>&quot;{quote.quote}&quot;</i>
            </p>
            <span className="text-xs">
              <i>- {quote.author} -</i>
            </span>
          </div>
        ))
      }
    </div>
  );
}