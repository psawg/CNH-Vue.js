<template>
  <div class="profile-wrapper">

    <!-- Hộp thông tin user -->
    <div class="profile-card">
      <img class="avatar" src="@/assets/images/icon_logoHome.png" />

      <h1 class="username">User Profile</h1>

      <p><strong>Email:</strong> {{ userData?.email }}</p>
      <p><strong>User ID:</strong> {{ userData?.id }}</p>

      <div class="btn-group">
        <button class="btn edit" @click="editProfile">Edit Profile</button>
        <button class="btn logout" @click="logout">Logout</button>
      </div>
    </div>

    <!-- Các chức năng tài khoản -->
    <div class="profile-section">
      <h2>Account Settings</h2>
      <ul>
        <li @click="changePassword">Change Password</li>
        <li>Privacy & Security</li>
        <li>Connected Accounts</li>
        <li>Notification Settings</li>
      </ul>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { supabase } from "@/supabaseClient"
import { useRouter } from "vue-router"

const router = useRouter()
const userData = ref(null)

onMounted(async () => {
  const { data } = await supabase.auth.getUser()
  userData.value = data.user
})

const logout = async () => {
  await supabase.auth.signOut()
  router.push("/login")
}

const editProfile = () => {
  router.push("/editprofile")
}

const changePassword = () => {
  alert("Supabase hỗ trợ gửi email reset. Bạn muốn tôi làm luôn không?")
}
</script>

<style scoped>
.profile-wrapper {
  width: 100%;
  padding: 40px 0;
  background-color: #000; /* đồng bộ theme */
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Hộp user info */
.profile-card {
  width: 380px;
  background-color: #ff7f50; 
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 18px rgba(255, 139, 75, 0.7);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: white;
  margin-bottom: 10px;
}

.username {
  font-family: Impact, sans-serif;
  margin-bottom: 10px;
}

/* Nút */
.btn-group {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 15px;
}

.btn {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
}

.edit {
  background: black;
  color: white;
}

.logout {
  background: rgb(255, 60, 60);
  color: white;
}

.btn:hover {
  transform: scale(1.07);
}


/* Section chức năng */
.profile-section {
  margin-top: 40px;
  width: 380px;
  background-color: #111;
  padding: 20px 30px;
  border-radius: 12px;
  border: 2px solid #ff7f50;
}

.profile-section h2 {
  color: #ff7f50;
  font-family: Impact;
  margin-bottom: 10px;
}

.profile-section ul {
  list-style: none;
  padding: 0;
}

.profile-section li {
  padding: 12px 0;
  border-bottom: 1px solid #444;
  cursor: pointer;
  transition: 0.2s;
}

.profile-section li:hover {
  color: #ff7f50;
  transform: translateX(5px);
}
</style>