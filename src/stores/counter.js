import { defineStore } from "pinia";
import { watch } from "vue";

// Takes two arguments, unique name and object that has different options
export const useCounterStore = defineStore("counter", {
  //  Define state of our store
  state: () => {
    return { count: 0 };
  },
  // Define action, function increment, pass argument into the function
  actions: {
    increment(val = 1) {
      this.count += 1;
    },
  },
});
