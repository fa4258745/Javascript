function Faraz() {
  let a = "what's up buddy"; // STring
  let b = "hello world";
  let c = "see ya mate";
  document.write(a.length); //returns the length of the string
  document.write(a.concat(b, c)); // combines two or more strings in one
}

// Replace
function Ahmed() {
  //  let abc ="Cybrom is located at Cybrom and Cybrom is Good";
  //  document.write(abc.replace("Cybrom", "Mpnagar"));

  let abc = "Cybrom is located at Cybrom and Cybrom is Good";
  document.write(abc.replace(/Cybrom/gi, "Mpnagar"));
  let arr = [1, 3, "Hello", 8, 9]; //array
}

function Slice2() {
  let h = "javascriptissoeasy";
  document.write(h.slice(4, 12));
}

function upper() {
  let d = "hello worldtoUpper"; //
  let f = "HELLO WORLD1TOLOWER"; //

  document.write(d.toUpperCase());
  document.write(f.toLowerCase());
}

function P45() {
  let abc2 = "Thi-s is-St-ring";
  document.write(abc2.split("-"));
}
// <----------Template Litrels----------->
function temp() {
  // backtick  (``)  Template literals
  //supports single quotes and single quotes
  //supports html tags
  let text = `hello <em>world</em> "my name          
 is<h1> faraz"</h1> 'ahmed'`; //suport multi line text

  document.write(text);
  // supports dynamic variable
  let name = "Faraz";
  let age = 25;
  let text1 = `my name is ${name} and I am ${age} year sold`;
  console.log(text1);
}
// abbr
//mark
