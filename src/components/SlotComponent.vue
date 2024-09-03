<template>
  <div>
    <header>
      <slot name="header" message="Hello Header" />
    </header>
    <nav>Navigation</nav>
    <main>
      <slot message="Hello main content" />
    </main>
    <footer>
      <slot name="footer" message="Hello Footer Content" count="1"></slot>
    </footer>
  </div>
  <!-- <div>
    <slot :text="message"></slot>
  </div> -->
</template>

<script setup>
// const message = "Sazzad Web Dev";
</script>
