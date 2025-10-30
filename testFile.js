let str = 'mahyar mousavinia';
str = str.split(' ');
str[1] = str[1][0].toUpperCase() + str[1].slice(1);
console.log(str);
