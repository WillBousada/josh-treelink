<!-- src/components/LinkList.vue -->
<template>
  <div class="link-list">
    <a
      v-for="link in links"
      :key="link.id"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="link-item"
    >
      <span>{{ link.name }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'LinkList',
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.link-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.link-item {
    display: flex;
    align-items: center;       
    justify-content: center;     
    padding: 15px 30px;
    background-color: white;
    color: black;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.3s, box-shadow 0.3s;
    font-size: 1.1em;
    box-shadow: 3px 3px 8px #00BFFF;
}
    
.link-item:hover {
    background-color: #2980b9;
    color: white; 
    box-shadow: 4px 4px 10px #318CE7;
}

.icon {
  margin-right: 10px;
  font-size: 1.5em;
}
</style>
