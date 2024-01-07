function CakeObject(id, name, description, ingredients, serving_sizes, price, allergens,count) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
    this.serving_sizes = serving_sizes;
    this.allergens = allergens;
    this.count = count;
  }
  
  
  
  let cakelis = [];
  
  
  //Creating and pushing all cake objects into cake lis
  cakelis.push(new CakeObject(1, "Strawberry Shortcake", "Light sponge cake layered with fresh strawberries and whipped cream.", "Cake flour, sugar, eggs, butter, strawberries, heavy cream", "12 servings", "38",["Wheat", "Dairy", "Eggs"],0));
  cakelis.push(new CakeObject(2, "Chocolate Fudge Cake", "Rich and moist chocolate cake layered with decadent fudge frosting.", "Flour, sugar, cocoa powder, eggs, butter, milk, vanilla extract", "12 servings", "40",["Wheat", "Dairy", "Eggs"],0));
  cakelis.push(new CakeObject(3,	"Red Velvet Cake",	"A classic with a velvety texture, topped with cream cheese frosting.", "All-purpose flour, cocoa powder, buttermilk, vinegar, red food coloring, cream cheese, butter", "10 servings","35",["Wheat", "Dairy", "Eggs"],0));
  cakelis.push(new CakeObject(4, "Lemon Blueberry Cake", "Light lemon-flavored cake studded with fresh blueberries, finished with lemon glaze.", "Cake flour, baking powder, sugar, eggs, butter, lemon zest, blueberries", "8 servings", "45",["Wheat", "Dairy", "Eggs"],0));
  cakelis.push(new CakeObject(5, "Carrot Cake", "Moist carrot cake with walnuts and raisins, covered in cream cheese icing.", "Carrots, flour, sugar, eggs, vegetable oil, cinnamon, cream cheese, nuts", "14 servings", "50",["Wheat", "Dairy", "Eggs", "Nuts"],0));
  cakelis.push(new CakeObject(6, "Tiramisu Cake", "Italian-inspired cake with layers of coffee-soaked sponge and mascarpone cream.", "Ladyfingers, espresso, cocoa powder, eggs, sugar, mascarpone cheese", "10 servings", "55",["Wheat", "Dairy", "Eggs"],0));
  cakelis.push(new CakeObject(7, "Black Forest Cake", "Chocolate cake layered with cherries and whipped cream, topped with chocolate shavings.", "Chocolate cake, cherries, whipped cream, chocolate shavings", "10 servings", "42",["Wheat", "Dairy", "Eggs"],0));
  cakelis.push(new CakeObject(8, "Vanilla Bean Cake", "Classic vanilla cake with real vanilla bean specks, frosted with vanilla buttercream.", "All-purpose flour, sugar, eggs, butter, vanilla bean, baking powder", "8 servings", "30",["Wheat", "Dairy", "Eggs"],0));
  cakelis.push(new CakeObject(9, "Coconut Cream Cake", "Moist coconut-flavored cake filled with coconut pastry cream, topped with shredded coconut.", "Coconut milk, shredded coconut, flour, sugar, eggs, butter", "10 servings", "48",["Wheat", "Dairy", "Eggs", "Nuts"],0));
  cakelis.push(new CakeObject(10, "Pistachio Rose Cake", "Delicate pistachio-flavored cake layers with rosewater-infused frosting.", "Pistachios, rosewater, flour, sugar, eggs, butter, cream", "8 servings", "50",["Wheat", "Dairy", "Nuts"],0));
  cakelis.push(new CakeObject(11, "Oreo Cheesecake", "Creamy cheesecake with a chocolate Oreo crust, topped with crushed Oreo cookies.", "Oreo cookies, cream cheese, sugar, eggs, butter, vanilla extract", "12 servings", "55",["Wheat", "Dairy", "Eggs"],0));
  cakelis.push(new CakeObject(12, "Pineapple Upside-Down Cake", "Caramelized pineapple rings atop a buttery yellow cake.", "Pineapple, brown sugar, maraschino cherries, flour, sugar, eggs", "10 servings", "40",["Wheat", "Dairy", "Eggs"],0));
  cakelis.push(new CakeObject(13, "Mint Chocolate Chip Cake", "Mint-flavored cake with chocolate chips, layered with mint buttercream.", "Mint extract, chocolate chips, flour, sugar, eggs, butter", "8 servings", "45",["Wheat", "Dairy", "Eggs", "Nuts"],0));
  cakelis.push(new CakeObject(14, "Almond Joy Cake", "Chocolate cake with coconut and almond layers, covered in chocolate ganache.", "Almonds, coconut, chocolate ganache, flour, sugar, eggs, butter", "12 servings", "52",["Wheat", "Dairy", "Nuts", "Coconut"],0));
  cakelis.push(new CakeObject(15, "Raspberry Almond Torte", "Almond-flour-based cake with layers of raspberry jam and almond cream.", "Almond flour, raspberries, sugar, eggs, butter, almond extract", "10 servings", "48",["Nuts", "Dairy", "Eggs"],0));
  cakelis.push(new CakeObject(16, "Hummingbird Cake", "Southern classic with bananas, pineapples, and pecans, topped with cream cheese frosting.", "Bananas, pineapples, pecans, flour, sugar, eggs, cream cheese", "14 servings", "45",["Wheat", "Dairy", "Nuts"],0));
  cakelis.push(new CakeObject(17, "Mocha Hazelnut Cake", "Coffee and hazelnut-infused cake layers with mocha buttercream.", "Hazelnuts, coffee, chocolate, flour, sugar, eggs, butter", "8 servings", "50",["Wheat", "Dairy", "Nuts", "Chocolate"],0));
  cakelis.push(new CakeObject(18, "Blueberry Lemon Bundt Cake", "Moist bundt cake with bursts of blueberries and a lemon glaze.", "Blueberries, lemon zest, flour, sugar, eggs, butter", "12 servings", "35",["Nuts", "Dairy", "Eggs"],0));
  cakelis.push(new CakeObject(19, "Pumpkin Spice Cake", "Fall-inspired cake with pumpkin, spices, and cream cheese frosting.", "Pumpkin puree, cinnamon, nutmeg, cream cheese, flour, sugar", "10 servings", "40",["Nuts", "Dairy", "Eggs", "Spices"],0));
  cakelis.push(new CakeObject(20, "Caramel Apple Cake", "Spiced apple cake layers with caramel sauce and cream cheese frosting.", "Apples, caramel sauce, cinnamon, flour, sugar, cream cheese", "12 servings", "48",["Nuts", "Dairy", "Eggs", "Spices", "Fruits"],0));
  




function CreateCake(cake) {
    // Creating Main Box to Hold Info
    var cakediv = document.createElement('div');
    cakediv.className = 'cart-container';



    // Adding all the information
    var img = document.createElement('img');
    img.src = 'Pics/Cakes/' + cake.id + '.jpg';
    img.id = 'item-img';
    cakediv.appendChild(img);




    var details = document.createElement('div');

    details.className = "Cart-item-details"

    var name = document.createElement('h2');

    name.textContent = cake.name;
    details.appendChild(name);

    var price = document.createElement('p');
    price.id = 'price';
    price.textContent = '$' + cake.price;
    details.appendChild(price);

    cakediv.appendChild(details);


    //Button that adds and substracts the amount 
    // of cakes 
    var amountButton = document.createElement('div');
    amountButton.className = 'flex-container';
    amountButton.id = 'counter';


    var decrement = document.createElement('button');
    decrement.onclick = function() {
        if (cake.count>0){
            cake.count--;
            CounterUpdate(cake);
        }
    };
    decrement.textContent = "-";
    amountButton.appendChild(decrement);



    var amount = document.createElement('div');
    amount.textContent = cake.count;
    amount.id = "counter" + cake.id;
    amount.ClassName = "Counter-Value-Cart"
    amountButton.appendChild(amount);


    var increment = document.createElement('button');
    increment.onclick = function() {
        cake.count++;
        CounterUpdate(cake);
    };
    increment.textContent = "+";
    amountButton.appendChild(increment);


    cakediv.appendChild(amountButton);



    return cakediv;
}
  
// Append the HTML elements to the "item-container" section
var itemContainer = document.getElementById('cart-container');
for (let i = 0; i < cakelis.length;i++){
    var cakeElement = CreateCake(cakelis[i]);
    itemContainer.appendChild(cakeElement);
    itemContainer.appendChild(document.createElement('br'));
    console.log("Created one cake");
}


function CounterUpdate(cake) {
    // Update the counter element for the specific cake
    var counterElement = document.getElementById('counter' + cake.id);
    counterElement.innerText = cake.count;
}


// Title of the Order Showcase box
function orderTitle(){
    var orderTitle = document.createElement('table');
    orderTitle.className = "order-container";

    var nameHeader = document.createElement('th');
    nameHeader.textContent = "Name";
    orderTitle.appendChild(nameHeader);

    var priceHeader = document.createElement('th');
    priceHeader.textContent = "Price";
    orderTitle.appendChild(priceHeader);

    var quantityHeader = document.createElement('th');
    quantityHeader.textContent = "Quantity";
    orderTitle.appendChild(quantityHeader);

    var totalHeader = document.createElement('th');
    totalHeader.textContent = "Total";
    orderTitle.appendChild(totalHeader);

    return orderTitle;


}
// Reads whicih amount elements have more than 0 and
// shows and calculates the price
function activateOrder(){
    var order = document.getElementById("calculation");

    while (order.firstChild) {
        order.removeChild(order.firstChild);
    }

    var title = orderTitle();
    order.appendChild(title);
    

    var total = 0;


    for (let i = 0; i < cakelis.length;i++){
        
        if (cakelis[i].count > 0){
            
            total += (cakelis[i].count * cakelis[i].price);

            var orderElement = showOrder(cakelis[i]);
            order.appendChild(orderElement);

            console.log("Added cake to order");
            console.log(total);
        }
    }

    var showTotal = document.createElement('div');
    showTotal.className = 'finaltotal';

    var showTotalHeader = document.createElement('p');
    showTotalHeader.className = 'finaltotal';
    var showTotalValue = document.createElement('p');
    showTotalValue.className = 'finaltotal';
    
    showTotalHeader.textContent = "Final Total";

    showTotalValue.textContent = "$" + total;


    showTotal.appendChild(showTotalHeader);
    showTotal.appendChild(showTotalValue);
    order.appendChild(showTotal);


    
}

function showOrder(cake){
    var order = document.createElement('table');
    order.className = "order-container";



    var name = document.createElement('td');
    name.textContent = cake.name;
    order.appendChild(name);
    

    var price = document.createElement('td');
    price.textContent = '$' + cake.price;

    order.appendChild(price);
    console.log("works");

    var count = document.createElement('td');
    count.textContent = cake.count;

    order.appendChild(count);

    var total = document.createElement('td');
    let totalprice = cake.count * cake.price;
    total.textContent = '$' + totalprice;
    order.appendChild(total);



    return order;


}
