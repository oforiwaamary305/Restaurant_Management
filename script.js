function calculateTotal() {

    var food = document.getElementById("food").value;
    var quantity = document.getElementById("quantity").value;

    var price = 0;

    if (food == "Jollof Rice") {
        price = 20;
    }
    else if (food == "Fried Rice") {
        price = 25;
    }
    else if (food == "Pizza") {
        price = 35;
    }
    else if (food == "Burger") {
        price = 25;
    }
    else if (food == "French Fries") {
        price = 15;
    }

    var total = price * quantity;

    document.getElementById("total").innerHTML = "Total Price: GHS " + total;
}

function submitOrder() {

    var name = document.getElementById("name").value;
    var quantity = document.getElementById("quantity").value;

    if (name == "" || quantity == "") {
        alert("Please fill in all fields");
        return false;
    }

    alert("Order submitted successfully!");

    return false;
}