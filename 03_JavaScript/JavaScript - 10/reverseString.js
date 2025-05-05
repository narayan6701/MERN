function reverseString() {
  let frm = document.querySelector("form");
  frm.addEventListener("submit", function (event) {
    event.preventDefault();
  });
  let str = document.querySelector("input").value;
  return str.split("").reverse().join("");
}

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert(reverseString());
});


