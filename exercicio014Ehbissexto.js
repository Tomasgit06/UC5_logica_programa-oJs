function ehBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}


console.log(ehBissexto(2024)); 
console.log(ehBissexto(2023));
console.log(ehBissexto(1900)); 
console.log(ehBissexto(2000)); 