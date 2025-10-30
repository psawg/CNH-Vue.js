<template>
     <div id="intro" class="intro">
      <img src="@/assets/images/SectionLogo.png" alt="Logo" class="logo" />
    </div>

    <header>
      <Header />
    </header>
    <main class="scrollbar">
      
      <router-view></router-view>
      <Footer />
    </main>
    
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

// ✅ import trực tiếp các hàm JS dạng module (thay vì load script HTML)
import { initScrollbar } from "@/assets/js/scrollbarJS.js"
import { initIntro } from "@/assets/js/introJS.js"

export default {
  name: "App",
  components: { Header, Footer },

  mounted() {
    // ✅ chạy các hàm khởi tạo JS cũ khi Vue đã render xong
    initScrollbar()
    initIntro()
  }
}
</script>

<style scoped>
@import "/src/assets/css/IntroCSS.css";
@import "/src/assets/css/ScrollbarCSS.css";
</style>


