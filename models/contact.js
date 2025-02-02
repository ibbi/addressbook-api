var tokens = {};

module.exports = function (token) {
  if (tokens[token]) return tokens[token];

  var all = [];
  var map = {};
  var exports = (tokens[token] = {});

  exports.list = function () {
    return all;
  };

  exports.create = function (model) {
    model.id = model.id || uuid();
    all.push(model);
    map[model.id] = model;
    return model;
  };

  exports.read = function (id) {
    return map[id] || null;
  };

  exports.update = function (id, props) {
    var model = map[id];
    if (!model) return null;
    for (var key in props) model[key] = props[key];
    return model;
  };

  exports.destroy = function (id) {
    erase(all, map[id]);
    delete map[id];
    return;
  };

  exports.create({
    id: "scott",
    number: "233-433-2121",
    first: "Scott",
    last: "Wu",
    avatar:
      "https://pbs.twimg.com/profile_images/1366774613796093962/xkPzptQv_400x400.jpg",
    notes: "CTO at Lunchclub",
  });

  exports.create({
    id: "ryan",
    number: "123-433-2221",
    first: "Ryan",
    last: "Florence",
    avatar: "http://ryanflorence.com/jsconf-avatars/avatars/ryan.jpg",
    notes: "Really likes peanut butter and tuna milkshakes",
  });

  exports.create({
    id: "mj",
    number: "783-433-9891",
    first: "Michael",
    last: "Jackson",
    avatar:
      "https://pbs.twimg.com/profile_images/3290627244/4e88243b7d2bf43553fce25499feec81.png",
    notes: "Absolutely despises manicures",
  });

  exports.create({
    id: "jeremy",
    number: "303-433-3420",
    first: "Jeremy",
    last: "Ashkenas",
    avatar: "http://ryanflorence.com/jsconf-avatars/avatars/jeremy.jpg",
    notes: "Only writes FORTRAN and Sumerian",
  });

  return exports;
};

function erase(arr, item) {
  var index = arr.indexOf(item);
  if (index == -1) return false;
  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      break;
    }
  }
  return true;
}

function uuid() {
  return Math.random().toString(32).slice(2).substr(0, 5);
}
