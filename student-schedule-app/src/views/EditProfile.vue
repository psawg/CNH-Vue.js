<template>
  <div class="edit-wrapper">
    <div class="edit-card">

      <h1>Edit Profile</h1>

      <!-- Avatar -->
      <div class="avatar-box">
        <img :src="previewAvatar || userAvatar" class="avatar" />

        <input type="file" @change="uploadLocalPreview" />
      </div>

      <!-- Username -->
      <label>Username</label>
      <input v-model="username" type="text" class="input" />

      <button class="btn save" @click="saveProfile">Save Changes</button>
      <p class="msg">{{ message }}</p>

    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/supabaseClient";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const userAvatar = ref("");
const previewAvatar = ref(null);
const message = ref("");

const userId = ref(null);

// Lấy dữ liệu profile
onMounted(async () => {
  const { data } = await supabase.auth.getUser();
  userId.value = data.user.id;

  let { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId.value)
    .single();

  username.value = profile?.username || "";
  userAvatar.value = profile?.avatar_url || "/default-avatar.png";
});

// Tải ảnh để xem trước
const uploadLocalPreview = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  previewAvatar.value = URL.createObjectURL(file);
};

// Lưu thông tin
const saveProfile = async () => {
  message.value = "";

  // Nếu có ảnh mới thì upload lên Storage
  let avatarUrl = userAvatar.value;

  const fileInput = document.querySelector("input[type='file']");
  const file = fileInput.files[0];

  if (file) {
    const fileName = `${userId.value}-${Date.now()}`;

    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(fileName, file);

    if (!error) {
      avatarUrl = supabase.storage
        .from("avatars")
        .getPublicUrl(fileName).data.publicUrl;
    }
  }

  // Lưu vào bảng profiles
  const { error } = await supabase.from("profiles").upsert({
    id: userId.value,
    username: username.value,
    avatar_url: avatarUrl,
    updated_at: new Date(),
  });

  if (error) {
    message.value = "❌ Lỗi lưu dữ liệu!";
    return;
  }

  message.value = "✔ Lưu thành công!";
  setTimeout(() => router.push("/profile"), 800);
};
</script>


<style scoped>
.edit-wrapper {
  background: black;
  min-height: 100vh;
  padding-top: 50px;
  display: flex;
  justify-content: center;
}

.edit-card {
  width: 400px;
  background: #ff7f50;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  color: black;
  box-shadow: 0 0 20px rgba(255, 120, 60, 0.8);
}

h1 {
  font-family: Impact;
  font-size: 42px;
  margin-bottom: 15px;
}

.avatar-box {
  margin-bottom: 20px;
}

.avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 4px solid black;
  object-fit: cover;
  margin-bottom: 10px;
}

label {
  display: block;
margin: 10px 0 4px;
  font-weight: bold;
}

.input {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 2px solid black;
  margin-bottom: 15px;
}

.btn.save {
  width: 100%;
  padding: 12px;
  background: black;
  border: none;
  color: white;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.btn.save:hover {
  background: rgb(30, 30, 30);
  transform: scale(1.05);
}

.msg {
  margin-top: 10px;
  color: darkred;
  font-weight: bold;
}
</style>