function emojiDetector(data) {

    let regex = /([:]{2}|[*]{2})(?<word>[A-Z][a-z]{2,})\1/g
    let regexCoolThreshold = /\d/g

    let coolThreshold = 1;
    let emojiFound = 0;

    let coolEmoji = []

    let match = regex.exec(data)
    let matchThreshold = regexCoolThreshold.exec(data)

        while(matchThreshold) {
            coolThreshold = coolThreshold * Number(matchThreshold)
            matchThreshold = regexCoolThreshold.exec(data)
        }

        while(match) {
            emojiFound++;
            let currentMatchedWord = match.groups.word
            let currentWordSumAscii = 0

            for(let i = 0;  i < currentMatchedWord.length; i++) {
                currentWordSumAscii += Number(currentMatchedWord.charCodeAt(i))
            }

            if(currentWordSumAscii > coolThreshold) {
             coolEmoji.push(match[0])
            }

            match = regex.exec(data)
        }
        console.log(`Cool threshold: ${coolThreshold}`);
        console.log(`${emojiFound} emojis found in the text. The cool ones are:`);
        console.log(coolEmoji.join("\n"));
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])