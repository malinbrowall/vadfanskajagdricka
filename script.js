//Tags som används: 7,8,16,19,22,23,24,25


//global variabel som sparar alla kombinationer
var SaveAll = []; 

//När sidan laddas i webbläsaren körs ajax-anropet med GET metoden
$(document).ready(function (){
        
        $.ajax({
		method: 'GET',
        //I endpointen skickar vi med parametrar som filtrerar så att de bara hämtas produkter som är av typ öl, vin och cider
        url: 'https://karlroos-systemet.p.mashape.com/product?order_by=name&tag=25%2C7%2C8%2C16%2C19%2C22%2C23%2C24%2C',
        headers: {'X-Mashape-Key': 'OZ9i1HXl2Hmshk5RuUK0N983D9GXp1MsAFnjsnpdlRfMKb7V6F', 'Accept': 'application/json'},
		
        
        }).done(function(data){
		
		//hämtar ut all data och sparar den
		AllData = data;
              

//funktion som körs när man klickar på knappen "sök"
$('.btn').click(function (){
	
		//hämtar elementet "drink"
		var x = document.getElementById('drink');
		//skapar en randomfunktion som går mellan alla 0-49 objekt
		var num = Math.floor((Math.random() * 49) + 1);
    
        //hämtar och sparar maträtten som användaren skrev in
        var input = document.getElementById('input').value;
        
    
        //variabel som sparar vilken typ utav dryck det är, används sedan till att matchas med en bild
        var type = (data[num].tags[0].name);
        

		x.innerHTML = "Du kan väl för fan dricka lite " + "<strong>" + data[num].name + "</strong>" + " till " + input + "</br></br>" + data[num].name + " är ifrån " + data[num].country.name + " och kostar " + data[num].price + " kr på systembolaget </br>FAN VAD GOTT! <button class='save-btn'> Favorit </button>";
        //Beroende på vad "var type" får för värde(name) så visas ikonen kopplat till det värdet.
        //Inte världens snyggaste lösning men den funkar. Bilden visas och försvinner vid nästa sö
        //Var typ kan få 8 olika värden från vårt api anropp.
        if (type == 'beer') {
            document.getElementById("icon").style.display = 'block'
        } else {
            document.getElementById("icon").style.display = 'none'
        };
        if (type == 'red-wine'){
            document.getElementById("icon2").style.display = 'block'
        } else {
            document.getElementById("icon2").style.display = 'none'
        };
        if (type == 'wine'){
            document.getElementById("icon3").style.display = 'block'
        } else {
            document.getElementById("icon3").style.display = 'none'
        }; 
        if (type == 'rose'){
            document.getElementById("icon4").style.display = 'block'
        } else {
            document.getElementById("icon4").style.display = 'none'
        };
        if (type == 'cider'){
            document.getElementById("icon5").style.display = 'block'
        } else {
            document.getElementById("icon5").style.display = 'none'
        };
        if (type == 'lager'){
            document.getElementById("icon6").style.display = 'block'
        } else {
            document.getElementById("icon6").style.display = 'none'
        }
        if (type == 'white-wine'){
            document.getElementById("icon7").style.display = 'block'
        } else {
            document.getElementById("icon7").style.display = 'none'
        };
        if (type == 'sparkling'){
            document.getElementById("icon8").style.display = 'block'
        } else {
            document.getElementById("icon8").style.display = 'none'
        }

    //sparar i localstorage om användaren klickar på save knappen
    $('.save-btn').on('click', function (){
        var saveDrink = data[num].name;
        var saveKategori = type;
        var saveFood = input;

        
        SaveAll.push({saveDrink,saveFood, saveKategori});
        var JSONFavorit = JSON.stringify(SaveAll);
        localStorage.setItem("Favorit", JSONFavorit);
        
		alert("Nu är din favorit kombination sparad");



        }); //stänger save-click
		
	}); //end klick-event
	
}); //stänger "done"functionen
	
          
     
    //körs nu när testknappen "se sparade" klickas på, i combo.html
    $('.se-saved').click(function (){
    //hämtar från localstorage
    var favoriter = JSON.parse(localStorage.getItem("Favorit"));
	//printar ut listan för de sparade mat och dryckes kombinationerna
	for (i = 0; i < favoriter.length; i++){
		var dryck = favoriter[i].saveDrink;
		var mat = favoriter[i].saveFood;
        var kate = favoriter[i].saveKategori;
		$("#fave").append("<p>Dryck: " + kate + ". Namn: " + dryck + ". Mat: " + mat +"</p>");
		$('.se-saved').hide();
	}
	});

}); //stänger hela dokument.ready funktion

