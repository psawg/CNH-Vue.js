<template>
  <div class="main">
    <div class="content">
      <div class="avatar">
        <img src="@/assets/images/icon_logoHome.png" alt="avatar">
        <h1>Login</h1>
      </div> 

      <div class="login">
        <form @submit.prevent="handleLogin">
          <input v-model="email" type="email" placeholder="Email" required />
          <input v-model="password" type="password" placeholder="Password" required />
          <input type="submit" name="continueButton" value="Continue" class="login__signInButton" style="width: 150px;height: 30px;margin-left: auto;margin-right: auto;border: 2px solid black;border-radius: 10px;color: white;background-color: red;font-weight: bolder;font-size: 17px;">

        </form>

        <p style="color:red; font-weight:bold">{{ errorMessage }}</p>
      </div>

      <p>Or Login With</p>

      <div class="logo">
        <div class="logoimg"><img src="@/assets/images/icon_facebook.png" alt="facebook"></div>
        <div class="logoimg"><img src="@/assets/images/icon_discord.png" alt="discord"></div>
        <div class="logoimg"><img src="@/assets/images/icon_instagram.png" alt="instagram"></div>
      </div>

      <router-link to="/register" style="font-weight:bold">Sign Up</router-link>

      <div style="font-size: small;">
        Copyright © 2025. AllOfGames.
      </div>
    </div>
  </div>
</template>



<style scoped>
    @import "@/assets/css/LoginCSS.css";
      
</style>


<script setup>
import { ref } from "vue"
import { supabase } from "@/supabaseClient"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const errorMessage = ref("")

const router = useRouter()

const handleLogin = async () => {
  errorMessage.value = ""

  console.log("📩 Email:", email.value)
  console.log("🔑 Password:", password.value)

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (error) {
    errorMessage.value = "❌ Sai tài khoản hoặc mật khẩu!"
    return
  }

  console.log("✅ Đăng nhập thành công:", data)

  router.push("/")
}
</script>
