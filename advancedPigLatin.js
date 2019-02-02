/* 
Write function that encrypt sentence in Pig Latin cypher
-------------------------------------------------
rules:
- all leters before first vovel move to the end of a word and add "ay" at the end of the whole word;
eg. hotel -> otelhay 
- if first letter is a vowel, just add "way" at the end of a word;
eg. underline -> underlineway
- only letters should be subject of an encryption;
out! -> outway!
- upperCases should stay on its places
eg. Love -> Ovelay
Have a nice day! -> Avehay away icenay ayday!
*/
function translate(sentence) {
  sentence = sentence.split(' ');
  for ( let i = 0; i < sentence.length; i++ )
  {
    const upperCase = sentence[i].search(/[A-Z]/);
    const lettersToMove = sentence[i].slice(0, sentence[i].search(/[aeiouAEIOU]+/));
    const suffix = lettersToMove.length > 0 ? 'ay' : 'way';
    const otherLetters = sentence[i].substring( sentence[i].search(/[aeiouAEIOU]/), sentence[i].search(/[a-z][^a-z]*$/)+1);
    const punctation = sentence[i].slice( sentence[i].search(/[^a-zA-Z]/), sentence[i].search(/[^a-zA-Z]$/)+1 );
    sentence[i] = otherLetters + lettersToMove + suffix + punctation;
    sentence[i] = sentence[i].toLowerCase();
    sentence[i] = upperCase == 0 ? sentence[i][0].toUpperCase() + sentence[i].slice(1) : sentence[i];
  }
  return sentence.join(' ');
};
