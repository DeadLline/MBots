document.querySelector(".header-burger").addEventListener("click", function (e) {
  e.preventDefault();

  if (this.classList.contains("active")) {
    this.classList.remove("active")
    document.querySelector(".header-nav").classList.remove("active");
    document.querySelector(".inner").classList.remove("active");
    document.body.style.overflow = 'visible';
    
  }

  else {
    this.classList.add("active")
    document.querySelector(".header-nav").classList.add("active");
    document.querySelector(".inner").classList.add("active");
    document.body.style.overflow = 'hidden';
    document.querySelector(".header__profile-menu").classList.remove("active");
  }
});

document.querySelector(".header__profile-logo").addEventListener("click", function (e) {
  e.preventDefault();

  if (document.querySelector(".header__profile-menu").classList.contains("active")) {
    document.querySelector(".header__profile-menu").classList.remove("active");
  }

  else {
    document.querySelector(".header__profile-menu").classList.add("active");
    document.querySelector(".header-nav").classList.remove("active");
    document.querySelector(".inner").classList.remove("active");
    document.body.style.overflow = 'visible';
  }
});

const resetNav = () => {
    header.querySelector(".header-nav").classList.remove("active");
    document.querySelector(".inner").classList.remove("active");
    document.body.style.overflow = 'visible';
};

window.addEventListener("resize", resetNav);
