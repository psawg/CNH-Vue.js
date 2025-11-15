<template>
  <div class="main">
    <div class="content">
      
      <!-- Avatar + title -->
      <div class="avatar">
        <img src="@/assets/images/icon_logoHome.png" alt="avatar">
        <h1>Create Account</h1>
      </div>

      <!-- FORM -->
      <div class="login">
        <form @submit.prevent="handleRegister">
          
            <input v-model="username" type="text" placeholder="Username" required />
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <input v-model="confirmPassword" type="password" placeholder="Confirm Password" required />
            <input type="submit" name="continueButton" value="Sign Up" class="login__signInButton" style="width: 150px;height: 30px;margin-left: auto;margin-right: auto;border: 2px solid black;border-radius: 10px;color: white;background-color: red;font-weight: bolder;font-size: 17px;">

        </form>

        <p style="color:red; font-weight:bold">{{ errorMessage }}</p>
        <p style="color:green; font-weight:bold">{{ successMessage }}</p>

      </div>

      <p>Already have an account?</p>
      <router-link to="/login" style="font-weight:bold">Login Now</router-link>

      <div style="font-size: small; margin-top:10px;">
        Copyright © 2025. AllOfGames.
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { supabase } from "@/supabaseClient";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const errorMessage = ref("");
const successMessage = ref("");

const handleRegister = async () => {
  errorMessage.value = "";
  successMessage.value = "";

  if (password.value !== confirmPassword.value) {
    errorMessage.value = "❌ Mật khẩu xác nhận không trùng khớp!";
    return;
  }

  // Gọi Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        username: username.value // lưu username vào metadata
      }
    }
  });

  if (error) {
    errorMessage.value = "❌ Email đã tồn tại hoặc không hợp lệ!";
    return;
  }

  successMessage.value = "✔ Tạo tài khoản thành công! Đang chuyển hướng...";

  setTimeout(() => {
    router.push("/login");
  }, 1500);
};
</script>

<style scoped>
@import "@/assets/css/LoginCSS.css";
</style>
