const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://hips.hearstapps.com/hmg-prod/images/190226-dan-dan-noodles-253-1552085451.jpg?crop=0.670xw:1.00xh;0.207xw,0&resize=1200:*",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//Adding Buttons
let categories = ["All", "Korea", "Japan", "China"]; //Creating array that contains button names
categories.forEach((element)=>{
  //assigning the elements
  let button = document.createElement("button");
  button.classList.add("btn", "btn-outline-dark", "btn-item"); //adding classes
  button.setAttribute("id", element); //assigning button an id
  let btnContainer = document.querySelector(".btn-container");
  button.innerHTML = element; //changing the button name with our element
  btnContainer.append(button); //appending it with container
});

function createMenu(menuElements){
  let menuItems = menuElements.map((element)=>{
    //assigning elements
    let menuItem = document.createElement("div"); //menu items div
    menuItem.classList.add("menu-items", "col-lg-6", "col-sm-12"); //adding classes to menu items
  
    let img = new Image(); //menu item img
    //taking the object's datas for img
    img.src = element.img;
    img.alt = element.title;
    img.classList.add("photo");
    menuItem.append(img); //appending img to menu items div
  
    let menuInfo = document.createElement("div"); //creating menu info div
    menuInfo.classList.add("menu-info");
  
    let menuTitle = document.createElement("div"); //creating menu title div
    menuTitle.classList.add("menu-title");
    menuTitle.innerHTML = `<h4>${element.title}</h4>
    <h4 class="price">${element.price}</h4>`; //adding the menu title content
    menuInfo.append(menuTitle); //appending menu title to menu info
  
    let menuText = document.createElement("div"); //creating menu text div
    menuText.classList.add("menu-text")
    menuText.innerHTML = element.desc; //putting item's decsription to the menu text
    menuInfo.append(menuText); //appending menu text to menu info
  
    menuItem.append(menuInfo); //appending menu info to menu item structure
  
    return menuItem;
  })
  
  //Function for listing all elements
  function list() {
      //clearing the old menu
      let OldMenu = document.querySelectorAll(".section-center>div")
      OldMenu.forEach(element => {
        element.remove()
      })
      //selecting the section which menu item will be appended
      let section = document.querySelector(".section-center");
      menuItems.forEach((element)=>{
      section.append(element); //appending the menu item to the section
    })
  }
  list();
}
//Listing all menu items on load
createMenu(menu);

//Filter functions
function checkCategoryChina(meal){
  return meal.category == "China";
}
function checkCategoryKorea(meal){
  return meal.category == "Korea";
}
function checkCategoryJapan(meal){
  return meal.category == "Japan";
}

//Functions to be called when clicked on buttons 
let buttons = document.querySelectorAll(".btn-item");
//getting the id of the button when it is clicked on to filter the list
buttons.forEach((element)=>{
  element.addEventListener("click", (event) => {
    //Using switch cases to assign categories
    switch(event.target.id){
      case "Japan":
        createMenu(menu.filter(checkCategoryJapan));
        break;
      case "Korea":
        createMenu(menu.filter(checkCategoryKorea));
        break;
      case "China":
        createMenu(menu.filter(checkCategoryChina));
        break;
      case "All":
        createMenu(menu);
        break;
    }
  })
}) 
