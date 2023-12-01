function CakeObject(id, name, description, ingredients, serving_sizes, price) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.price = price;
  this.ingredients = ingredients;
  this.serving_sizes = serving_sizes;
}



let cakelis = [];


//Creating and pushing all cake objects into cake lis
cakelis.push(new CakeObject(1, "Strawberry Shortcake", "Light sponge cake layered with fresh strawberries and whipped cream.", "Cake flour, sugar, eggs, butter, strawberries, heavy cream", "12 servings", "$38"))
cakelis.push(new CakeObject(2, "Chocolate Fudge Cake", "Rich and moist chocolate cake layered with decadent fudge frosting.", "Flour, sugar, cocoa powder, eggs, butter, milk, vanilla extract", "12 servings", "$40"))
cakelis.push(new CakeObject(3,	"Red Velvet Cake",	"A classic with a velvety texture, topped with cream cheese frosting.", "All-purpose flour, cocoa powder, buttermilk, vinegar, red food coloring, cream cheese, butter", "10 servings","$35"))
cakelis.push(new CakeObject(4, "Lemon Blueberry Cake", "Light lemon-flavored cake studded with fresh blueberries, finished with lemon glaze.", "Cake flour, baking powder, sugar, eggs, butter, lemon zest, blueberries", "8 servings", "$45"));
cakelis.push(new CakeObject(5, "Carrot Cake", "Moist carrot cake with walnuts and raisins, covered in cream cheese icing.", "Carrots, flour, sugar, eggs, vegetable oil, cinnamon, cream cheese, nuts", "14 servings", "$50"));
cakelis.push(new CakeObject(6, "Tiramisu Cake", "Italian-inspired cake with layers of coffee-soaked sponge and mascarpone cream.", "Ladyfingers, espresso, cocoa powder, eggs, sugar, mascarpone cheese", "10 servings", "$55"));
cakelis.push(new CakeObject(7, "Black Forest Cake", "Chocolate cake layered with cherries and whipped cream, topped with chocolate shavings.", "Chocolate cake, cherries, whipped cream, chocolate shavings", "10 servings", "$42"));
cakelis.push(new CakeObject(8, "Vanilla Bean Cake", "Classic vanilla cake with real vanilla bean specks, frosted with vanilla buttercream.", "All-purpose flour, sugar, eggs, butter, vanilla bean, baking powder", "8 servings", "$30"));
cakelis.push(new CakeObject(9, "Coconut Cream Cake", "Moist coconut-flavored cake filled with coconut pastry cream, topped with shredded coconut.", "Coconut milk, shredded coconut, flour, sugar, eggs, butter", "10 servings", "$48"));
cakelis.push(new CakeObject(10, "Pistachio Rose Cake", "Delicate pistachio-flavored cake layers with rosewater-infused frosting.", "Pistachios, rosewater, flour, sugar, eggs, butter, cream", "8 servings", "$50"));
cakelis.push(new CakeObject(11, "Oreo Cheesecake", "Creamy cheesecake with a chocolate Oreo crust, topped with crushed Oreo cookies.", "Oreo cookies, cream cheese, sugar, eggs, butter, vanilla extract", "12 servings", "$55"));
cakelis.push(new CakeObject(12, "Pineapple Upside-Down Cake", "Caramelized pineapple rings atop a buttery yellow cake.", "Pineapple, brown sugar, maraschino cherries, flour, sugar, eggs", "10 servings", "$40"));
cakelis.push(new CakeObject(13, "Mint Chocolate Chip Cake", "Mint-flavored cake with chocolate chips, layered with mint buttercream.", "Mint extract, chocolate chips, flour, sugar, eggs, butter", "8 servings", "$45"));
cakelis.push(new CakeObject(14, "Almond Joy Cake", "Chocolate cake with coconut and almond layers, covered in chocolate ganache.", "Almonds, coconut, chocolate ganache, flour, sugar, eggs, butter", "12 servings", "$52"));
cakelis.push(new CakeObject(15, "Raspberry Almond Torte", "Almond-flour-based cake with layers of raspberry jam and almond cream.", "Almond flour, raspberries, sugar, eggs, butter, almond extract", "10 servings", "$48"));
cakelis.push(new CakeObject(16, "Hummingbird Cake", "Southern classic with bananas, pineapples, and pecans, topped with cream cheese frosting.", "Bananas, pineapples, pecans, flour, sugar, eggs, cream cheese", "14 servings", "$45"));
cakelis.push(new CakeObject(17, "Mocha Hazelnut Cake", "Coffee and hazelnut-infused cake layers with mocha buttercream.", "Hazelnuts, coffee, chocolate, flour, sugar, eggs, butter", "8 servings", "$50"));
cakelis.push(new CakeObject(18, "Blueberry Lemon Bundt Cake", "Moist bundt cake with bursts of blueberries and a lemon glaze.", "Blueberries, lemon zest, flour, sugar, eggs, butter", "12 servings", "$35"));
cakelis.push(new CakeObject(19, "Pumpkin Spice Cake", "Fall-inspired cake with pumpkin, spices, and cream cheese frosting.", "Pumpkin puree, cinnamon, nutmeg, cream cheese, flour, sugar", "10 servings", "$40"));
cakelis.push(new CakeObject(20, "Caramel Apple Cake", "Spiced apple cake layers with caramel sauce and cream cheese frosting.", "Apples, caramel sauce, cinnamon, flour, sugar, cream cheese", "12 servings", "$48"));


function CreateCake(cake) {
  var div = document.createElement('div');
  div.className = 'cake-category-item';

  var img = document.createElement('img');
  img.src = 'Pics/Cakes/' + cake.id + '.jpg';
  img.id = 'item-img';
  div.appendChild(img);
  div.appendChild(document.createElement('br'));

  var a = document.createElement('a');
  a.id = 'name';
  a.href = 'Item.html';
  a.dataset.customValue = cake.id;
  a.onclick = passObjectData;
  a.textContent = cake.name;
  div.appendChild(a);

  var pPrice = document.createElement('p');
  pPrice.id = 'price';
  pPrice.textContent = '$' + cake.price;
  div.appendChild(pPrice);


  return div;
        }

// Append the HTML elements to the "item-container" section
var itemContainer = document.querySelector('.category-item-container');
for (let i = 0; i < cakelis.length;i++){
  var cakeElement = CreateCake(cakelis[i]);
  itemContainer.appendChild(cakeElement);
  console.log("Created one cake");
}

// Chaing the item links so the the item.html can show the intended cakes's information

function passObjectData(event) {
    event.preventDefault();
  

    var customValue = event.target.dataset.customValue;


    // Serialize the object as JSON string
    var id = JSON.stringify(customValue);

    // Append the serialized object data as a query parameter to the URL
    var link = event.target;
    link.href = link.href + '?CakeId=' + encodeURIComponent(id);
  
    // Navigate to the TestJS.html page
    window.location.href = link.href;
}






