const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://i2.wp.com/seonkyounglongest.com/wp-content/uploads/2019/10/Dan-Dan-Noodles-11.jpg?fit=2000%2C1333&ssl=1",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const categories = ["All", ...new Set(menu.map((item) => item.category))];
const buttonContainer = document.querySelector(".btn-container");
const searchContainer = document.querySelector(".search-container");

searchContainer.innerHTML = `
      <div clas="section-center row">
        <div class="col-lg-6 col-sm-12">
          <input type="text" id="search" placeholder="Search a item">
          </input>
          </div>
      </div>`;
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function(event){
  const searchText=event.target.value.toLowerCase();
  filterMenu(searchText);
})
function filterMenu(searchText){
  const filteredMenu = menu.filter(item=>
    item.title.toLowerCase().includes(searchText)
  );
  displayMenu(filteredMenu)
}

buttonContainer.innerHTML = categories
  .map((category) => {
    return `<button class="btn btn-outline-dark btn-item" data-id="${category}">
              ${category}
            </button>`;
  })
  .join("");

//Menu elemanlarının listeleneceği kısmı seçme
const sectionContainer = document.querySelector(".section-center");

function displayMenu(menuItems) {
  //Menu elemanlarını map'leyip tüm elemanları listeleme
  sectionContainer.innerHTML = menuItems
    .map((index) => {
      return `
    <div class="menu-items col-lg-6 col-sm-12">
      <img src="${index.img}" alt="${index.title}" class="photo">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${index.title}</h4>
          <h4 class="price">${index.price}</h4>
          <h4>
        </div>
        <div class="menu-text">${index.desc}</div>
      </div>
    </div>
  `;
    })
    .join("");
}

displayMenu(menu);

const filterButtons = document.querySelectorAll(".btn-item");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-id");
    if (category === "All") {
      displayMenu(menu);
    } else {
      const filteredMenu = menu.filter((item) => item.category === category);
      displayMenu(filteredMenu);
    }
  });
});
