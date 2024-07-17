const evenodd = (n) => {
  if (n % 2 === 0) {
    console.log(`The number ${n} is even`);
  } else {
    console.log(`The number ${n} is odd`);
  }
};

evenodd(6);

const square = (n) => {
  console.log(`Square of number ${n} is`, n * n);
};

square(11);

const concat = (s1, s2) => {
  let s3 = s1 + s2;
  console.log(s3);
};

concat("ab", "cd");

const sum = (n1, n2) => {
  let n3 = n1 + n2;
  console.log(n3);
};

sum(5, 6);
