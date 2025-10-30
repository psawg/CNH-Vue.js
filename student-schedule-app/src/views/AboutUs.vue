<template>
    <div id="aboutContent">
        <div id="titleAbout">
            <img src="@/assets/images/img_HostAndParticipants/AboutBackGround.png" alt="">     
        </div>

        <div class="Developer">
            <div id="Host1">
                <div id="imgHost1" class="card3d">
                    <img src="@/assets/images/img_HostAndParticipants/PhuocSang.jpg" alt="Host1">
                </div>
                <div id="infoHost1">
                    <h2>HOST & CREATOR</h2>
                    <p id="fistName">Phạm Đặng</p>
                    <p id="lastName">Phước Sang</p>
                </div>
            </div>

            <div id="Host1">
                <div id="imgHost1" class="card3d">
                    <img src="" alt="Host1">
                </div>
                <div id="infoHost1">
                    <h2>DEVELOPER</h2>
                    <p id="fistName">.....</p>
                    <p id="lastName">....."</p>
                </div>
            </div>
            <div id="Host1">
                <div id="imgHost1" class="card3d">
                    <img src="" alt="Host1">
                </div>
                <div id="infoHost1">
                    <h2>KOL</h2>
                    <p id="fistName">.....</p>
                    <p id="lastName">.....</p>
                </div>
            </div>    
            <div id="Host1">
                <div id="imgHost1" class="card3d">
                    <img src="" alt="Host1">
                </div>
                <div id="infoHost1">
                    <h2>DEVELOPER</h2>
                    <p id="fistName">.....</p>
                    <p id="lastName">.....</p>
                </div>
            </div>
            <div id="Host1">
                <div id="imgHost1" class="card3d">
                    <img src="" alt="Host1">
                </div>
                <div id="infoHost1">
                    <h2>DEVELOPER</h2>
                    <p id="fistName">.....</p>
                    <p id="lastName">.....</p>
                </div>
            </div>
        </div>       
    </div>
</template>


<script>
import { initAboutUs } from '@/assets/js/AboutUsJS.js'
export default {
  name: 'AboutUs',
  mounted() {
    initAboutUs();
  }
}
</script>





<style>
    @import "@/assets/css/AboutUs_PageCSS.css";
</style>