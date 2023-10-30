<script lang="ts">

import { counter } from "./store";

  const increment = () => {
    counter += 1
  }
</script>

<button on:click={increment}>
  count is {counter}
</button>
