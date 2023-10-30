<script>
  import { Router, Link, Route } from "svelte-routing";
  import test from "./test.svelte";
  import home from "./home.svelte";
  export let url = ""; //This property is necessary declare to avoid ignore the Router
</script>

<Router {url}>
  <Route path="test" component={test} />
  <Route path="/" component={home} />
</Router>
