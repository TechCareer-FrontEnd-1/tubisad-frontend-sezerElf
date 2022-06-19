function topla(numbers){
    let toplam = 0;

    numbers.forEach(i => toplam += i);

    return toplam;
}

function ortalama(numbers) {
    const toplam = topla(numbers);

    return toplam / 5;
}

function enKucuk(numbers) {
    let enKucukSayi = numbers[0];
    numbers.forEach(i => {
        if(i < enKucukSayi){
            enKucukSayi = i;
        }
    });
    
    return enKucukSayi;
}

function enBuyuk(numbers) {
    let enBuyukSayi = numbers[0];
    numbers.forEach(i => {
        if(i > enBuyukSayi){
            enBuyukSayi = i;
        }
    });
    
    return enBuyukSayi;
}

const numbers = [];

for (let index = 0; index < 5; index++) {
  numbers.push(Math.floor(Math.random() * 10) + 1);
}

document.writeln(`Toplam: ${topla(numbers)} <br/>`)
document.writeln(`Ortalama: ${ortalama(numbers)} <br/>`)
document.writeln(`En Buyuk: ${enBuyuk(numbers)} <br/>`)
document.writeln(`En Kucuk: ${enKucuk(numbers)} <br/>`)

console.log(numbers)