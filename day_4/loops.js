//task 1

function one2ten() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

one2ten();

//task 2

function fivetable() {
  for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = `, 5 * i);
  }
}

fivetable();

//task 3

function pattern() {
  for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

pattern();

//task 4

const ten = () => {
  let x = 1;
  let sum = 0;
  while (x <= 10) {
    sum += x;
    x++;
  }
  console.log(sum);
};

ten();

//task 5

const factorial = () => {
  let fact = 1;
  let n = 1;

  do {
    fact *= n;
    n++;
  } while (n <= 10);

  console.log(fact);
};

factorial();
