/*
Write a program that will multiply two given numbers.
1. The arguments are passed as strings.
2. The numbers may be way very large.
3. Answer should be returned as a string.
4. The returned "number" should not start with zeros e.g. 0123 is invalid.
*/
function multiply(a, b)
{
  let result = [];
  for ( let i = b.length; i >= 1; i-- )
  {
    result.push( multiplyBySingleDigit(a, a.length -1, b[i-1], 0) );
  }
  
  //preparing matrix for summing
  let displacement = '';
  result = result.map( (x) => {
    displacement += ' ';
    return (x += displacement).split('').reverse().slice(1);
  } );
  
  const maxLength = getMaxLength(result, 0);
  result = result.map( (x) => {
    const matrixFill = [];
    for ( let i = x.length; i < maxLength; i++ )
    {
      matrixFill.push(' ');
    }
    return x.concat(matrixFill); 
  } );
  result = result.map((x)=> {return x.map((y)=> {return y*1})});
  
  // get sum for each of the the matrix column 
  let sumForColumns = [];
  for ( let i = 0; i < maxLength; i++ )
  {
    let columnSum = 0;
    for ( let m = 0; m < result.length; m++ )
    {
      columnSum += result[m][i];
    }
    sumForColumns.push(columnSum);
  }
  result = summing( sumForColumns, 0 , 0);
  return (result + '').split('').reverse().join('').replace(/^[0]+/, '') || '0';
}

function multiplyBySingleDigit( number, index, digit, rest )
{
  if ( index == 0 )
  {
    return number[index] * digit + rest  + '' ;
  }
  let product = number[index] * digit + rest;
  rest = Math.floor(product/ 10);
  let result = product % 10;
  return multiplyBySingleDigit( number, --index, digit, rest ) + result;
}

function getMaxLength (arr, index) {
  if ( index == arr.length -1 )
  {
    return arr[index].length;
  }
  return Math.max( arr[index].length, getMaxLength(arr, ++index) );
 };

function summing(column, index, rest ) {
const sum = column[index] + rest;
  if (index == column.length -1)
  {
    return (sum + '').split('').reverse().join('');
  }
  rest = Math.floor(sum / 10);
  return sum % 10 + summing(column, ++index, rest);
}
