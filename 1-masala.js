function getLevel2(n) {
  const levels = [];
  let res = 2;

  for (let i = 1; i <= n; i++) {
    levels.push(res);
    res = res ** 2;
  }

  return levels;
}

console.log(getLevel2(5));
//n sonini darajaga oshirish 5marta
