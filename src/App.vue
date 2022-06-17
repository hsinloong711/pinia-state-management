<script setup>
import { ref } from "vue";
import { useCounterStore } from "./stores/counter";

let cat = ref("true");

const handleClick = async () => {
  cat.value = false;
  setTimeout(() => {
    console.log("done1");
    cat.value = true;
  }, 2300);
};

const store = useCounterStore();
store.count++;
</script>

<template>
  <img
    v-if="!cat"
    src="/src/assets/cat.gif"
    alt="cat"
    height="200"
    width="200"
  />

  <img
    v-if="cat"
    src="/src/assets/cat.png"
    alt="cat"
    height="200"
    width="200"
  />

  <h1>Lucky Cat is here!</h1>
  <h1>Press the button for Good Luck blessing.</h1>
  <div @click="handleClick">
    <button @click="store.increment(1)" class="button">
      {{ store.count }} Blessings given
    </button>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Charis+SIL&display=swap");
* {
  font-family: "Charis SIL", serif;
  font-weight: 700;
}

body {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
}

.button {
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
  background: rgb(255, 167, 38);
  background: linear-gradient(
    0deg,
    rgba(255, 167, 38, 1) 0%,
    rgba(255, 236, 179, 1) 85%,
    rgba(255, 236, 179, 1) 92%
  );
}
</style>
