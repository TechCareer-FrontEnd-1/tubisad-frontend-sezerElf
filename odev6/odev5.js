function sayiFonksiyonu(number) {
  document.writeln(`${number} kadar sayı var \n`);

  let total = 0;

  for (let i = 0; i <= number; i++) {
    total += i;
  }

  document.writeln(`Sayı toplamları: ${total} \n`);
}

function tekSayiFonksiyonu(number) {
  let total = 0;

  document.writeln("Tek Sayılar \n");
  for (let i = 1; i <= number; i++) {
    if (i === 100) {
      break;
    }

    if (i % 2 !== 0) {
      document.writeln(i);

      if (i == 7) continue;

      total += i;
    }
  }

  document.writeln(`Tek Sayı toplamları: ${total} \n`);
}

function ciftSayiFonksiyonu(number) {
    let total = 0;
  
    document.writeln("Cift Sayılar \n");
    for (let i = 1; i <= number; i++) {
      if (i === 100) {
        break;
      }
  
      if (i % 2 === 0) {
        document.writeln(i);
  
        total += i;
      }
    }
  
    document.writeln(`Cift Sayı toplamları: ${total} \n`);
  }

let number;

do {
  number = prompt("Sayı Gir");
} while (number < 1);

if(number != 44){
    sayiFonksiyonu(number);
    tekSayiFonksiyonu(number);
    ciftSayiFonksiyonu(number);
}