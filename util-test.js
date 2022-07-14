const fs = require("fs");

const utils = eval(fs.readFileSync("src/util.js", "utf8"))().utils;

const testList = [
  {
    title: "Get random int",
    test: () => utils.getRandomInt(20) <= 20,
    expected: () => true,
  },
  {
    title: "Get random int between",
    test: () => {
      const r = utils.getRandomIntBetween(20, 100);
      return r >= 20 && r <= 100;
    },
    expected: () => true,
  },
  {
    title: "Random string",
    test: () => utils.randomStr(20).length,
    expected: () => 20,
  },
  {
    title: "Lorem Ipsum",
    test: () => utils.loremIpsum(10),
    expected: () =>
      "lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
  },
  {
    title: "Get one of",
    test: () => ["a", "b", "c"].includes(utils.getOneOf(["a", "b", "c"])),
    expected: () => true,
  },
];

var ix = 1;
for (const test of testList) {
  const testResult = test.test();
  const result = testResult === test.expected();
  console.log(
    `${result ? "✅" : "❌"} ${ix} Test ${test.title}: ${
      result ? "Passed" : "Error"
    }`
  );
  ix++;
}
