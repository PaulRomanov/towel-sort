module.exports = function towelSort (matrix) {
  if (!arguments.length) return [];
  let mas = [];
  matrix.forEach((item, i) => {
      if (!(i % 2))
          Array.prototype.push.apply(mas, item);
      else
          Array.prototype.push.apply(mas, item.reverse());
  });
return mas;
}