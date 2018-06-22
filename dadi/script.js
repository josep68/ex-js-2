function dado(){
  return Math.floor(Math.random() * 6 + 1);
}
var lancio_1 = dado();
var lancio_2 = dado();
alert("Risultato primo giocatore = " + lancio_1);
alert("Risultato secondo giocatore = " + lancio_2);
if (lancio_1 > lancio_2 ) {
  document.write("Ha vinto il giocatore 1");
} else if (lancio_2 > lancio_1 ) {
  document.write("Ha vinto il giocatore 2");
} else {
  document.write("Il risultato è in parita")
}
