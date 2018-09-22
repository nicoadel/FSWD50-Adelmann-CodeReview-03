document.getElementById("btn_calc").addEventListener("click", calc_insurance_cost);



function calc_insurance_cost() {
    var customer = getData();
    if (customer.age >= 18){
    var price = calculate(customer.age, customer.country, customer.horsepower);
    console.log(price);
    print_calculation(customer.yourname, customer.age, customer.country, customer.horsepower, price);
    }
    else{
    	alert("You are too young")
    }
}

function getData() {
    var insurance = {
        yourname: '',
        age: 0,
        country: '',
        horsepower: 0
    }
    insurance.yourname = document.getElementById("name").value;
    insurance.horsepower = Number(document.getElementById("horsepower").value);
    insurance.country = document.getElementById("country").value;
    insurance.age = Number(document.getElementById("age").value);
    console.log(insurance);
    return (insurance);
}

function calculate(age, country, horsepower) {
    var insurance = 0;
    if (country == 'Austria') {
        insurance = Math.floor(horsepower * 100 / age + 50)
    }
    if (country == 'Hungary') {
        insurance = Math.floor(horsepower * 120 / age + 100)
    }
    if (country == 'Greece') {
        insurance = Math.floor(horsepower * 150 / (age + 3) + 150)
    }
    return (insurance);
}

function print_calculation(name, age, country, horsepower, price) {
    document.getElementById("result").innerHTML = name + ", the insurance cost for your age: " + age + " in " + country + " with the horsepower of: " + horsepower + " equals to:" + price + "&#x20AC;";
}