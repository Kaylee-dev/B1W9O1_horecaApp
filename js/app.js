function order(){
	var order1 = prompt("Welke bestelling wilt u toevoegen?");
		if (order1 == "fris") {
			var orderFris = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling");
			var fris = 2.99;
			var frisPrice = fris * orderFris;
			document.write("<p>Fris: " + orderFris + "<br>" + frisPrice + "</p>");

		} else if (order1 == "wijn") {
			var orderWijn = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling");
			var wijn = 3.99;
			var wijnPrice = wijn * orderWijn;
			document.write("<p>Wijn: " + orderWijn + "<br>" + wijnPrice + "</p>");

		} else if (order1 == "bier") {
			var orderBier = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling");
			var bier = 3.99;
			var bierPrice = bier * orderBier;
			document.write("<p>Bier: " + orderBier + "<br>" + bierPrice + "</p>");

		} else if (order1 == "stop") { 
			var totalprice = orderFris + orderWijn + orderBier;
			document.write(totalprice);
			return;
		}

	order();
}

order();
