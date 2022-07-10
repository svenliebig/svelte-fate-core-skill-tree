<script lang="ts">
  import NavItem from './NavItem.svelte';
  import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header class="flex w-full justify-between self-center">
  <nav>
    <ul class="flex h-12">
      <NavItem path="/">Home</NavItem>
      <NavItem path="/about">About</NavItem>
      <NavItem path="/todos">Todos</NavItem>
      <NavItem path="/skilltree">Skilltree</NavItem>
    </ul>
  </nav>

  <div class="flex items-center relative pl-2 h-12">
    <ThemeSwitcher />
  </div>
</header>

<style>
  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
    list-style: none;
    background-size: contain;
  }
</style>
