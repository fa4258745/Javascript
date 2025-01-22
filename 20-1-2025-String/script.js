function Faraz() {
  let a = "what's up buddy"; // STring
  let b = "hello world";
  let c = "see ya mate";
  document.write(a.concat(b, c)); // combines two or more strings in one
  document.write(a.length);       //returns the length of the string
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
  let d = "hello worldtoUpper";
  let f = "HELLO WORLD1TOLOWER";

  document.write(d.toUpperCase());
  document.write(f.toLowerCase());
}

function P45() {
  let abc2 = "Thi-s is-St-ring";
  document.write(abc2.split("-"));
};




