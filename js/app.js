var frisPrice = 0;
var wijnPrice = 0;
var bierPrice = 0;
var snackPrice = 0;

function order(){
	var order1 = prompt("Welke bestelling wilt u toevoegen?");
		if (order1 == "fris") {
			var orderFris = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling");
			var orderFrisInt = parseInt(orderFris);
			var fris = 2.99;
			frisPrice = fris * orderFrisInt;
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
			var orderSnack = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");
			var orderSnackInt = parseInt(orderSnack);
			var snackSmall = 2.99;
			var snackLarge = 4.99;
			var orderPlate = prompt("Hoeveel bitterbalschalen van "+ orderSnack +" stuks wilt u bestellen?");
			var orderPlateInt = parseInt(orderPlate);
			if (orderSnackInt == 8) {
				snackPrice = orderPlateInt * snackSmall;
				document.write("<p>Bitterballen: " + orderSnack + "x" + orderPlate + " " + orderSnackInt * orderPlateInt + " biterballen" + "<br>" + "&euro;" + snackPrice + "</p>");
			} else if (orderSnackInt == 16) {
				snackPrice = orderPlateInt * snackLarge;
				document.write("<p>Bitterballen: " + orderSnack + "x" + orderPlate + " " + orderSnackInt * orderPlateInt + " biterballen" + "<br>" + "&euro;" + snackPrice + "</p>");
			} else{
				alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.")
			}

		} else if (order1 == "stop") { 
			var totalprice = frisPrice + wijnPrice + bierPrice + snackPrice;
			document.write("<p>"+ "Totaal prijs: " + "&euro;" + totalprice + "</p>");
			return;

		} else{
			alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
		}

	order();
}
document.write('<div class="container">');
order();
document.write('</div>');