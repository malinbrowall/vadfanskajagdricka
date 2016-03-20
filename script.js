//Tags som används: 7,8,16,19,22,23,24,25

//När sidan laddas i webbläsaren körs ajax-anropet med GET metoden
$(document).ready(function(){
        
        $.ajax({
		method: 'GET',
        //I endpointen skickar vi med parametrar som filtrerar så att de bara hämtas produkter som är av typ öl, vin och cider
        url: 'https://karlroos-systemet.p.mashape.com/product?order_by=name&tag=25%2C7%2C8%2C16%2C19%2C22%2C23%2C24%2C',
        headers: {'X-Mashape-Key': 'OZ9i1HXl2Hmshk5RuUK0N983D9GXp1MsAFnjsnpdlRfMKb7V6F', 'Accept': 'application/json'},
		
        
        }).done(function(data){
		
		//hämtar ut all data.
		//sparar all data
		AllData = data;
               
                  
                                        
                 

//funktion som körs när man klickar på knappen "sök"
$('.btn').click(function(){
	//anropar API:et systemetapi genom ajax. hämtar ut alla, i JSON format. 
		
	
		
		//hämtar elementet "drink"
		var x = document.getElementById("drink");
		//skapar en randomfunktion som går mellan alla 0-49 objekt
		var num = Math.floor((Math.random() * 49) + 1);
    
        //hämtar och sparar maträtten som användaren skrev in
        var input = document.getElementById("input").value;
        console.log(" vad gött med " + input);

    
        //variabel som sparar vilken typ det är 
        //DETTA KAN NOG VARA BRA FÖR DIG ATT ANVÄNDA SIMON!!!!!!!!!!!!!!!!!!!! SSIIIIMON!!
        var type = (data[num].tags[0].name);
        console.log(type);
		
		x.innerHTML = "Till "+ input + " rekommenderar vi " + data[num].name + ". Den kostar bara " + data[num].price + "kr på systembolaget, och är ifrån " + data[num].country.name + ". FAN VAD GÖTTT";
        //lägger till detta på elementet "drink" som heter x
		x.innerHTML = "Till "+ input + " rekommenderar vi " + data[num].name + ". Den kostar bara " + data[num].price + "kr på systembolaget, och är ifrån " + data[num].country.name + ". FAN VAD GÖTTT <button class='save-btn'> Favorit </button>";
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
            document.getElementById('icon4').style.display = 'block'
        } else {
            document.getElementById('icon4').style.display = 'none'
        };
        if (type == 'cider'){
            document.getElementById('icon5').style.display = 'block'
        } else {
            document.getElementById('icon5').style.display = 'none'
        };
        if (type == 'lager'){
            document.getElementById('icon6').style.display = 'block'
        } else {
            document.getElementById('icon6').style.display = 'none'
        }
        if (type == 'white-wine'){
            document.getElementById('icon7').style.display = 'block'
        } else {
            document.getElementById('icon7').style.display = 'none'
        };
        if (type == 'sparkling'){
            document.getElementById('icon8').style.display = 'block'
        } else {
            document.getElementById('icon8').style.display = 'none'
        };

        //sparar i localstorage om användaren klickar på save knappen
        $(document).on('click', '.save-btn', function(){
        alert("Nu är din favorit kombination sparad");
        var saveDrink = data[num].name;
        var saveFood = input;

        var SaveAll = [];
        SaveAll.push({saveDrink,saveFood});
        var JSONFavorit = JSON.stringify(SaveAll);
        localStorage.setItem("Favorit", JSONFavorit);
        console.log(SaveAll);



        }); //stänger save-click

		
	}); //end klick-event
	}); //stänger "done"functionen
	
            

    
     
    //körs nu när testknappen "se sparade" klickas på, i combo.html
    $('.se-saved').click(function(){
    //hämtar från localstorage
    var favoriter = JSON.parse(localStorage.getItem("Favorit"));
    console.log(favoriter);
    $("#fave").append("<p> Dryck: " + favoriter[0].saveDrink + ". Mat: " + favoriter[0].saveFood + ".</p>"); 
    });

}); //stänger hela dokument.ready funktion

