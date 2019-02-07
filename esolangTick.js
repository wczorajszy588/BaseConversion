/*
Make a custom esolang interpreter for the language Tick.
Commands:
> Move data selector right
< Move data selector left(infinite in both directions)
+ Increment memory cell by 1. 255+1=0
* Add ascii value of memory cell to the output tape.
*/
function interpreter(tape) {
  let cells = [];
  let cellNo = 0;
  let result = '';
  for ( let i = 0; i < tape.length; i++ )
  {
    switch ( tape[i] )
    {
      case '+':
      cells[cellNo] = cells[cellNo] > 255 ? 0 : cells[cellNo];
      cells[cellNo] = ( cells[cellNo] == undefined ) ? 1 : ++cells[cellNo];
      break;
      
      case '*':
      result += String.fromCharCode(cells[cellNo]);
      break;
      
      case '>':
      cellNo++;
      break;
      
      case '<':
      cellNo--;
    }
  }
  return result; 
}
