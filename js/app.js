var frisPrice = 0;
var wijnPrice = 0;
var bierPrice = 0;
var snackPrice = 0;

document.write("<h1>Rekening</h1>");

function order(){
	// hier heb ik een function gemaakt om alles in te zetten en opnieuw te kunnen gebruiken iedere keer.

	var order1 = prompt("Welke bestelling wilt u toevoegen?");
		if (order1 == "fris") {
			var orderFris = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling");
			// Ik gebruik een var met een prompt om te vragen hoeveel ze willen toevoegen.
			var orderFrisInt = parseInt(orderFris);
			// hier zorg ik er voor dat orderfris gezien word als nummer. Dus de string word een number.
			var fris = 2.99;
			// hier maak ik een var aan voor de prijs die ik later kan gebruiken om te rekenen.
			frisPrice = fris * orderFrisInt;
			// hier doe ik de prijs * wat iemand heeft ingevuld bij de prompt.
			document.write("<p>Fris: " + orderFris + "<br>" + "&euro;" + frisPrice + "</p>");

		} else if (order1 == "wijn") {
			var orderWijn = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling");
			var orderWijnInt = parseInt(orderWijn);
			var wijn = 3.99;
			wijnPrice = wijn * orderWijnInt;
			document.write("<p>Wijn: " + orderWijn + "<br>" + "&euro;" + wijnPrice + "</p>");

		} else if (order1 == "bier") {
			var orderBier = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling");
			var orderBierInt = parseInt(orderBier);
			var bier = 3.99;
			bierPrice = bier * orderBierInt;
			document.write("<p>Bier: " + orderBier + "<br>" + "&euro;"  + bierPrice + "</p>");

		} else if (order1 == "snack") {
			// hier een else if voor snack.
			var orderSnack = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");
			var orderSnackInt = parseInt(orderSnack);
			var snackSmall = 2.99;
			var snackLarge = 4.99;
			var orderPlate = prompt("Hoeveel bitterbalschalen van "+ orderSnack +" stuks wilt u bestellen?");
			var orderPlateInt = parseInt(orderPlate);
			if (orderSnackInt == 8) {
				// ìk maak hier nog een if aan met als het antwoord 8 bitterballen is.
				snackPrice = orderPlateInt * snackSmall;
				document.write("<p>Bitterballen: " + orderSnack + "x" + orderPlate + " " + orderSnackInt * orderPlateInt + " biterballen" + "<br>" + "&euro;" + snackPrice + "</p>");
			} else if (orderSnackInt == 16) {
				// En hier maak ik een if else aan voor als het antwoord 16 bitterballen is.
				snackPrice = orderPlateInt * snackLarge;
				document.write("<p>Bitterballen: " + orderSnack + "x" + orderPlate + " " + orderSnackInt * orderPlateInt + " biterballen" + "<br>" + "&euro;" + snackPrice + "</p>");
			} else{
				//  Als iemand geen 8 of 16 invult want == betekent gelijk aan. Dus als het dat niet is krijg je een melding.
				alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.")
			}

		} else if (order1 == "stop") { 
			// als er stop word ingevuld bij de eerste prompt dan krijg je de rekening.
			var totalprice = frisPrice + wijnPrice + bierPrice + snackPrice;
			document.write("<p>"+ "Totaal prijs: " + "&euro;" + totalprice + "</p>");
			// met return stopt hij.
			return;

		} else{
			alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
		}

	order();
}
document.write('<div class="container">');
// hier zet ik een div om de gehele function zodat ik die makkelijk kan stylen in css.
order();
document.write('</div>');