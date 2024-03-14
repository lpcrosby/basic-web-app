import { useState } from "react";
import QueryProcessor from "../utils/QueryProcessor";

export default function Home() {
  const [query, setQuery] = useState<string>("");

  return (
    <div>
      <h1>Welcome!!</h1>
      <p>Please enter your query in the box below:</p>
      <p>This site currently supports questions in the form of asking to add numbers (use the word plus in your query!), finding the largest number (use largest, and include spaces between the numbers), and asking about William Shakespeare.</p>
      <input
        type="text"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <div>
        {QueryProcessor(query) == "" ? "No Match" : QueryProcessor(query)}
      </div>
    </div>
  );
}
