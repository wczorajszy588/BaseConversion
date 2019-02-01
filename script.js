/*function arguments
input: string representing number needs to be converted
source: string representing numeral system digits (eg. "0123456789" for decimal) of converted number.
target: similarly to source, string of digits for desired numeral system
Eg. convert("1010", "01", "0123456789")
means, convert 1010 binary number to decimal.
*/
function convert(input, source, target) {
 const systemFrom = source.length;
 const systemTo = target.length;
 
 //convert input number to decimal numeral system
 input = input.split('').reverse();
 let decimValue = input.reduce( (sum, x, index) => {   
    return sum + source.search(x) * Math.pow(systemFrom, index); 
 }, 0 );
 
 //creating array of wages for target numeral system
 const wage = function() {
   let wages = [], power = 0;
   do {
    wages.push( Math.pow(systemTo, power));
    power++;
   }
   while ( Math.pow(systemTo, power) <= decimValue )
   return wages;
 }();
 
 //converting decimal number to desired numeral system
 let index = target.length - 1;
 let result = '';
 let wageIndex = wage.length - 1;
 do
 {
    if ( index * wage[wageIndex]  <= decimValue )
    {
      result = result + target[index] + '';
      decimValue -= (index * wage[wageIndex]);
      wageIndex--;
      index = target.length -1;
    }
    else 
    {
      if (index == 0)
      {
        index = target.length - 1;
        wageIndex--;
      }
      else
      {
        index--;
      }
    }
 }
 while ( wageIndex >= 0 )
 return result;
}
