var itemList = ["pencil", "mechanical pencil", "notebook", "spiral notebook", "ballpoint pen", "sharpie"];
var priceList = [0.25, 1.50, 0.75, 1.25, 1.00, 2.25];
var userCart = "";
var userTotal = 0;
var item;
var itemPrice;

var userContinue = true;

function generateList() {    
	for (var i=0; i < itemList.length; i++) {

    	var listEl = document.getElementById("list");
    	listEl.insertAdjancentHTML('afterend', "<tr><td>" + itemList[i] + "</td><td>" + "$" + priceList[i] + "</td><td>" + "");	    		
	}
    	
	generateList();
	var btn = document.createElement("BUTTON");
	btn.innerText = "Add to Cart";
}
  
   ("Please click on an item to add it to your cart."); 



//} while (userContinue);
//alert("Welcome " + name);
