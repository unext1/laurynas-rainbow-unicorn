const arr: string[] = ["apa", "orangutang", "gorilla", "get", "giraff"];

console.log(arr);

interface Object {
  name: string;
  age: number;
  animal: boolean;
}

const obj: Object = {
  name: "ape",
  age: 3,
  animal: true,
};

console.log(obj);

const func = (string: string): void => {
  console.log("hi", string);
};

func("x");

arr.map((i: string) => console.log(i));
