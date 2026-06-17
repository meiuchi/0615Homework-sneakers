
// 変数宣言
// ハンバーガーメニュー
const hamburgerMenu = document.querySelector('.hamburgermenu');

// ハンバーガーがクリックされた時に表示されるメニュー画面
const nav = document.querySelector('#hamburgermenu-navigation');

// ハンバーガーメニュー内の各セクションの要素
const overlay= document.querySelector('.nav-overlay');

// ボタンをクリックしたとき
hamburgerMenu.addEventListener('click',() =>{
  hamburgerMenu.classList.toggle('active');
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
});

//半透明の黒いところも削除してもらう 
overlay.addEventListener('click',() =>{
  hamburgerMenu.classList.remove('active');
  nav.classList.remove('active');
  overlay.classList.remove('active');
});

// メニュー内にあるリンクを一斉に取得する
const menuLinks = document.querySelectorAll('.nav-list a');
// 取得したリンクを見張る
menuLinks.forEach((link) =>{
  link.addEventListener('click',() => {
    hamburgerMenu.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
  });
});


// pickupエリア写真スライダー
// swiper初期化
const swiper = new Swiper('.my-slider', {
  loop: true,                 /* 無限にループさせる */
  centeredSlides: true,       /* アクティブな画像を中心に表示する */
  slidesPerView: 2,           /* スマホ（基本）のときは1枚だけ見せる */
  spaceBetween:40,
  

  // 自動再生の設定
  autoplay: {
    delay: 2000,            /* 2秒ごとに次のスライドへ */
    disableOnInteraction: false, /* ユーザーが手動で触っても自動再生を止めない */
  },

  // 【ここが超重要！】画面の横幅に合わせて見た目を変える設定
  breakpoints: {
    // 画面幅が 768px 以上（パソコン・タブレット）になったら
    768: {
      slidesPerView: 3.5,     /*  1.5枚見せる（＝真ん中に1枚、両端に0.25枚ずつ見せる） */
      spaceBetween: 60,       /* PCのときはすき間を少し広げて60pxに */
    },
  },
});


// 写真をふわっと出すやつ
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
},{
  rootMargin:'-10% 0px'
});

const fadeElements = document .querySelectorAll('.card-image');
fadeElements.forEach((el) => observer.observe(el));