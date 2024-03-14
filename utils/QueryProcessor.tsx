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

  if (query.toLowerCase().includes("plus")) {
    let words: string[] = query.split(" ");
    let num : number = 0;
    for(var word in words)
    { 
        if(!isNaN(parseInt(word))){
          num = num + parseInt(word);
        }
    }
    return (num.toString());
  }

  if (query.toLowerCase().includes("plus")) {
    let words: string[] = query.split("%20");
    let num : number = 0;
    for(var word in words)
    { 
        if(!isNaN(parseInt(word))){
          num = num + parseInt(word);
        }
    }
    return (String(words));
  }

  if (query.toLowerCase().includes("largest")) {
    let words: string[] = query.split("%20");
    let num : number[] = [];
    for(var word in words)
    { 
        if(!isNaN(parseInt(word))){
          num.push(parseInt(word))
        }
    }
    return (String(num));
  }

  return "";
}
