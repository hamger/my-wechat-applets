function type (arg) {
  return Object.prototype.toString.call(arg).replace(/\[object\s|\]/g, '')
}

function formatTime(time, format) {
  let temp = "0000000000" + time;
  let len = format.length;
  return temp.substr(-len);
}

function add0(i) {
  return (i < 10 ? "0" : "") + i;
}


// 转Date对象
function toDate(dateArg) {
  if (type(dateArg) === "Date") {
    return dateArg;
  } else if (type(dateArg) === 'Number' || type(dateArg) === 'String') {
    return new Date(dateArg);
  } else {
    throw Error("You need input a right Date argument!");
  }
}

// Date对象转日期
function formatDate(date, format = "h:0m:0s") {
  var date = toDate(date);
  return format.replace(/y|0M|M|0d|d|0h|h|0m|m|0s|s/g, function(a) {
    switch (a) {
      case "y":
        return date.getFullYear();
      case "M":
        return date.getMonth() + 1;
      case "0M":
        return add0(date.getMonth() + 1);
      case "d":
        return date.getDate();
      case "0d":
        return add0(date.getDate());
      case "h":
        return date.getHours();
      case "0h":
        return add0(date.getHours());
      case "m":
        return date.getMinutes();
      case "0m":
        return add0(date.getMinutes());
      case "s":
        return date.getSeconds();
      case "0s":
        return add0(date.getSeconds());
    }
  });
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate
};
