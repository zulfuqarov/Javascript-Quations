

const Func = (arr1, arr2) => {
  let data = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1) {
      data.push(arr1[i]);
    }
  }
  return data;
};
const Arr1 = ["Nebi", 12, 1, 2, "Cosqun", "Tebriz", 2, "nebi", "Ilkin"];
const Arr2 = ["Ilkin", 12, "nebi", 5, 6, 1, 2];
console.log(Func(Arr1, Arr2));





