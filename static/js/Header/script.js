menu_arr = [
  {id:0 ,name: "Giới thiệu 💁‍♂️",url: "http://127.0.0.1:8000/"},
  {id:1 ,name: "Điểm đến 🏯", url: "http://127.0.0.1:8000/destination/"},
  {id:2 ,name: "Ẩm thực 🍽️", url: "http://127.0.0.1:8000/cushine/"},
  {id:3 ,name: "Liên hệ 📞", url: "#footer"},
];

function createMenu(item){
  return `
    <li class="nav-item" role="tablist">
      <a href="${item.url}" class="nav-link">
        <button
          class="${item.id === 0 ? "nav-link active" : "nav-link"}"
          id="pills-home-tab"
          data-bs-toggle="pill"
          type="button"
          role="tab"
          aria-selected="true"
        >
          ${item.name}
        </button>
      </a>
    </li>
  `
}

function renderMenu(array){
  console.log(10);
  let menuHTML = document.getElementById("pills-tab");
  menuHTML.innerHTML = array.map(createMenu).join('');
}
