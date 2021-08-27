exports.sample = items => (items[Math.floor(Math.random() * items.length)]);

exports.rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

exports.delay = millis => new Promise((resolve) => {
  setTimeout(_ => resolve(), millis)
});

exports.typofy = (s) => {
  return s.split('').map(function (d) {
    if ((r = Math.random)(b = 'qwertyuiop0asdfghjkl000zxcvbnm') > .015) return d
    if ((c = r(x = (d > '`' ? b : (b = b.toUpperCase())).indexOf(d)) * (/[a-z]/i.test(d) + 2)) < 2) return c > 1 ? d + d : ''
    for (a = 0; !a;) a = b[x + [11, -11, 1, -1][~~(r() * 4)]]
    return a
  }).join('')
}

exports.capitalize = (txt) => {
  return txt.charAt(0).toUpperCase() + txt.slice(1); //or if you want lowercase the rest txt.slice(1).toLowerCase();
}

function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}

exports.sampleMany = (obj, n, guard) => {
  if (n == null || guard) {
    return obj[random(obj.length - 1)];
  }
  var sample = [...obj];
  var length = sample.length;
  n = Math.max(Math.min(n, length), 0);
  var last = length - 1;
  for (var index = 0; index < n; index++) {
    var rand = random(index, last);
    var temp = sample[index];
    sample[index] = sample[rand];
    sample[rand] = temp;
  }
  return sample.slice(0, n);
}


exports.humanizeJoin = (array) => {
  return array
    .join(", ")
    .replace(/, ((?:.(?!, ))+)$/, ' and $1');
}
exports.shuffle = (array) => {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
