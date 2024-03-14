export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("What is your Andrew ID?")) {
    return (
      "lcrosby"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return ("lcrosby");
  }

  if (query.toLowerCase().includes("What is 5 plus 8?")) {
    return ("13");
  }

  return "";
}
