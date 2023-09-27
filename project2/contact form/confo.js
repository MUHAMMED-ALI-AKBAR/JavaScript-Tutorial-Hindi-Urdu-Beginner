const focus = document.querySelectorAll("input");
console.log(focus);
focus.forEach((input) => {
  input.addEventListener("focus", () => {
    input.style.backgroundColor = "green";
  });
});

const blur = document.querySelectorAll("input");
console.log(blur);
blur.forEach((input) => {
  input.addEventListener("blur", () => {
    input.style.backgroundColor = "";
  });
});

const text = document.querySelector("textarea");
console.log(text);
// textarea.forEach((textarea) =>{
text.addEventListener("focus", () => {
  text.style.backgroundColor = "green";
});
// })

const textblur = document.querySelector("textarea");
console.log(textblur);
// textarea.forEach((textarea) =>{
textblur.addEventListener("blur", () => {
  textblur.style.backgroundColor = "";
});
// })
