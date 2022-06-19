//if else
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin etmeye çalışalım bizim tahmin sayımız 5 olsun
//eğer biz sayıdan büyükse büyük tahmin eğer
//sayıdan küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?

var randomnumber= (Math.round((Math.random()*10+1)));
Number(randomnumber);
document.writeln(randomnumber + "<br>")
var tahmin = prompt("lütfen tahmininizi giriniz");

for (let i = 0; i < 4; i++) {
  if (Number(tahmin) == randomnumber) {
    document.writeln(
      "tebrikler" + " " + (Number([i]) + Number(1)) + ".tahminde bildiniz"
    );
    i = 5;
   
  } else {
    if (Number(tahmin) <randomnumber) {
      var tahmin = prompt(
        Number(5) -
          (Number([i]) + Number(1)) +
          "hakkınız kaldı lütfen daha büyük deneyin"
      );
      
    } else {
      var tahmin = prompt(
        Number(5) -
          (Number([i]) + Number(1)) +
          "hakkınız kaldı lütfen daha küçük deneyin"
      );
      
    }
   
  }
}
