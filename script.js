//Tags som används: 7,8,16,19,22,23,24,25

//funktion som körs när man klickar på knappen "sök"
$('.btn').click(function(){
	//anropar API:et systemetapi genom ajax. hämtar ut alla, i JSON format. 
		$.ajax({
		method: 'GET',
        url: 'https://karlroos-systemet.p.mashape.com/product?order_by=name&tag=25%2C7%2C8%2C16%2C19%2C22%2C23%2C24%2C',
        headers: {'X-Mashape-Key': 'OZ9i1HXl2Hmshk5RuUK0N983D9GXp1MsAFnjsnpdlRfMKb7V6F', 'Accept': 'application/json'},
		
	}).done(function(data){
		
		//hämtar ut all data.
		AllData = data;
		
		//hämtar elementet "drink"
		var x = document.getElementById("drink")
		//skapar en randomfunktion som går mellan alla 0-49 objekt
		var num = Math.floor((Math.random() * 49) + 1);
		
		x.innerHTML = "Drick lite: " + data[num].name + " till det. Den kostar bara " + data[num].price + "kr på systembolaget, och är ifrån " + data[num].country.name + ". FAN VAD GÖTTT";
		
	})
	});