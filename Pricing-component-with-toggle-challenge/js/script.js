var display = true;
var basic = document.querySelector(".basic");
var professional = document.querySelector(".professional");
var master = document.querySelector(".master");
var prices = document.querySelectorAll(".price");
var toggler = document.querySelector("#toggler");
var buttons = document.querySelectorAll(".cards a");

showAnnualPricing();
displaySelector(basic);
displaySelector(professional);
displaySelector(master);

toggler.addEventListener("click", function () {
  if(display) {
    showAnnualPricing();
    toggler.className = "toggle-right";
  } else{
    showMonthlyPricing();
    toggler.className= "toggle-left";
  }
});


function showAnnualPricing () {
  prices[0].textContent = "$ 199.99";
  prices[1].textContent = "$ 249.99";
  prices[2].textContent = "$ 399.99";
  display = false;
};

function showMonthlyPricing() {
  prices[0].textContent = "$ 19.99";
  prices[1].textContent = "$ 24.99";
  prices[2].textContent = "$ 39.99";
  display = true;
};

function displaySelector(event) {
  event.addEventListener("click", function () {
    basic.className = "unselected-card";
    professional.className = "unselected-card";
    master.className = "unselected-card";
    event.className = "selected-card";
    buttons.forEach(button => {
      button.className = "btn-primary";
    });
    event.children[5].className = "btn-secondary";
  })
}
