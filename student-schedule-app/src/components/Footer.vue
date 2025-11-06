<template>
     <div id="Footer">
      <div id="leftFooter">
        <div id="logoFooter">
          <img
            src="@/assets/images/icon_LogoHome.png"
            alt="LogoHome"
            onclick="redirectToNewPage()"/>
        </div>

        <div id="footerContent">
          <div id="content1">
            <p class="about"><router-link to="/aboutus">ABOUT</router-link></p>
            <p id="privacy"><a href="#">PRIVACY</a></p>
          </div>
          <div id="content2">
            <p id="contact"><a href="">CONTACT</a></p>
            <p id="faq"><a href="#">FAQ</a></p>
          </div>
        </div>
      </div>

      <div id="rightFooter">
        <div id="tag"><h2>FOLLOW US</h2></div>
        <div id="iconContact">
          <ul id="content4">
            <li><img src="@/assets/images/icon_facebook.png" alt="" /></li>
            <li><img src="@/assets/images/icon_instagram.png" alt="" /></li>
            <li><img src="@/assets/images/icon_youtube.png" alt="" /></li>
          </ul>
          <ul id="content5">
            <li><img src="@/assets/images/icon_discord.png" alt="" /></li>
            <li><img src="@/assets/images/icon_tiktok.png" alt="" /></li>
            <li><img src="@/assets/images/icon_twitter.png" alt="" /></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="copyrightFooter">
      <div id="content3"><h6>© 2025 All Of Games</h6></div>
    </div>
</template>

<style>
    @import "@/assets/css/FooterCSS.css";
</style>  