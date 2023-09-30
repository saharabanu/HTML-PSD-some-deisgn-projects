// Problem -  ১. বাজেট ক্যালকুলেটর 
// আপনাকে মিনিমাম তিনটি ভ্যালু একটি ফাঙ্কশন এ রিসিভ করতে হবে | নিশ্চিত হতে হবে তিনটি ভ্যালু এ নম্বর । যদি কেউ স্ট্রিং অথবা অন্য যেকোনো ডাটা টাইপ পাস করলে একটি এরর শো করবে । অন্যতায় আউটপুট দেখাবে । 
// মূল ককাজটা হচ্চে যদি কেউ দোকান থেকে এই ৩ টি প্রোডাক্ট কিনে তাহলে টোটাল প্রাইস দেখাবে । 
// তিনটি প্রোডাক্ট এর দাম: 
// ১.Computer: 1000
// ২.Watch: 260
// ৩.Coffee: 50

function totalPriceCalculate(computer, watch, coffee) {

    if (typeof computer == "number" && typeof watch == "number" && typeof coffee == "number") {
       
        var totalPrice = computer * 1000 + watch * 260 + coffee * 50;
        
    } else {
        return ("Please Enter A Valid Number.");
    }
    return totalPrice;

}
var total= totalPriceCalculate(1,2,3);
// console.log(total);

// Problem - ২. প্রোডাক্ট সার্চ 
// একটি এরে তে অবজেক্ট আকারে কিছু প্রোডাক্ট তাকবে । আপনাকে এই এরে থেকে সার্চ করা প্রোডাক্ট খুঁজে বের করতে হবে । যদি প্রোডাক্ট টি খুঁজে পাওয়া যায় তাহলে প্রোডাক্ট দেখাবে অন্যতায় Product Not Found বলে একটি এরর শো করবে ।

 
function searchProduct(title) {

    // products array

    var products = [
        {
            id: 1,
            title: "laptop",
            price: 567,
            description: "Laptop Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
        },
        {
            id: 2,
            title: "Mobile",
            price: 367,
            description: "Mobile Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
        },
        {
            id: 3,
            title: "Watch",
            price: 180,
            description: "Watch Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
        },
        {
            id: 4,
            title: "Coffee",
            price: 40,
            description: "Coffee Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
        },
    
    ];
    
    


    if (title == "laptop") {
        return (products[0]);
    } else if (title == "mobile") {
        return (products[1]);
    } else if (title == "watch") {
        return (products[2]);
    } else if (title == "coffee") {
        return (products[3]);
    } else {
        return ('Product Not Found.')
    }
}
var product= searchProduct('mobile');
// console.log(product);

// Problem - ৩. হিডেন কোটিপতি ক্যালকুলেটর 
// এইটা হচ্চে আপনার ক্লাশ ফাইভ এ আপনি কত টাকা ইনকাম করেছেন , আজকে এর হিসাব দিতে হবে । 
// মনে করেন আপনি ক্লাস ফাইভ এ পড়ার সময় আপনাকে রেগুলার আপনার আম্মু ১০ টাকা করে খাওয়ার জন্য দিতেন কিন্তু আপনি এই টাকা না খেয়ে জমা করে রাখছেন । এখন আপনাকে এর হিসাব বের করতে হবে আপনি কত টাকা জমা করেছেন | আপনি একটি ফাঙ্কশন এ একটি সাল রিসিভ করবেন এবং আউট পুট আপনার পুরো সাল আপনি কত টাকা জমা করছেন এর 
// একটা হিসাব দিবে  |

function totalDeposit(year) {
    var totalDeposit;
    year = Number(year);

    if (year % 4 == 0) {
        return totalDeposit = 366 * 10;
    } else {
        return  totalDeposit = 365 * 10;
    }
    

}
var totalYearlyDeposite= totalDeposit(2020)
// console.log(totalYearlyDeposite);
