function changeMenu(id) {
  for (let i = 0; i < 3; i++) {
    let item = document.getElementById(i);
    item.setAttribute("class", "nav-link");
  }
  let change_item = document.getElementById(id);
  change_item.setAttribute("class", "nav-link active");
}
