// 1. Find the maximum number in an array
function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    let answerDiv = `<div class="result">
                        <span>1.</span> Max number: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${max}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
findMax([10, 20, 5, 40, 25]);

// 2. Remove duplicates from an array
function removeDuplicates(arr) {
    let unique = [];
    for (let num of arr) {
        if (!unique.includes(num)) unique.push(num);
    }
    let answerDiv = `<div class="result">
                        <span>2.</span> Array without duplicates: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${unique}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// 3. Reverse an array
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    let answerDiv = `<div class="result">
                        <span>3.</span> Reversed array: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${reversed}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
reverseArray([10, 20, 30, 40]);

// 4. Find the second largest element
function findSecondLargest(arr) {
    let unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    let answerDiv = `<div class="result">
                        <span>4.</span> Second largest element: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${unique[1]}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
findSecondLargest([10, 20, 30, 40, 50]);

// 5. Check if an array is a subset of another
function isSubset(arr1, arr2) {
    let isSubsetResult = arr2.every(elem => arr1.includes(elem));
    let answerDiv = `<div class="result">
                        <span>5.</span> Is subset [2, 4] a subset of [1, 2, 3, 4, 5]? 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${isSubsetResult}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
isSubset([1, 2, 3, 4, 5], [2, 4]);

// 6. Reverse a string
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    let answerDiv = `<div class="result">
                        <span>6.</span> Reversed string: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${reversed}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
reverseString("hello");

// 7. Check if a string is a palindrome
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    let isPalindromeResult = str === reversed;
    let answerDiv = `<div class="result">
                        <span>7.</span> Is 'madam' a palindrome? 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${isPalindromeResult}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
isPalindrome("madam");

// 8. Count vowels in a string
function countVowels(str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if ("aeiou".includes(char)) count++;
    }
    let answerDiv = `<div class="result">
                        <span>8.</span> Vowel count in 'hello world': 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${count}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
countVowels("hello world");

// 9. Find the longest word in a string
function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longest = words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
    let answerDiv = `<div class="result">
                        <span>9.</span> Longest word: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${longest}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
findLongestWord("The quick brown fox jumps over the lazy dog");

// 10. Check if two strings are anagrams
function areAnagrams(str1, str2) {
    let s1 = str1.toLowerCase().split('').sort().join('');
    let s2 = str2.toLowerCase().split('').sort().join('');
    let answerDiv = `<div class="result">
                        <span>10.</span> Are 'listen' and 'silent' anagrams? 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${s1 === s2}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
areAnagrams("listen", "silent");

// 11. Check if a variable is an array
function isArray(variable) {
    let answerDiv = `<div class="result">
                        <span>11.</span> Is [1, 2, 3] an array? 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${Array.isArray(variable)}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
isArray([1, 2, 3]);

// 12. Convert a string to a number
function stringToNumber(str) {
    let num = parseFloat(str);
    let answerDiv = `<div class="result">
                        <span>12.</span> String '42' as a number: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${num}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
stringToNumber("42");

// 13. Check if a number is an integer
function isInteger(num) {
    let answerDiv = `<div class="result">
                        <span>13.</span> Is 42 an integer? 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${Number.isInteger(num)}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
isInteger(42);

// 14. Get the data type of a variable
function getDataType(variable) {
    let answerDiv = `<div class="result">
                        <span>14.</span> Data type of 42: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${typeof variable}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
getDataType(42);

// 15. Check if a value is null or undefined
function isNullOrUndefined(value) {
    let answerDiv = `<div class="result">
                        <span>15.</span> Is null null or undefined? 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${value === null || value === undefined}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
isNullOrUndefined(null);

// 16. Swap two numbers without using a third variable
function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    let answerDiv = `<div class="result">
                        <span>16.</span> Swapped values: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${a}, ${b}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
swap(5, 10);

// 17. Check if a number is even or odd
function isEven(num) {
    let answerDiv = `<div class="result">
                        <span>17.</span> Is 4 even? 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${num % 2 === 0 ? "Even" : "Odd"}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
isEven(4);

// 18. Find the square of a number
function square(num) {
    let answerDiv = `<div class="result">
                        <span>18.</span> Square of 5: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${num * num}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
square(5);

// 19. Use the ternary operator for conditions
function checkAge(age) {
    let answerDiv = `<div class="result">
                        <span>19.</span> Age 18: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${age >= 18 ? "Adult" : "Minor"}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
checkAge(18);

// 20. Check if a number is divisible by another
function isDivisible(num, divisor) {
    let answerDiv = `<div class="result">
                        <span>20.</span> Is 10 divisible by 2? 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${num % divisor === 0}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
isDivisible(10, 2);

// 21. Find the sum of an array
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    let answerDiv = `<div class="result">
                        <span>21.</span> Sum of array [1, 2, 3, 4, 5]: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${sum}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
sumArray([1, 2, 3, 4, 5]);

// 22. Flatten a nested array
function flattenArray(arr) {
    let answerDiv = `<div class="result">
                        <span>22.</span> Flattened array: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${arr.flat(Infinity)}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
flattenArray([1, [2, [3, 4]], 5]);

// 23. Find the frequency of elements in an array
function frequencyCounter(arr) {
    let freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    let answerDiv = `<div class="result">
                        <span>23.</span> Frequency counter: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${JSON.stringify(freq)}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
frequencyCounter([1, 2, 2, 3, 3, 3]);

// 24. Check if a string contains only digits
function isOnlyDigits(str) {
    let answerDiv = `<div class="result">
                        <span>24.</span> Does '12345' contain only digits? 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${/^\d+$/.test(str)}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
isOnlyDigits("12345");

// 25. Capitalize the first letter of each word in a string
function capitalizeWords(sentence) {
    let answerDiv = `<div class="result">
                        <span>25.</span> Capitalized sentence: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
capitalizeWords("hello world from javascript");

// 26. Find the intersection of two arrays
function arrayIntersection(arr1, arr2) {
    let result = [];
    for (let elem of arr1) {
        if (arr2.includes(elem)) result.push(elem);
    }
    let answerDiv = `<div class="result">
                        <span>26.</span> Intersection of arrays: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${result}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
arrayIntersection([1, 2, 3, 4], [3, 4, 5]);

// 27. Sort an array of strings by length
function sortByLength(arr) {
    arr.sort((a, b) => a.length - b.length);
    let answerDiv = `<div class="result">
                        <span>27.</span> Sorted by length: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${arr}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
sortByLength(["apple", "pie", "banana", "kiwi"]);

// 28. Find the factorial of a number
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    let answerDiv = `<div class="result">
                        <span>28.</span> Factorial of 5: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${result}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
factorial(5);

// 29. Merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    let result = [...arr1, ...arr2];
    result.sort((a, b) => a - b);
    let answerDiv = `<div class="result">
                        <span>29.</span> Merged sorted arrays: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${result}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
mergeSortedArrays([1, 3, 5], [2, 4, 6]);

// 30. Remove falsy values from an array
function removeFalsy(arr) {
    let result = [];
    for (let elem of arr) {
        if (elem) result.push(elem);
    }
    let answerDiv = `<div class="result">
                        <span>30.</span> Array without falsy values: 
                        <button onclick="toggleAnswer(this)">Show Answer</button>
                        <div class="hidden">Answer: ${result}</div>
                    </div>`;
    document.getElementById('output').innerHTML += answerDiv;
}
removeFalsy([0, 1, false, 2, '', 3, null, undefined]);

// Toggle the visibility of the answer
function toggleAnswer(button) {
    let answerDiv = button.nextElementSibling; // Get the next div (the answer div)
    if (answerDiv.style.display === "block") {
        answerDiv.style.display = "none";
        button.textContent = "Show Answer";
    } else {
        answerDiv.style.display = "block";
        button.textContent = "Hide Answer";
    }
}