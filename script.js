
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  }
  function selectMop(event) {
    event.preventDefault();
    var selectedMop = event.target.dataset.value;
    document.getElementById("selectedMop").textContent = selectedMop;
    document.getElementById("modeOfPayment").value = selectedMop;
    toggleDropdown('paymentDropdown'); 
  }

  const dropdownToggle = document.querySelector(".dropdown-toggle");
dropdownToggle.addEventListener("click", () => {
    const dropdownMenu = document.querySelector("#dropdown > .menu");
    dropdownMenu.classList.toggle("open");
    dropdownToggle.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function() {
  const dropdownToggle = document.querySelector("#dropdown .dropdown-toggle");
  
  dropdownToggle.addEventListener("click", function() {
      const menu = this.nextElementSibling;
      menu.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var menuItems = document.querySelectorAll('.menu-item a');
  menuItems.forEach(function(item) {
      item.addEventListener('click', function(e) {
          e.preventDefault();
          var selectedText = this.textContent;
          document.querySelector('#dropdown .dropdown-toggle span').textContent = selectedText;
      });
  });
});
