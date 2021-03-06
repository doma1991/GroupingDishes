function groupingDishes(dishes) {

let dishArr = [];
dishes.map(arr => {
  dishArr.push(arr[0]);
  arr.shift();
})

//Returns duplicates in array
let flatDishes = dishes.reduce(function(a, b){
     return a.concat(b);
}, []);
const arrWithoutDuplicates = [...new Set(flatDishes)]
let duplicates = [...flatDishes]
arrWithoutDuplicates.forEach((item) => {
  const i = duplicates.indexOf(item)
  duplicates = duplicates
    .slice(0, i)
    .concat(duplicates.slice(i + 1, duplicates.length))
})
let cleaned = [...new Set(duplicates)].sort();

let grouped = [];
cleaned.forEach(v => {
  let tmp = [];
  for (let i = 0; i < dishes.length; i++) {
    if (dishes[i].includes(v)) {
      tmp.push(dishArr[i])
    }
  }
  tmp.sort();
  tmp.unshift(v);
  grouped.push(tmp);
})

console.log(grouped);

return dishes;
}









const dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
            ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
            ["Quesadilla", "Chicken", "Cheese", "Sauce"],
            ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]
console.log(groupingDishes(dishes));