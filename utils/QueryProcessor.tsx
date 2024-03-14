export default function QueryProcessor(query: string): string {
  const re = /[(%20)?+:,| ]+/

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

    let words: string[] = query.split(re);
    let num : number = 0;
    for(var i in words)
    { 
        if(!isNaN(parseInt(words[i]))){
          num = num + parseInt(words[i]);
        }
    }
    return (String(num));
  }

  if (query.toLowerCase().includes("largest")) {
    let words: string[] = query.split(re);
    let num : number[] = [];
    for(var i in words)
    { 
        if(!isNaN(parseInt(words[i]))){
          num.push(parseInt(words[i]));
        }
    }
    num = num.sort(function (a, b) { return b - a })
    return (String(num[0]));
  }

  return "";
}
