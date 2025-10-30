<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const games = ref([]);
const error = ref(null);
const loading = ref(true);

onMounted(async () => {
  try {
    console.log("🔍 Fetching Firestore collection: games...");
    const querySnapshot = await getDocs(collection(db, "games"));

    if (querySnapshot.empty) {
      console.warn("⚠️ Firestore: Không có dữ liệu trong collection 'games'.");
    }

    games.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("✅ Fetched:", games.value);
  } catch (err) {
    console.error("🔥 Firestore error:", err);
    error.value = err.message || "Lỗi khi tải dữ liệu từ Firestore.";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="firebase-test">
    <h2>🎮 Danh sách game từ Firebase</h2>

    <p v-if="loading">⏳ Đang tải dữ liệu...</p>
    <p v-else-if="error" style="color:red;">❌ {{ error }}</p>

    <ul v-else>
      <li v-for="(g, i) in games" :key="i">
        {{ g.title || "Chưa có tên" }} - {{ g.genre || "Không rõ thể loại" }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.firebase-test {
  padding: 1rem;
  color: black;
  background-color: #fffbe6;
  border-radius: 8px;
}
</style>
