<template>
   <main>
        <div class="content">
            <div class="topContent">
                <video id="backgroundVideo" autoplay loop muted>
                    <source src="/assets/vid/GTA_VI_trailer.mp4" type="video/mp4">
                </video>
        
                <div class="overlay">
                    <div class="mainLogo">
                        <img src="@/assets/images/img_page_GTA_VI/logoGTA.png" alt="">
                        <div class="paragraph">
                            <p>
                                Grand Theft Auto VI heads to the state of Leonida, home to the neon-soaked streets of Vice City 
                                and beyond in the biggest, most immersive evolution of the Grand Theft Auto series yet. Coming 
                                2025 to PlayStation 5 and Xbox Series X|S.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-wrapper">
            <!-- Tạo button cuộn trang
            <button onclick="scrollToTop()" id="scrollToTopBtn">
                UP
                <i class="fa-regular fa-circle-up"></i>
            </button> -->

            <!-- Tên game -->
            <section id="info-game-container">
                        <h1 style="color: brown; font-weight: bold;">Grand Theft Auto VI</h1>
            </section>
            <section id="paragraph">
                <h1>About Game</h1>
                <p>
                    Grand Theft Auto VI is an upcoming electronic game in the action-adventure genre developed by Rockstar Games. 
                    This is the eighth original installment in the Grand Theft Auto game series, following Grand Theft Auto V (2013), 
                    and the sixteenth overall in the franchise. Set in the fictional state of Leonida (based on Florida), the story 
                    will revolve around the criminal duo Lucia and her accomplices.
                </p>
            </section>

            <section id="paragraph">
                <h1>Features</h1>
                <p>
                    Genres: Action game, Open world, Nonlinear gameplay
                </p>

                <p>
                    GTA 6 will be coming to PS5 and Xbox Series X/S when it arrives. The news came by way of an official press release 
                    from Take Two, which states that: "GTA 6 is coming to PlayStation 5 computer entertainment systems and Xbox Series 
                    X|S games and entertainment systems in 2025
                </p>
            </section>
            
            <!-- Slideshow container -->
            <div class="slideshow-container">

            <!--fullwidth ảnh với number text -->
                <div class="mySlides">
                    <div class="numbertext">1 / 6</div>
                    <img src="@/assets/images/img_page_GTA_VI/GTA_1.jpg" style="width:100%">
                </div>
            
                <div class="mySlides">
                  <div class="numbertext">2 / 6</div>
                  <img src="@/assets/images/img_page_GTA_VI/GTA_5.jpg" style="width:100%">
                </div>
            
                <div class="mySlides">
                  <div class="numbertext">3 / 6</div>
                  <img src="@/assets/images/img_page_GTA_VI/GTA_2.jpg" style="width:100%">
                </div>

                <div class="mySlides">
                    <div class="numbertext">4 / 6</div>
                    <img src="@/assets/images/img_page_GTA_VI/GTA_4.jpg" style="width:100%">
                </div>

                <div class="mySlides">
                    <div class="numbertext">5 / 6</div>
                    <img src="@/assets/images/img_page_GTA_VI/GTA_6.jpg" style="width:100%">
                </div>

                <div class="mySlides">
                    <div class="numbertext">6 / 6</div>
                    <img src="@/assets/images/img_page_GTA_VI/GTA_3.jpg" style="width:100%">
                </div>
            
                <!-- Next and previous buttons -->
                <a class="prev" onclick="plusSlides(-1)">❮</a>
                <a class="next" onclick="plusSlides(1)">❯</a>
            
                <div class="caption-container">
                    <p id="caption"></p>
                </div>
                
                <div class="row">
                    <div class="column">
                        <img class="demo" src="@/assets/images/img_page_GTA_VI/GTA_1.jpg" style="width:100%" onclick="currentSlide(1)" alt="">
                    </div>
                    <div class="column">
                        <img class="demo" src="@/assets/images/img_page_GTA_VI/GTA_5.jpg" style="width:100%" onclick="currentSlide(2)" alt="">
                    </div>
                    <div class="column">
                        <img class="demo" src="@/assets/images/img_page_GTA_VI/GTA_2.jpg" style="width:100%" onclick="currentSlide(3)" alt="">
                    </div>
                    <div class="column">
                        <img class="demo" src="@/assets/images/img_page_GTA_VI/GTA_4.jpg" style="width:100%" onclick="currentSlide(4)" alt="">
                    </div>
                    <div class="column">
                        <img class="demo" src="@/assets/images/img_page_GTA_VI/GTA_6.jpg" style="width:100%" onclick="currentSlide(5)" alt="">
                    </div>
                    <div class="column">
                        <img class="demo" src="@/assets/images/img_page_GTA_VI/GTA_3.jpg" style="width:100%" onclick="currentSlide(6)" alt="">
                    </div>
                </div>
                
                <h6>Một số hình ảnh trong game</h6>
            </div>
            
            <section id="sign">
          
  
                <div class="star-wrapper">
                    <a href="#" class="fas fa-star s1"></a>
                    <a href="#" class="fas fa-star s2"></a>
                    <a href="#" class="fas fa-star s3"></a>
                    <a href="#" class="fas fa-star s4"></a>
                    <a href="#" class="fas fa-star s5"></a>
                </div>
            </section>
            
            <section id="another-blog">
                <h1 style="color: brown;">Các bài đăng khác</h1>
                    <div class="another-blog-content">
                        <a href="/page/RedDead_Page.html">
                            <img src="@/assets/images/img_news/RDR2.jpg" alt="another-blog">
                            <h6>Review Red Dead Redemption 2 : Gã cao bồi hết thời và hành trình đi tìm bản ngã</h6>
                        </a>
                        <a href="/page/GTA_V_Page.html">
                            <img src="@/assets/images/img_news/GTA5.jpg" alt="another-blog">
                            <h6>Tất tần tật về GTA 5: Trailer trình làng sớm hơn dự kiến sau 1 thập kỷ chờ đợi</h6>
                        </a>
                        <a href="/page/ARK.html">
                            <img src="@/assets/images/img_news/ARK.jpg" alt="another-blog">
                            <h6>ARK: Survival Evolved Review</h6>
                        </a>
                    </div>
            </section>
        </div>
    </main>
</template>

<script setup>
import { onMounted } from "vue"

// giữ nguyên slideshow của bạn y chang
let slideIndex = 1

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i
    const slides = document.getElementsByClassName("mySlides")
    const dots = document.getElementsByClassName("demo")
    const captionText = document.getElementById("caption")

    if (!slides.length) return

    if (n > slides.length) slideIndex = 1
    if (n < 1) slideIndex = slides.length

    for (i = 0; i < slides.length; i++) slides[i].style.display = "none"
    for (i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "")

    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += " active"
    captionText.innerHTML = dots[slideIndex-1].alt
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

const thumbs = [
  "@/assets/images/img_page_GTA_VI/GTA_1.jpg",
  "@/assets/images/img_page_GTA_VI/GTA_5.jpg",
  "@/assets/images/img_page_GTA_VI/GTA_2.jpg",
  "@/assets/images/img_page_GTA_VI/GTA_4.jpg",
  "@/assets/images/img_page_GTA_VI/GTA_6.jpg",
  "@/assets/images/img_page_GTA_VI/GTA_3.jpg"
]

onMounted(() => {
    slideIndex = 1
    showSlides(slideIndex)
})
</script>

<style scoped>
main {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    background-color: black;
    font-family: Arial, Helvetica, sans-serif;
}

body {

}

p {
    color: white;
}

/* UTILITY */
* {
    box-sizing: content-box;
}
  
.content {
    padding-top: 6em;
    overflow: hidden;
    width: 100%;
}
  
/* TOP CONTAINER */
.topContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
}
  
#backgroundVideo {
    position: relative;
    left: 10%;
    width: 100%;
    opacity: 1;
}
  
.overlay {
    box-sizing: border-box;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    align-items: start;
    justify-content: flex-start;
    z-index: 1;
    background: linear-gradient(
        to right,
        rgb(0, 0, 0, 1) 10%,
          rgba(0, 0, 0, 0) 100%
    ); /* Màu nền của lớp chữ ghi đè */
}

.mainLogo {
    position: relative;
    top: 2em;                   /* Thay đổi vị trí phía trên */
    left: 4em;                  /* Thay đổi vị trí bên trái */
    width: max-content;
}
  
.mainLogo img {
    transition: 0.1s ease;
    width: 50vw;                /* Thay đổi kích cỡ ảnh */
    max-width: 500px;
    
}

.paragraph {
    width: auto;
}

.paragraph p {
    transition: 0.1s ease;
    width: 55vw;
    max-width: 650px;
    color: white;
    font-size: 2em;
    margin: 0;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
  
/* MID CONTAINER */
.midContent {
    height: auto;
    background-color: black;
}

/* macro flex */
.content-wrapper {
    /* background-color: rgb(246, 205, 183); */
    background: linear-gradient(to right, rgb(255, 139, 75) 0%, black 5%, black 95%, rgb(255, 139, 75) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin: 0 auto; */
    /* width: 80%; */
    padding: 15px 10vw;
}

#info-game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* ảnh banner trên cùng */
#banner-image img {
    width: 100%;
}

/* trang trí chữ minecraft */
#paragraph h1 {
    color: brown;
    font-weight: bold;
}


/* slide show ở đây*/
img {
    vertical-align: middle;
}

/*cai dat vi tri cho 2 nut trai phai*/
.slideshow-container {
    position: relative;
}

/*Hide anh*/
.mySlides {
    display: none;
}

.mySlides:first-child {
    display: block;
  }

/*add ngon tro*/
.cursor {
    cursor: pointer;
}

/*Nút trước và sau*/
.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 40%;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
}

/*đưa vị trí nút next qua phải*/
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

/*Tô đen nút chuyển ảnh khi đưa chuột vào*/
.prev:hover,
.next:hover {
    background-color: rgb(0, 0, 0);
}

/* Number text */
.numbertext {
    color: #ffffff;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}

/* Container image text */
.caption-container {
    text-align: center;
    background-color: rgb(0, 0, 0);
    padding: 2px 16px;
    color: rgb(255, 255, 255);
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

/*dat 6 cot ke nhau*/
.column {
    float: left;
    width: 16.66%;
}

/*tao hieu ung cho anh chinh */
.demo {
    opacity: 0.6;
}

.active,
.demo:hover {
    opacity: 1;
}

.slideshow-container h6 {
    /* dem chu thich len gan slideshow */
    margin-top: 5px; 
    /* dem chu thich ra giua */
    text-align: center;
    /* chon size nho */
    font-size: small;
    /* chinh mau chu */
    color: rgb(103, 103, 103);
}

/* lam chu ky wavy */
#sign a {
    position: relative;
    display: inline-block;
    transition: color 0.3s;
}
#sign a:hover {
    color: brown;
    animation: wavyText 0.6s ease-in-out infinite;
}
@keyframes wavyText {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0);
    }
}

/* nut cuon len dau trang */
/* #scrollToTopBtn {
    position: fixed;
    z-index: 1; 
    right: 10px;
    top: 90%;
    background-color: rgba(255, 138, 75, 0.83);
    border-radius: 5px;
    padding: 1%;
    cursor: pointer;
} */

/* another blog contain */
.another-blog {
    /* height: 900px; */
}

.another-blog-content {
    display: flex;
    justify-content: space-between;
}

.another-blog-content a {
    display: flex;
    /* doi huong flex de anh o tren va tieu de o duoi */
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: black;
    color: white;
    width: 30%;
    height: auto;
}

.another-blog-content img {
    width: 100%;
    height: auto;
}   

.another-blog-content a img {
    top: 0;
    max-width: 100%;
    height: 470px;
    object-fit: contain;
}

/* hieu ung chuyen background cho bai viet khac */
.another-blog-content h6:hover {
    color: brown;
}

/* rating */
#star-rating {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
}

.star-wrapper {
    direction: rtl;
}

.star-wrapper a {
    font-size: 1em;
    color: #fff;
    text-decoration: none;
    transition: all 0.5s;
    margin: 4px;
}

.star-wrapper a:hover {
    color: brown;
    transform: scale(1.3);
}

.s1:hover ~ a {
    color: brown;
}

.s2:hover ~ a {
    color: brown;
}

.s3:hover ~ a {
    color: brown;
}

.s4:hover ~ a {
    color: brown;
}

.s5:hover ~ a {
    color: brown;
}
</style>
