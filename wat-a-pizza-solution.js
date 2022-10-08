let menu = [
    {
        'category': 'Beverages',
        'name': 'Coke',
        'price': 1.5
    },
    {
        'category': 'Starters',
        'name': 'Garlic Bread',
        'price': 2.8
    },
    {
        'category': 'Starters',
        'name': 'Mozzarella Sticks',
        'price': 5.5
    },
    {
        'category': 'Main Meal',
        'name': 'Medium Size Margherita Pizza',
        'price': 11
    },
    {
        'category': 'Beverages',
        'name': 'Iced Tea',
        'price': 1.25
    },
    {
        'category': 'Starters',
        'name': 'Greek Wedge Salad',
        'price': 4.5
    },
    {
        'category': 'Main Meal',
        'name': 'Veg Family Meal',
        'price': 13.25
    },
    {
        'category': 'Main Meal',
        'name': 'Large Size Vegan Pepperoni Pizza',
        'price': 14.5
    },
]
const order = {
    'items': [
        {
            'name': 'Mozzarella Sticks',
            'price': 5.5,
            'quantity': 2
        },
        {
            'name': 'Garlic Bread',
            'price': 2.8,
            'quantity': 2
        },
        {
            'name': 'Coke',
            'price': 1.5,
            'quantity': 3
        },
        {
            'name': 'Medium Size Margherita Pizza',
            'price': 11,
            'quantity': 2
        },
        {
            'name': 'Iced Tea',
            'price': 1.25,
            'quantity': 1
        },
        {
            'name': 'Veg Family Meal',
            'price': 13.25,
            'quantity': 2
        },
    ]
};

//Write function to filter menu items by Category and sort them alphabetically
var FilterItems;
function sortByCategory(arr, Category) {
     FilterItems = arr.filter(items => items.category == Category)
        .sort((a, b) => {
            if (a.name < b.name)
                return -1;
            else if (a.name > b.name)
                return 1
            else
                return 0;
        })
    //console.log(FilterItems);
    return FilterItems;
    //let sortItems=FilterItems.sort();

}

sortByCategory(menu, "Beverages");
sortByCategory(menu, "Starters");
sortByCategory(menu, "Main Meal");



//Write function to calculate the amount of each ordered item
var calculate;
function calculateAmount(order) {

    //let amountCal=0;
    calculate = order.map(items => {

        return (items.price) * (items.quantity);
    })

}
calculateAmount(order.items);
//console.log("Calculated Amount Of Each Order : $ "+calculate);

//Write function to calculate the subtotal amount for the main meal ordered

let mainMenuTotal;
function calculateMainMealAmount() {

    sortByCategory(menu,"Main Meal")

    mainMenuTotal=order.items.filter(items=>{
        let temp=0;
        FilterItems.forEach(element=>{
            if(element.name===items.name){
                temp=1;
            }
        });
        if(temp==1){
            return true
        }
    }).reduce(function(accumulator,currentValue){
        return accumulator+(currentValue.price)*(currentValue.quantity);

    },0);

}
calculateMainMealAmount();
//console.log("Main Meal Total Amount : "+ mainMenuTotal);

//Write function to find the totalAmount of the order based on the calculated mainMealAmount value
let sum = 0; 
var TotalAmount;
var cokeAmount;
function calculateTotalAmount(orderAmount, mainMealAmount){
/*Go through each item in the array and execute this function which adds
each item to sum 
*/
  orderAmount.forEach(item => {
    sum += item;
  });

    if(mainMealAmount>40){

        order.items.map(items=>{
            if(items.name=='Coke'){
                //cokeAmount=(items.price) * (items.quantity);
                cokeAmount=items.price;
                TotalAmount=sum-cokeAmount;
                return TotalAmount;
            }

        })
    
    }
    else {
        console.log(sum);
        return sum;
    }       
}



//Write function to calculate the final amount after discount
var FinalAmount;
function calculatedFinalAmount(totalAmount, discount){

    if(totalAmount>50){

    FinalAmount=totalAmount-((totalAmount/100)*discount);
    return FinalAmount;
}
else{
    return totalAmount;
}
}
//Write function to display the total amount
calculateTotalAmount(calculate,mainMenuTotal);
console.log("Total Amount payable:                $ "+TotalAmount);
//Write function to display the final amount
calculatedFinalAmount(TotalAmount,5);
console.log("Final Amount payable after discount: $ "+FinalAmount);
//Invoke  functions 


