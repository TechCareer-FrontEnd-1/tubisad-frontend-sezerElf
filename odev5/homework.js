// Kullanıcıda tarafından aldığımız 2 tane sayının
// s1-) Bu sayılardan en küçüğü nedir ?
// s2-) Bu sayılardan en büyüğü nedir ?
// s3-) Bu sayılardan en büyüğü karekökü nedir ?
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
// s5-) Bu sayılardan en küçüğü mutlak nedir ?
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım


var number1=prompt("lütfen birinci sayıyı giriniz");
var number2=prompt("lütfen ikinci sayıyı giriniz");


document.writeln("sayı 1 :"+ number1 +"<br>");
document.writeln("sayı 2 :"+ number2+"<br>");

 document.writeln("Min :" + Math.min(Number(number1),Number(number2))+"<br>");
 document.writeln("Max: "+Math.max(Number(number1),Number(number2))+"<br>");
 document.writeln("en büyük karekök :" + Math.sqrt(Math.max(Number(number1),Number(number2)))   +"<br>");
 document.writeln("en büyüğü karekökünün üste yuvarlanması :"+ Math.ceil(Math.sqrt(Math.max(Number(number1),Number(number2)))) +"<br>" );
 document.writeln("mutlak en küçük :" + Math.abs(Math.min(Number(number1),Number(number2))) +"<br>");
 document.writeln("Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım :"+ Math.pow(Math.min(Number(number1),Number(number2)),Math.max(Number(number1),Number(number2)))+ "<br>");




