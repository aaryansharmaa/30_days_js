function posnegzero(a) {
  if (a < 0) {
    console.log("Negative");
  } else if (a > 0) {
    console.log("Postive");
  } else {
    console.log("Zero");
  }
}

posnegzero(0);

console.log("______");
console.log("  ");

function voter(age) {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Ineligible to vote");
  }
}

voter(18);

function day(num) {
  switch (num) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
  }
}

day(5);

function leap(days) {
  console.log(days > 365 ? "Leap" : "Not leap");
}

leap(365);
