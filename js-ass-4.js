
//1--->square of a number
//take input from user

let num=prompt("Enter a number");
let square=num*num;
document.write(square)


//2--->square root of a number

let num2=prompt("Enter a number");
let sqrt=Math.sqrt(num2);
document.write(sqrt)

//3--->Copy all element in one array to another

let arr1=[1,2,3,4,5];
let arr2=[6,7];

let newarr=arr1.concat(arr2);
document.write(" "+ newarr)


//4---->maximum and minimum number 

let number = [23, 24, 45, 89, 2, 87]
let max = Math.max.apply(null, number);
let min = Math.min.apply(null, number);
document.write("The maximum num is:" + max + "<br>" + "The minimum num is:" + min)


//5---->count negative number in the array

var array = [1, -5, 9, -3, -4, 5, 6, 7]
var neg_count = 0;

for (let i = 1; i < array.length; i++)
{
    if (array[i] < 0)
        neg_count++;
}
document.write(`The negative number in the array is:${neg_count}` + "<br>")

//6---->sum of all even number

let sum=0;
let n=prompt("Enter the value of n")
for(let i=1;i<=n;i++)
if(i%2==0)
sum=sum+i;
document.write(sum);


//7---->count duplicate number in array
var count = {};
var sampleArray = [1,2,5,2,2,3,,3,4];
sampleArray.forEach(function (element) { count[element] = (count[element] || 0) + 1; });
document.write(count)

