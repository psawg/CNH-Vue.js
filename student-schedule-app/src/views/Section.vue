<template>
  <div class="content">
    <!-- Top Content -->
    <div class="topContent">
      <video id="backgroundVideo" autoplay loop muted>
        <source src="" type="video/mp4" />
      </video>

      <div class="overlay">
        <div class="mainLogo">
          <img src="@/assets/images/icon_mainSectionlogo.png" alt="Main Logo" />
          <div class="paragraph">
            <p>
              Discover the ultimate gaming hub for the latest news and updates on newly released games.
              <br />
              Stay informed and entertained with our comprehensive coverage of the gaming world.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mid Content -->
    <div class="midContent" id="midContent">
      <div class="Hero">
        <!-- Marquee -->
        <div class="marquee">
          <p>
            <span>NEWS -</span>
            <span>NEWS -</span>
            <span>NEWS -</span>
            <span>NEWS -</span>
            <span>NEWS -</span>
            <span>NEWS -</span>
            <span>NEWS -</span>
            <span>NEWS -</span>
          </p>
        </div>

        <!-- Content -->
        <div class="main1_content">
          <div class="newsContent">
            <div class="newsList">
              <div class="newsItem">
                <a href="/page/Minecraft_Page.html">
                  <img src="@/assets/images/img_page_Minecraft/minecraft_banner.png" alt="Minecraft" />
                  <h3>Minecraft</h3>
                </a>
              </div>

              <div class="newsItem">
                <img src="@/assets/images/img_news/resident_evil.jpg" alt="Resident Evil 8" />
                <h3>Resident Evil 8</h3>
              </div>

              <div class="newsItem">
                <a href="/page/GTA_V_Page.html">
                  <img src="@/assets/images/img_news/GTA5.jpg" alt="GTA 5" />
                  <h3>Grand Theft Auto V</h3>
                </a>
              </div>

              <div class="newsItem">
                <a href="/page/ARK.html">
                  <img src="@/assets/images/img_news/ARK.jpg" alt="ARK" />
                  <h3>ARK : Survival Evolved</h3>
                </a>
              </div>

              <div class="newsItem">
                <a href="/page/RedDead_Page.html">
                  <img src="@/assets/images/img_news/RDR2.jpg" alt="Red Dead Redemption 2" />
                  <h3>Red Dead Redemption 2</h3>
                </a>
              </div>

              <div class="newsItem">
                <a href="/page/Cyberpunk_2077.html">
                  <img src="@/assets/images/img_news/Cyberpunk.jpg" alt="Cyberpunk 2077" />
                  <h3>Cyberpunk 2077</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Content -->
    <div class="botContent" id="botContent">
  <table class="logo-table">
    <tbody>
      <tr>
        <td>
          <a href="https://www.playstation.com/en-gb/games/bloodborne/">
            <img src="@/assets/images/logo_of_game/logo_bloodborne.png" alt="Bloodborne" />
          </a>
        </td>
        <td>
          <a href="https://deltarune.com/">
            <img src="@/assets/images/logo_of_game/logo_deltarune.png" alt="Deltarune" />
          </a>
        </td>
        <td>
          <a href="https://www.supergiantgames.com/games/hades/">
            <img src="@/assets/images/logo_of_game/logo_hades.png" alt="Hades" />
          </a>
        </td>
        <td>
          <a href="https://www.hollowknight.com/">
            <img src="@/assets/images/logo_of_game/logo_hollow_knight.png" alt="Hollow Knight" />
          </a>
        </td>
      </tr>

      <tr>
        <td>
          <a href="https://www.monsterhunter.com/">
            <img src="@/assets/images/logo_of_game/logo_monster_hunter.png" alt="Monster Hunter" />
          </a>
        </td>
        <td>
          <a href="https://www.stardewvalley.net/">
            <img src="@/assets/images/logo_of_game/logo_stardew_valley.png" alt="Stardew Valley" />
          </a>
        </td>
        <td>
          <a href="https://stray.game/">
            <img src="@/assets/images/logo_of_game/logo_stray.png" alt="Stray" />
          </a>
        </td>
        <td>
          <a href="https://undertale.com/">
            <img src="@/assets/images/logo_of_game/logo_undertale.png" alt="Undertale" />
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

  </div>
</template>

<script>
import { initSection } from '@/assets/js/sectionJS.js'

export default {
  name: 'Section',
  mounted() {
    initSection()
  }
}
</script>


<style >
    @import "@/assets/css/SectionCSS.css";
    @import "@/assets/css/SectionCSS_Responsive.css";
</style>
