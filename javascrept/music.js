const list_music_all = [];
function createObjectMusic(
  id,
  nameMusic,
  nameSinger,
  srcImg,
  srcAudio,
  timeEnd,
  heart
) {
  this.id = id;
  this.nameMusic = nameMusic;
  this.nameSinger = nameSinger;
  this.srcImg = srcImg;
  this.srcAudio = srcAudio;
  this.timeEnd = timeEnd;
  this.heart = heart;
}
list_music_all.push(
  new createObjectMusic(
    1,
    "Dans Les Alpes (128)",
    "Majid Entezami",
    "image_music/13-MajidEntezami-DansLesAlpes-1.jpg",
    "music/MajidEntezami-DansLesAlpes.mp3",
    "02:16",
    "white"
  )
);
list_music_all.push(
  new createObjectMusic(
    2,
    "imagine",
    "john Lenon",
    "image_music/john-lenon.jpg",
    "music/JohnLenon-Imagine.mp3",
    "03:07",
    "white"
  )
);
list_music_all.push(
  new createObjectMusic(
    3,
    "arosak koki",
    "forgh farokhzad",
    "image_music/forough-farrokhzad.jpg",
    "music/frogh-farokhzad.mp3",
    "02:28",
    "white"
  )
);
list_music_all.push(
  new createObjectMusic(
    4,
    "aye hai zamini",
    "forgh farokhzad",
    "image_music/forough-farokhzad2.jpg",
    "music/frogh_farokhzad2.mp3",
    "04:58",
    "white"
  )
);
list_music_all.push(
  new createObjectMusic(
    5,
    "Harfamo Bavar Bekoneh",
    "fereydoun_Farrokhzad",
    "image_music/fereydoun_Farrokhzad.jpg",
    "music/Fereydoun_Farrokhzad-Harfamo-Bavar-Bekoneh.mp3",
    "04:41",
    "white"
  )
);
list_music_all.push(
  new createObjectMusic(
    6,
    "McGowan_Mad_Girls",
    "Carol Anne",
    "image_music/Carol_Anne_McGowan_Mad_Girls.jpg",
    "music/Carol_Anne_McGowan_Mad_Girls.mp3",
    "02:15",
    "white"
  )
);
list_music_all.push(
  new createObjectMusic(
    7,
    "Dar Khyal",
    "Behrokh Shoorvarzi",
    "image_music/Behrokh Shoorvarzi-Dar Khyal-musiclazem.ir_.jpg",
    "music/Behrokh_Shoorvarzi-Dar-Khyal.mp3",
    "02:25",
    "white"
  )
);
list_music_all.push(
  new createObjectMusic(
    8,
    "Dkhonak andam ke ",
    "ghazal shakeri",
    "image_music/ghazal-shakeri.jpeg",
    "music/Dkhonakandamkeneshinim.mp3",
    "04:20",
    "white"
  )
);
list_music_all.push(
  new createObjectMusic(
    9,
    "People",
    "Kat Frankie",
    "image_music/Kat Frankie.jpg",
    "music/Kat-Frankie-People.mp3",
    "05:35",
    "white"
  )
);
list_music_all.push(
  new createObjectMusic(
    10,
    "Go zar",
    "unknown",
    "image_music/takhta_jamshed.jpg",
    "music/music_gozar.mp3",
    "05:55",
    "white"
  )
);
list_music_all.push(
  new createObjectMusic(
    11,
    "Marge Nazli",
    "Shahin Najafi",
    "image_music/Shahin Najafi - photo by Amin Khelghat….jpg",
    "music/ShahinNajafi_Marge-Nazli.mp3",
    "04:30",
    "white"
  )
);
list_music_all.push(
  new createObjectMusic(
    12,
    "life ",
    "unknown",
    "image_music/rock.jpg",
    "music/music_life.mp3",
    "03:04",
    "white"
  )
);
list_music_all.push(
  new createObjectMusic(
    13,
    "On the Nature",
    "Max Richter",
    "image_music/TheBlueNotebooks-Cover-Web.jpg",
    "music/On-the-Nature-of-Daylight.mp3",
    "06:11",
    "white"
  )
);
const $ = document;
const right_list = $.querySelector(".right_list");
const left_imgLarg = $.querySelector(".left_imgLarg");
const left_nameMusic = $.querySelector(".left_nameMusic");
const left_nameSinger = $.querySelector(".left_nameSinger");
const left_time_end = $.querySelector(".time_end");
const left_icone_shuffled = $.querySelector(".music_shuffled");
const left_icone_next = $.querySelector(".music_next");
const left_icone_pause = $.querySelector(".music_pause");
const left_icone_play = $.querySelector(".music_play");
const left_icone_previous = $.querySelector(".music_previous");
const left_icone_repeat = $.querySelector(".music_repeat");
const audio = new Audio();
const left_btn_playList = $.querySelector(".btn_playlist");
const cansle_playList = $.querySelector(".right_cansle_playList");
let left_heart = $.querySelector(".left_heart i");
let array_heart = [];
let isPlay = false;
let iteam_selected;
let iteam_selected_id;
const music_link_addrsse = "https://alireezashokri.ir/music.html";
function create_iteam() {
  list_music_all.forEach(function (iteam) {
    right_list.insertAdjacentHTML(
      "beforeend",
      `<li class="right_list_iteam"><p class="right_iteam_number">${
        iteam.id
      }</p>
      <img src="${
        iteam.srcImg
      }" alt="img singer" class="right_iteam_img"><div class="right_iteam_p_name"><h4 class="right_iteam_nameMusic">${
        iteam.nameMusic
      }</h4>
      <p class="right_iteam_nameSinger"> ${
        iteam.nameSinger
      }</p></div><p class="right_iteam_timeMusic">${iteam.timeEnd}</p>
      <button class="right_iteam_icone3dot"><i class="bi bi-three-dots"></i></button> 
      <div class="right_kader_3dot"><a href="${
        iteam.srcAudio
      }"class="music_download" target="_blank" download> <i class="bi bi-download"></i></a><a href="https://t.me/share/url?url=${encodeURIComponent(
        music_link_addrsse
      )}"class="music_share"  target="_blank"><i class="bi bi-telegram" title="telegram"></i></a></div></li>`
    );
  });
}
create_iteam();
const all_icone_3dot = $.querySelectorAll(".right_iteam_icone3dot");
const right_all_iteam = $.querySelectorAll(".right_list_iteam");
const p_imgLarg = $.querySelector(".left_p_imgLarg");
// placement iteam selected
function fanc_placement(iteam) {
  console.log(iteam);
  left_imgLarg.src = iteam.srcImg;
  left_nameMusic.textContent = iteam.nameMusic;
  left_nameSinger.textContent = iteam.nameSinger;
  left_time_end.textContent = iteam.timeEnd;
  audio.src = iteam.srcAudio;
  if (isPlay) {
    isPlay = false;
    fanc_play();
  }
  if (iteam.heart === "red") left_heart.classList.add("left_color_heart");
  else left_heart.classList.remove("left_color_heart");
}
// remove background iteam
function clearAndSetBackgroundItem(event_target) {
  right_all_iteam.forEach(function (iteam) {
    if (iteam.classList.contains("right_list_iteam_selected"))
      iteam.classList.remove("right_list_iteam_selected");
  });
  event_target.classList.add("right_list_iteam_selected");
}
// click iteam
right_list.addEventListener("click", function (event) {
  if (event.target.closest("button") || event.target.closest("a")) return;
  else if (event.target.closest("li")) {
    iteam_selected = event.target.closest("li");
    clearAndSetBackgroundItem(iteam_selected);
    iteam_selected_id = iteam_selected.firstChild.innerText;
    fanc_placement(list_music_all[iteam_selected_id - 1]);
  }
});
// play  and pause
function fanc_play() {
  if (!isPlay) {
    left_icone_play.classList.add("disply_hidden_forPlay");
    left_icone_pause.classList.remove("disply_hidden_forPlay");
    $.querySelector(".left_p_imgLarg").classList.remove("imgLarg_small");
    audio.play();
    isPlay = true;
  } else {
    left_icone_play.classList.remove("disply_hidden_forPlay");
    left_icone_pause.classList.add("disply_hidden_forPlay");
    $.querySelector(".left_p_imgLarg").classList.add("imgLarg_small");
    audio.pause();
    isPlay = false;
  }
}
// fanc_next
function fanc_next() {
  iteam_selected_id++;
  if (iteam_selected_id > list_music_all.length) iteam_selected_id = 1;
  clearAndSetBackgroundItem(right_all_iteam[iteam_selected_id - 1]);
  fanc_placement(list_music_all[iteam_selected_id - 1]);
}
// fanc_previous
function fanc_previous() {
  iteam_selected_id--;
  if (iteam_selected_id < 1) iteam_selected_id = list_music_all.length;
  clearAndSetBackgroundItem(right_all_iteam[iteam_selected_id - 1]);
  fanc_placement(list_music_all[iteam_selected_id - 1]);
}
// shuffled
let isSHuffled = false;
let random;
function fanc_original_shuffled() {
  while (true) {
    random = Math.floor(Math.random() * list_music_all.length) + 1;
    if (random !== iteam_selected_id) break;
  }
  iteam_selected_id = random;
  clearAndSetBackgroundItem(right_all_iteam[iteam_selected_id - 1]);
  fanc_placement(list_music_all[iteam_selected_id - 1]);
}
// click shuffled
function click_shuffled() {
  if (!isSHuffled) {
    $.querySelector(".music_shuffled i").classList.add("music_repeat_color");
    isSHuffled = true;
    if (isLoop) fanc_loop();
  } else {
    $.querySelector(".music_shuffled i").classList.remove("music_repeat_color");
    isSHuffled = false;
  }
}
// loop
let isLoop = false;
function fanc_loop() {
  if (!isLoop) {
    audio.loop = true;
    $.querySelector(".music_repeat i").classList.add("music_repeat_color");
    if (isSHuffled) click_shuffled();
    isLoop = true;
  } else {
    audio.loop = false;
    $.querySelector(".music_repeat i").classList.remove("music_repeat_color");
    isLoop = false;
  }
}
// click heart
function fanc_heart_color() {
  if (left_heart.classList.contains("left_color_heart")) {
    left_heart.classList.remove("left_color_heart");
    let inedex_remove = JSON.parse(localStorage.getItem("color_heart")).findIndex(iteam=> iteam = iteam_selected_id);
    array_heart.splice(inedex_remove, 1);
    localStorage.setItem("color_heart", JSON.stringify(array_heart));
    list_music_all[iteam_selected_id - 1].heart = "white";
  } else {
    left_heart.classList.add("left_color_heart");
    array_heart.push(iteam_selected_id);
    localStorage.setItem("color_heart", JSON.stringify(array_heart));
    list_music_all[iteam_selected_id - 1].heart = "red";
  }
}
// chang list_music heart
function list_music_chang_heart() {
  if (localStorage.getItem("color_heart")) {
    JSON.parse(localStorage.getItem("color_heart")).forEach(function (
      iteam_storage
    ) {
      list_music_all[iteam_storage - 1].heart = "red";
      array_heart.push(iteam_storage);
    });
  }
}
// img slider
function fanc_slider(vrodi) {
  if (vrodi === "left") {
    $.querySelector(".imgLarg_shadow_left").style.width = "100%";
    setTimeout(() => {
      $.querySelector(".imgLarg_shadow_left").style.width = "0";
      isSHuffled ? fanc_original_shuffled() : fanc_previous();
    }, 500);
  } else {
    $.querySelector(".imgLarg_shadow_right").style.width = "100%";
    setTimeout(() => {
      $.querySelector(".imgLarg_shadow_right").style.width = "0";
      isSHuffled ? fanc_original_shuffled() : fanc_next();
    }, 500);
  }
}
let imgLarg_start_x;
p_imgLarg.addEventListener("mousedown", function (event) {
  event.preventDefault();
  imgLarg_start_x = event.offsetX;
});
p_imgLarg.addEventListener("mouseup", function (event) {
  if (imgLarg_start_x + 50 < event.offsetX) fanc_slider("left");
  else if (imgLarg_start_x > event.offsetX + 50) fanc_slider("right");
});
// touch slider
p_imgLarg.addEventListener(
  "touchstart",
  function (event) {
    event.preventDefault();
    imgLarg_start_x = event.touches[0].clientX;
  },
  { passive: true }
);
p_imgLarg.addEventListener("touchend", function (event) {
  if (imgLarg_start_x + 50 < event.changedTouches[0].clientX)
    fanc_slider("left");
  else if (imgLarg_start_x > event.changedTouches[0].clientX + 50)
    fanc_slider("right");
});
// time update
let minut;
let secend;
audio.addEventListener("timeupdate", function () {
  $.querySelector(".left_navar_color").style.width =
    (audio.currentTime / audio.duration) * 100 + "%";
  minut = Math.floor(audio.currentTime / 60);
  secend = Math.floor(audio.currentTime % 60);
  if (minut < 10) minut = "0" + minut;
  if (secend < 10) secend = "0" + secend;
  $.querySelector(".time_now").textContent = minut + ":" + secend;
});
// navar click
let isClick = false;
let mouse_move = false;
const left_p_navar = $.querySelector(".left_p_navar");
left_p_navar.addEventListener("mousedown", function (event) {
  event.preventDefault();
  audio.currentTime = (event.offsetX / this.clientWidth) * audio.duration;
  isClick = true;
});
left_p_navar.addEventListener("mouseup", function () {
  isClick = false;
  if (mouse_move && isPlay) {
    audio.play();
    mouse_move = false;
  }
});
left_p_navar.addEventListener("mouseleave", function () {
  isClick = false;
  if (mouse_move && isPlay) {
    audio.play();
    mouse_move = false;
  }
});
left_p_navar.addEventListener("mousemove", function (event) {
  if (isClick) {
    mouse_move = true;
    audio.currentTime = (event.offsetX / this.clientWidth) * audio.duration;
    audio.pause();
  }
});
let isTuoch = false;
left_p_navar.addEventListener(
  "touchmove",
  function (event) {
    isTuoch = true;
    event.preventDefault();
    audio.currentTime =
      (event.changedTouches[0].pageX / this.clientWidth) * audio.duration;
    audio.pause();
  },
  { passive: false }
);
left_p_navar.addEventListener("touchend", function (event) {
  if (isTuoch && isPlay) {
    audio.play();
    isTuoch = false;
  }
});
// music ended
audio.addEventListener("ended", function () {
  if (isSHuffled) fanc_original_shuffled();
  else {
    isPlay = true;
    fanc_play();
  }
});
// window media 1100
const music_media = window.matchMedia("(max-width:1100px)");
music_media.addEventListener("change", (event) => chang_media(event.matches));
function chang_media(matches) {
  if (matches) {
    left_heart = $.querySelector(".left_heart2_reapansive i");
    left_heart.addEventListener("click", fanc_heart_color);
  } else {
    left_heart = $.querySelector(".left_heart i");
    left_heart.addEventListener("click", fanc_heart_color);
  }
  if (list_music_all[iteam_selected_id - 1].heart === "red")
    left_heart.classList.add("left_color_heart");
  else left_heart.classList.remove("left_color_heart");
}
if (music_media.matches) {
  $.querySelector(".section").style.height = window.innerHeight - 2 + "px";
}

//  fanc_cansle_playList
function fanc_cansle_playList() {
  $.querySelector(".musicKadr_right").classList.remove(
    "musicKadr_right_go_top"
  );
  $.querySelector(".musicKadr_left").classList.remove(
    "left_pointer_event_none"
  );
}

// fanc play list
function fanc_playList() {
  $.querySelector(".musicKadr_right").classList.add("musicKadr_right_go_top");
  $.querySelector(".musicKadr_left").classList.add("left_pointer_event_none");
}

// 3dot click 470
let isTouch_3dot = false;
let wich_3dot;
if (music_media.matches) {
  all_icone_3dot.forEach(function (iteam) {
    iteam.addEventListener("click", function (event) {
      if (!isTouch_3dot) {
        event.target.closest("button").nextElementSibling.style.display =
          "block";
        wich_3dot = event.target.closest("button").nextElementSibling;
        isTouch_3dot = true;
      } else {
        if (wich_3dot === event.target.closest("button").nextElementSibling) {
          event.target.closest("button").nextElementSibling.style.display =
            "none";
          isTouch_3dot = false;
        } else {
          wich_3dot.style.display = "none";
          event.target.closest("button").nextElementSibling.style.display =
            "block";
          wich_3dot = event.target.closest("button").nextElementSibling;
        }
      }
    });
  });
}
function animat_click_btn(event, fancPas) {
  if (music_media.matches) {
    event.classList.add("box_shado_animat_click");
    event.addEventListener("animationend", () => {
      event.classList.remove("box_shado_animat_click");
    });
  }
  setTimeout(() => {
    fancPas();
  }, 350);
}
// onload
window.onload = function () {
  list_music_chang_heart();
  right_all_iteam[0].click();
  if (music_media.matches) chang_media(music_media.matches);
  setTimeout(() => {
    $.querySelector(".section").style.display = "block";
    $.querySelector(".loader").style.display = "none";
  }, 500);
};
// event
left_heart.addEventListener("click", fanc_heart_color);

left_icone_play.addEventListener("click", () =>
  animat_click_btn(left_icone_play, fanc_play)
);

left_icone_pause.addEventListener("click", () =>
  animat_click_btn(left_icone_pause, fanc_play)
);

left_icone_next.addEventListener("click", () =>
  animat_click_btn(left_icone_next, !isSHuffled?fanc_next:fanc_original_shuffled)
);

left_icone_previous.addEventListener("click", () =>
  animat_click_btn(left_icone_previous, !isSHuffled?fanc_previous:fanc_original_shuffled)
);

left_btn_playList.addEventListener("click", () =>
  animat_click_btn(left_btn_playList, fanc_playList)
);

cansle_playList.addEventListener("click", () =>
  animat_click_btn(cansle_playList, fanc_cansle_playList)
);

left_icone_repeat.addEventListener("click", fanc_loop);
left_icone_shuffled.addEventListener("click", click_shuffled);
