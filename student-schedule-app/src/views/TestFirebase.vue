<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const games = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "games"));
  games.value = querySnapshot.docs.map((doc) => doc.data());
});
</script>

<template>
  <div>
    <h2>🎮 Danh sách game từ Firebase</h2>
    <ul>
      <li v-for="(g, i) in games" :key="i">
        {{ g.title }} - {{ g.genre }}
      </li>
    </ul>
  </div>
</template>
