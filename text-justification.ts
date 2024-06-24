function createSpace(num: number) {
  return Array.from(new Array(num))
    .map(() => " ")
    .join("");
}

function justifyLine(words: string[], maxWidth: number): string {
  const excess = maxWidth - words.join(" ").length;

  if (words.length === 1) {
    return [words[0], ...Array.from(new Array(excess)).map(() => " ")].join("");
  }

  const hasRem = excess % (words.length - 1) !== 0;

  if (hasRem) {
    // super slow thing
    let temp = [...words];
    for (let idx = 0; idx < excess; idx++) {
      temp[idx % (words.length - 1)] += " ";
    }

    return temp.join(" ");
  }

  return words.join(createSpace(excess / (words.length - 1) + 1));
}

function getWordsLength(words: string[]): number {
  return words.join(" ").length;
}

function fullJustify(words: string[], maxWidth: number): string[] {
  let tempWords: string[] = [];
  let lines: string[] = [];

  for (let word of words) {
    if (getWordsLength([...tempWords, word]) > maxWidth) {
      lines.push(justifyLine(tempWords, maxWidth));
      tempWords = [word];
    } else {
      tempWords.push(word);
    }
  }

  // @TODO: tempWords at this point represents the last line
  lines.push(justifyLine([tempWords.join(" ")], maxWidth));

  return lines;
}
