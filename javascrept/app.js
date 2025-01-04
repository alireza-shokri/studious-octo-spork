const $ = document;
const theme = $.querySelector(".menu_btn_theme");
const box_project = $.querySelectorAll(".sect3_project_box");
const menu_icone = $.querySelector(".menu_icone");
const menu_repairmodle = $.querySelector(".menu_repairmodle");
const menu_theme_img = $.querySelector(".menu_theme_img");
const menu = $.getElementById("menu");
const all_menu_iteam_link = $.querySelectorAll(".link_menu");
const menu_btn_theme = $.querySelector(".menu_btn_theme");
const menu_list = $.querySelector(".menu_ul");
const sect3_all_box = $.getElementsByClassName("sect3_box");
const sect3_left_2 = $.getElementById("sect3_left");
const sect3_right_2 = $.getElementById("sect3_right");
const sect3_p_box = $.querySelector(".sect3_parent_box");
let jahat;
let conter = 0;
let vaz_menu = "1";
function change_theme_body(status) {
  if (status == "dark") {
    $.documentElement.style.setProperty("--color_body", "rgb(0,2,40)");
    $.documentElement.style.setProperty("--color_black_desc_skill", "wheat");
    $.documentElement.style.setProperty(
      "--color_menu",
      "rgba(255, 255, 255, 0.835)"
    );
    $.documentElement.style.setProperty("--background_sect1", "rgb(9, 13, 56)");
    $.documentElement.style.setProperty("--color_sect1_desc", "wheat");
    $.documentElement.style.setProperty(
      "--color_sect1_communication",
      "goldenrod"
    );
  } else {
    $.documentElement.style.setProperty(
      "--color_body",
      " rgba(162, 178, 179,0.3)"
    );
    $.documentElement.style.setProperty("--color_black_desc_skill", "black");
    $.documentElement.style.setProperty("--color_menu", "");
    $.documentElement.style.setProperty(
      "--background_sect1",
      "rgb(177, 178, 211)"
    );
    $.documentElement.style.setProperty(
      "--color_sect1_desc",
      "rgb(14, 13, 12)"
    );
    $.documentElement.style.setProperty(
      "--color_sect1_communication",
      "rgb(16, 14, 139)"
    );
  }
}
function change_menu_btn() {
  if (localStorage.getItem("color") == "dark") {
    menu_theme_img.src = "image/sun.svg";
    menu_theme_img.classList.add("animation_translateX");
    menu_theme_img.addEventListener("animationend", function () {
      menu_theme_img.classList.remove("animation_translateX");
    });
    change_theme_body("dark");
  } else if (localStorage.getItem("color") == "light") {
    menu_theme_img.src = "image/moon_blur.svg";
    menu_theme_img.classList.add("animation_translateX");
    menu_theme_img.addEventListener("animationend", function () {
      menu_theme_img.classList.remove("animation_translateX");
    });
    change_theme_body("light");
  }
}
function setstorage() {
  if (localStorage.getItem("color")) {
    if (localStorage.getItem("color") == "dark")
      localStorage.setItem("color", "light");
    else if (localStorage.getItem("color") == "light")
      localStorage.setItem("color", "dark");
  } else localStorage.setItem("color", "dark");
  change_menu_btn();
}
// --------------------------------

const media = window.matchMedia("(max-width:770px)");
media.addEventListener("change", function (event) {
  if (event.matches) {
    vaz_menu = "2";
    chang_menu_decoraetion(vaz_menu);
    if (status_menu == "hideen") menu.style.right = "-250px";
    else menu.style.right = "16px";
    menu.style.top = "16px";
  } else {
    vaz_menu = "1";
    chang_menu_decoraetion(vaz_menu);
    if (status_menu == "hideen") menu.style.top = "-80px";
    else menu.style.top = "16px";
    menu.style.right = "0";
  }
});
function chang_menu_decoraetion(vrodi) {
  if (vrodi == "2") {
    menu.classList.remove("menu");
    menu_btn_theme.classList.remove("menu_btn_theme");
    menu_list.classList.remove("menu_list");
    menu.classList.add("menu_2");
    menu_btn_theme.classList.add("menu_btn_theme_2");
    menu_list.classList.add("menu_list_2");
    all_menu_iteam_link.forEach(function (elm) {
      elm.classList.add("menu_iteam_link_2");
      elm.classList.remove("menu_iteam_link");
    });
    $.querySelectorAll(".menu_shape").forEach(function (elm) {
      elm.style.display = "block";
    });
  } else if (vrodi == "1") {
    menu.classList.remove("menu_2");
    menu_btn_theme.classList.remove("menu_btn_theme_2");
    menu_list.classList.remove("menu_list_2");
    menu.classList.add("menu");
    menu_btn_theme.classList.add("menu_btn_theme");
    menu_list.classList.add("menu_list");
    all_menu_iteam_link.forEach(function (elm) {
      elm.classList.add("menu_iteam_link");
      elm.classList.remove("menu_iteam_link_2");
    });
    $.querySelectorAll(".menu_shape").forEach(function (elm) {
      elm.style.display = "none";
    });
  }
}
function click_btn_repair() {
  menu_repairmodle.classList.add("class_rotate_repair");
  menu_repairmodle.addEventListener("animationend", function () {
    menu_repairmodle.classList.remove("class_rotate_repair");
  });
  setTimeout(() => {
    if (vaz_menu == "1") {
      vaz_menu = "2";
      chang_menu_decoraetion(vaz_menu);
      menu.style.right = "16px";
    } else if (vaz_menu == "2") {
      vaz_menu = "1";
      chang_menu_decoraetion(vaz_menu);
      menu.style.top = "16px";
    }
  }, 500);
}
let status_menu = "hideen";
const all_style_menu = getComputedStyle(menu);
// appear_menu
function appear_menu() {
  if (status_menu == "hideen") {
    status_menu = "visible";
    menu.style.display = "block";
    menu_icone.style.display = "none";
    $.querySelector(".menu_cansle").style.display = "block";
    $.querySelector(".menu_cansle").classList.add("class_rotate_menu_icone");
  } else {
    status_menu = "hideen";
    menu_icone.classList.add("class_rotate_menu_icone");
    menu_icone.addEventListener("animationend", function () {
      menu_icone.classList.remove("class_rotate_menu_icone");
    });
    $.querySelector(".menu_icone").style.display = "block";
    $.querySelector(".menu_cansle").style.display = "none";
    setTimeout(() => {
      menu.style.display = "none";
    }, 400);
  }
  if (vaz_menu == "2") {
    if (all_style_menu.right != "-250px") menu.style.right = "-250px";
    else menu.style.right = "16px";
  } else if (vaz_menu == "1") {
    if (all_style_menu.top != "-80px") menu.style.top = "-80px";
    else menu.style.top = "16px";
  }
}
// sect3------------------------------------
// setInterval
let sect3_vaz = false;
let secinterval;
function interval_fanc() {
  secinterval = setInterval(() => {
    if (
      conter <
        sect3_all_box.length -
          Math.floor(sect3_p_box.offsetWidth / sect3_all_box[0].offsetWidth) &&
      !sect3_vaz
    )
      sect3_work_right();
    else {
      sect3_work_left();
      sect3_vaz = true;
      if (conter == 0) sect3_vaz = false;
    }
  }, 5000);
}
interval_fanc();
function go_box(jahat) {
  for (let i = 0; i < sect3_all_box.length; i++) {
    sect3_all_box[i].style.transform += " translateX(" + jahat + "px)";
  }
}
// left
function sect3_work_left() {
  if (conter > 0) {
    go_box(-jahat);
    conter--;
    if (sect3_right_2.style.color != "rgba(255, 166, 0, 0.74)")
      sect3_right_2.style.color = "rgba(255, 166, 0, 0.74)";
    if (conter == 0) sect3_left_2.style.color = "wheat";
    clearInterval(secinterval);
    interval_fanc();
  }
}
// right
function sect3_work_right() {
  if (
    conter <
    sect3_all_box.length -
      Math.floor(sect3_p_box.offsetWidth / sect3_all_box[0].offsetWidth)
  ) {
    go_box(+jahat);
    conter++;
    if (sect3_left_2.style.color != "rgba(255, 166, 0, 0.74)")
      sect3_left_2.style.color = "rgba(255, 166, 0, 0.74)";
    if (
      conter ==
      sect3_all_box.length -
        Math.floor(sect3_p_box.offsetWidth / sect3_all_box[0].offsetWidth)
    )
      sect3_right_2.style.color = "wheat";
    clearInterval(secinterval);
    interval_fanc();
  }
}
// mouse move
let sect3_magdar_mosemove;
sect3_p_box.addEventListener("mousedown", function (event) {
  sect3_magdar_mosemove = event.clientX;
});
sect3_p_box.addEventListener("mouseup", function (event) {
  if (sect3_magdar_mosemove + 40 < event.clientX) sect3_work_right();
  else if (sect3_magdar_mosemove > event.clientX + 40) sect3_work_left();
});
// touch-----------------------
let sect3_megdar_touch;
sect3_p_box.addEventListener("touchstart", function (event) {
  sect3_megdar_touch = event.touches[0].clientX;
});
sect3_p_box.addEventListener("touchend", function (event) {
  if (sect3_megdar_touch + 40 < event.changedTouches[0].clientX)
    sect3_work_left();
  else if (sect3_megdar_touch < event.changedTouches[0].clientX + 40)
    sect3_work_right();
});
// navar
window.addEventListener("scroll", function (event) {
  let x = window.scrollY;
  let all = document.documentElement.scrollHeight;
  all -= window.innerHeight;
  document.querySelector(".navar_hed").style.width = (x / all) * 100 + "%";
  (x / all) * 100;
});
// menu_link color chang
window.addEventListener("scroll", function () {
  let posithon_sect3 = $.querySelector(".section_3").getBoundingClientRect();
  if (
    posithon_sect3.top <= 0 &&
    posithon_sect3.bottom >= 0 &&
    $.documentElement.style.getPropertyValue("--color_body") ==
      "rgba(162, 178, 179,0.3)"
  ) {
    $.documentElement.style.setProperty("--color_menu_link", "lightskyblue");
    $.documentElement.style.setProperty("--menu_repairmodle", "lightskyblue");
  } else {
    if (
      $.documentElement.style.getPropertyValue("--color_menu_link") !=
      "rgb(5, 3, 0)"
    ) {
      $.documentElement.style.setProperty("--color_menu_link", "rgb(5, 3, 0)");
      $.documentElement.style.setProperty("--menu_repairmodle", "orangered");
    }
  }
});
// onload
window.onload = function () {
  if (localStorage.getItem("color")) change_menu_btn();
  menu.style.display = "none";
  if (media.matches) {
    vaz_menu = "2";
    chang_menu_decoraetion(vaz_menu);
  }
  setTimeout(() => {
    $.querySelector(".parent_loader").style.display = "none";
    $.querySelector(".header").style.display = "block";
    $.querySelector(".contenir").style.display = "block";
    let sect3_allstyle_box = getComputedStyle(sect3_all_box[0]);
    jahat =
      sect3_all_box[0].offsetWidth + parseFloat(sect3_allstyle_box.margin) * 2;
  }, 500);
};
// addEventListener
theme.addEventListener("click", setstorage);
menu_icone.addEventListener("click", appear_menu);
$.querySelector(".menu_cansle").addEventListener("click", appear_menu);
menu_repairmodle.addEventListener("click", click_btn_repair);
sect3_right_2.addEventListener("click", sect3_work_right);
sect3_left_2.addEventListener("click", sect3_work_left);
