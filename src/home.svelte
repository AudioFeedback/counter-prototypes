<script>
  import { Link } from "svelte-routing";
  import { counter } from "./lib/store";

  let count = 0;

  function increase() {
    counter.update(prev => prev += 1);
  }

  function reset() {
    counter.set(0);
  }

  counter.subscribe((prev_val) => count = prev_val);

</script>

<main class="flex min-h-screen flex-col items-center justify-between p-24">
  <h1 class="text-3xl">Hello World</h1>
  <div class="text-center">
    <h2>Your count is:</h2>
    <h2 class="text-7xl">{count}</h2>
  </div>
  <div class="flex flex-col gap-4">
    <button class="border-white border-4 w-64 h-12" on:click={increase}
      >Increment</button
    >
    <button class="border-white border-4 w-64 h-12" on:click={reset}
      >Reset</button
    >
    <Link to="/test" class="border-white border-4 w-64 h-12">
      <div class="flex place-items-center justify-center">
        <h1>Next Page</h1>
      </div>
    </Link>
  </div>
</main>
