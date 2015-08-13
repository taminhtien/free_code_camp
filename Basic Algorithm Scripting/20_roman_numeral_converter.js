/*
	Convert the given number into a roman numeral.
	All roman numerals answers should be provided in upper-case.
*/

function num2roman(num) {
  var roman = {
    1000: "M",
    900: "CM",
    800: "DCCC",
    700: "DCC",
    600: "DC",
    500: "D",
    400: "CD",
    300: "CCC",
    200: "CC",
    100: "C",
    90: "XC",
    80: "LXXX",
    70: "LXX",
    60: "LX",
    50: "L",
    40: "XL",
    30: "XXX",
    20: "XX",
    10: "X",
    9: "IX",
    8: "VIII",
    7: "VII",
    6: "VI",
    5: "V",
    4: "IV",
    3: "III",
    2: "II",
    1: "I"
  };
  return roman[num.toString()];
}

function convert(num) {
  var n = num.toString().split('');
  var roman_num = '';
  for(i = 0; i < n.length; i++) {
    roman_num += num2roman(Number(n[i]) * Math.pow(10, n.length - i - 1));
  }
 return roman_num;
}

convert(36);