// ✅ Buy and Sell Stock – Best Time to Buy and Sell Stock (LeetCode 121)

// Goal:
// Given an array of stock prices, find the maximum profit you can achieve by buying on one day and selling on a later day.



// 📘 Problem

// You are given an array:

// prices[i] = price of stock on day i


// You must buy before you sell.

// Return the maximum profit (or 0 if no profit is possible).


// function maxProfit(prices){
//     let minPrice = Infinity;
//     let maxProfit = 0;


//     for(let i = 0 ; i < prices.length ; i++){
//         let price = prices[i];

//         if(preic < minPrice){
//             minPrice = price;
//         }

//         let profit = price - minPrice;

//         if(profit > maxProfit){
//             maxProfit = profit;
//         }
//     }
//     return maxProfit;
// }




function maxProfit(prices){
    let minPrice = prices[0];
    let maxProfit = 0;


    for(let i = 0; i<prices.length; i++){

        let price = prices[i];
        if(price < minPrice){
            minPrice = price;
        }

        let profit = price - minPrice;

        if(profit > maxProfit){
            maxProfit = profit;
        }
    }
    return maxProfit;
}

let arr = [7,1,5,3,6,4];

console.log(maxProfit(arr))

