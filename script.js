//Tags som används: 7,8,16,19,22,23,24,25

//anropar API:et systemetapi genom ajax. hämtar ut alla  olika typer av drickor, i JSON format. 
$(document).ready(function(){
	})
		$.ajax({
		method: 'GET',
        url: 'https://karlroos-systemet.p.mashape.com/product?order_by=name&tag=25%2C7%2C8%2C16%2C19%2C22%2C23%2C24%2C',
        headers: {'X-Mashape-Key': 'OZ9i1HXl2Hmshk5RuUK0N983D9GXp1MsAFnjsnpdlRfMKb7V6F', 'Accept': 'application/json'},
		
	}).done(function(data){
		
		//hämtar ut all data, skriver ut de i konsollen
		
		AllData = data;
		

		var x = document.getElementById("drink")
		var num = Math.floor((Math.random() * 49) + 1);
		x.innerHTML = "Drick lite: " + data[num].name + " till det. Den kostar bara " + data[num].price + "kr på systembolaget, och är ifrån " + data[num].country.name + ". FAN VAD GÖTTT";
		
	});

