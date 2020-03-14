let str = 'My name is Evgeniy';

// Solution #1
function reverseString(str) {
  const chartList = str.split('');
  let reversedString = [];
  for (let i = chartList.length; i >= 0; i--) {
    reversedString.push(chartList[i]);
  }
  return reversedString.join('');
}

reverseString(str); // "yinegvE si eman yM"


// Solution #2

function reverseString2(str) {
  return str.split('').reverse().join('');
}

reverseString2(str); // "yinegvE si eman yM"


// Solution #3
function reverseString3(str) {
  return [...str].reverse().join('');
}

reverseString3(str); // "yinegvE si eman yM"
