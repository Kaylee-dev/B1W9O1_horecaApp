function order(){
	var order1 = prompt("Welke bestelling wilt u toevoegen?");
		if (order1 == "fris") {
			var orderFris = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling");

		} else if (order1 == "wijn") {
			var orderWijn = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling");
		} else{
			var orderBier = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling");
		}
}

order();
