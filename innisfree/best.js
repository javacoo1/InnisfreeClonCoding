// 시간관련
function nowHours() {
  let today = new Date();
  let numHour = today.getHours();
  let hour = String(today.getHours());
  let amPm;

  if (numHour === 12) {
    amPm = "오후";
  } else if (numHour < 12) {
    amPm = "오전";
  } else {
    amPm = "오후";
    hour = String(numHour - 12);
  }

  const timeString = `${amPm} ${hour}시`;
  document.getElementById("timeDisplay").textContent = timeString;
}
// setInterval(nowHours, 100);
// nowHours();

// 실시간 베스트
function updateTime() {
  let today = new Date();
  let year = String(today.getFullYear());
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let date = String(today.getDate()).padStart(2, "0");
  let hour = String(today.getHours()).padStart(2, "0");
  let minute = String(today.getUTCMinutes()).padStart(2, "0");

  const timeString = `${year}.${month}.${date} ${hour}:${minute}`;
  document.getElementById("nowTime").textContent = timeString;
}
// setInterval(updateTime, 1000);
// updateTime();

// 주간 베스트
function duringTime() {
  let today = new Date();
  let year = String(today.getFullYear());
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let date = String(today.getDate()).padStart(2, "0");
  let date2 = String(today.getDate() - 7).padStart(2, "0");

  // 첫번째 꺼를 -7
  const timeString2 = `${year}.${month}.${date2} ~ ${year}.${month}.${date}`;
  document.getElementById("week").textContent = timeString2;
}
// setInterval(duringTime, 1000);
// duringTime();

function changeTab(button, url) {
  // 모든 li에서 active 제거
  const tabs = document.querySelectorAll(".tabBar ul li");
  tabs.forEach((tab) => tab.classList.remove("active"));

  // 클릭된 버튼의 부모 li에 active 추가
  const parentLi = button.parentElement;
  parentLi.classList.add("active");

  // 페이지 이동
  location.href = url;
}

// 새로운 추천을 받고 싶어요.
// const recomms = document.querySelectorAll(".product_list01 li");
// const pages = document.querySelectorAll(".countPage span");
// let nowIndex = 0;

// function movePageForu() {
//   // 모든 슬라이드에서 active 제거
//   recomms.forEach((product) => product.classList.remove("active"));
//   //  해당 인덱스에 active 추가
//   if (pages === 1) {
//     for (let index = 7; index <= 12; index++) {
//       recomms[index].classList.add("active");
//     }
//   } else if (pages === 2) {
//     for (let index = 13; index <= 18; index++) {
//       recomms[index].classList.add("active");
//     }
//   } else {
//     for (let index = 1; index <= 6; index++) {
//       recomms[index].classList.add("active");
//     }
//   }
// }

// 누른 상품 저장 (쇼핑로그에서 사용할 것)
// const saveItem = document.getElementsByClassName("item");
// saveItem.addEventListener("click", save);

// function save() {
//   const savedItem = saveItem;
// }

// 구현필요
// best
// fnChkLoginPagePopAlert();
// openPreview("37697", "POPCART");

// forme
// locDepList();
// lconfirm(
//   "로그인이 필요한 기능입니다.\n로그인 하시겠습니까?",
//   "$.jhead.fnChkLoginPagePop()"
// );
// schSlide("close");
// schSlide();
// fnChkLoginPagePopAlert();
// jjimReSwipe();
// openPreview("37403", "POPCART");
// setStorage("rec", "#탄력저하개선");
// movePageForu(this, "skinTrub2List", "18", "6");
// getGnrtKeywordList("all");
// layerOpen("popShopLog");

//페이지 이동 처리
// function $(sel) {
//   return document.getElementById(sel);
// }

// function movePageForu(sel, liSel, listSize, limitDisplay, limitPage) {
//   var pageNum = $(sel).parent().find("input#startPage").val();
//   var limitNum = $(sel).parent().find("input#limitPage").val();

//   if (pageNum < limitNum) {
//     $(sel)
//       .parent()
//       .find("input#startPage")
//       .val(Number(pageNum) + 1);
//     pageNum = Number(pageNum) + 1;
//     var pageNumTxt = pageNum + "<span> / " + limitPage + "</span>";
//     $(sel).children("span:eq(0)").html(pageNumTxt);
//   } else {
//     $(sel).parent().find("input#startPage").val("1");
//     pageNum = 1;
//     var pageNumTxt = pageNum + "<span> / " + limitPage + "</span>";
//     $(sel).children("span:eq(0)").html(pageNumTxt);
//   }

//   for (var i = 1; i < Number(listSize) + 1; i++) {
//     if (
//       (pageNum - 1) * Number(limitDisplay) < i &&
//       pageNum * Number(limitDisplay) >= i
//     ) {
//       $("#" + liSel + i).css("display", "inline-block");
//     } else {
//       $("#" + liSel + i).css("display", "none");
//     }
//   }
// }

// function movePageForu() {

// }

// function movePageForu(button, listId, currentPage, totalPage) {
//   const targetList = document.getElementById(listId);
//   if (!targetList) {
//     console.error(`Element with id ${listId} not found`);
//     return;
//   }

//   // 페이지 변경 로직
//   const nextPage = (parseInt(currentPage) + 1) % totalPage;
//   button.querySelector(".countPage span").textContent = nextPage;

//   // AJAX 요청 시뮬레이션
//   fetch(`/api/recommendations?page=${nextPage}`)
//     .then((response) => response.json())
//     .then((data) => {
//       targetList.innerHTML = ""; // 기존 목록 초기화
//       data.items.forEach((item) => {
//         const listItem = document.createElement("li");
//         listItem.textContent = item.name; // 예시로 데이터 이름 사용
//         targetList.appendChild(listItem);
//       });
//     })
//     .catch((error) => console.error("Error fetching recommendations:", error));
// }

// 추천전환
function toggleDisplay() {
  document.querySelector(".swiper-slide");
  for (let index = 1; index <= 6; index++) {
    const element = document.getElementById("skinTrub1List" + index);
    if (element.style.display === "none") {
      element.style.display = "inline-block";
    } else {
      element.style.display = "none";
    }
  }
}

// 슬라이드
// const slider = document.querySelector(
//   ".slide swiper-container-initialized swiper-container-horizontal swiper-container-autoheight"
// );
// const sliderTrack = document.querySelector(".product_list01 swiper-wrapper");
// const slides = document.querySelectorAll(".nail");

// let isDragging = false;
// let startPos = 0;
// let currentTranslate = 0;
// let prevTranslate = 0;
// let currentIndex = 0;

// slider.addEventListener("mousedown", dragStart);
// slider.addEventListener("mousemove", dragMove);
// slider.addEventListener("mouseup", dragEnd);

// slider.addEventListener("touchstart", dragStart);
// slider.addEventListener("touchmove", dragMove);
// slider.addEventListener("touchend", dragEnd);

// function dragStart(event) {
//   isDragging = true;
//   startPos = getPositionX(event);
//   sliderTrack.style.transition = "none";
// }

// function dragMove(event) {
//   if (!isDragging) return;
//   const currentPosition = getPositionX(event);
//   currentTranslate = prevTranslate + currentPosition - startPos;
//   sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
// }

// function dragEnd() {
//   isDragging = false;
//   const movedBy = currentTranslate - prevTranslate;

//   if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex++;
//   if (movedBy > 100 && currentIndex > 0) currentIndex--;

//   setPositionByIndex();
// }

// function getPositionX(event) {
//   return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
// }

// function setPositionByIndex() {
//   currentTranslate = currentIndex * -window.innerWidth;
//   prevTranslate = currentTranslate;
//   sliderTrack.style.transition = "transform 0.3s ease";
//   sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
// }

// 버튼 누르면 하트 색 채워짐
// document
//   .getElementsByClassName("btnHeart")
//   .addEventListener("click", function () {
//     const imgElement = document.getElementsByClassName("btnHeart");

//     if (imgElement.src.includes("../images/ui/icon_heart_white.png")) {
//       imgElement.src = "../images/ui/icon_heart_on.png";
//     } else {
//       imgElement.src = "../images/ui/icon_heart_white.png";
//     }
//   });

// 위에꺼 안됨
// const heart = document.getElementsByClassName("btnHeart");

// function fnChkLoginPagePopAlert(heart) {
//   if (heart.classList.contains("active")) {
//     heart.classList.remove("active");
//   } else {
//     heart.classList.add("active");
//   }
// }
