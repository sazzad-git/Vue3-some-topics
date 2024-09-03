<template>
  <h3>Computed Property</h3>
  <div>Employees Present: {{ isEmployeesPresent }}</div>
  <dir>FullName: {{ fullName }}</dir>
</template>

<!-- composition api -->
<script setup>
import { computed, reactive, ref } from "vue";
const employees = reactive(["emp1", "emp2"]);

const firstName = ref("Leela");
const lastName = ref("Web Dev");

const isEmployeesPresent = computed(() => {
  return employees.length ? "Yes" : "No";
});
// const fullName = firstName.value + " " + lastName.value;
const fullName = computed({
  get() {
    return firstName.value + " " + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});

fullName.value = "Hi Leela";
// const fullName = computed(() => {
//   return firstName.value + " " + lastName.value;
// });
</script>

<!-- Option Api -->
<!-- <script>
export default {
  data() {
    return {
      employees: ["emp1", "emp2"],
    };
  },
  computed: {
    isEmployeesPresent() {
      return this.employees.length > 0 ? "Yes" : "No";
    },
  },
};
</script> -->
