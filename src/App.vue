<template>
  <div class="main-container">
    <Kanban
      :data="initialData"
      @drop-end="handleDrop"
      @drag-start="handleDragStart"
    >
      <template #card="{ task }">
        <div >
          <h6 class="title">{{ task.title }}</h6>
          <p class="description">Status: {{ task.status }}</p>
          <p class="description">Priority: {{ task.priority }}</p>
        </div>
      </template>
    </Kanban>
  </div>
</template>

<script setup>
import Kanban from "kanvue";
import initialData from "./data";
console.log(initialData);
function handleDrop(payload) {
  console.log("Dropped:", payload);
}
function handleDragStart(el) {
  console.log("Drag start:", el);
}
</script>
