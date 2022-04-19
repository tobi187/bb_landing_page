<template>

<div id="page">
  <nav>
    <ul>
      <li class="p-8 w-80">
        <img src="../assets/logo.png" />
      </li>
      <li class="float-right p-8 flex">
        <div class="grid place-items-center">
          <ShoppingCartIcon class="h-10 w-10" />
          Warenkorb
        </div>
      </li>
      <li class="float-right p-8 flex">
        <div class="grid place-items-center">
          <HeartIcon class="h-10 w-10" />
          Wunschliste
        </div>
      </li>
      <li class="float-right p-8 flex">
        <div class="grid place-items-center">
          <UserIcon class="h-10 w-10" />
          Konto
        </div>
      </li>
      <li class="float-right p-8 flex">
        <div class="grid place-items-center">
          <CurrencyYenIcon class="h-10 w-10" />
          PAYBACK
        </div>
      </li>
    </ul>
  </nav>
</div>
</template>

<script>
import { CurrencyYenIcon } from "@heroicons/vue/solid"
import { ShoppingCartIcon } from "@heroicons/vue/solid"
import { UserIcon } from "@heroicons/vue/solid"
import { HeartIcon } from "@heroicons/vue/solid"


export default {
  name: 'MainNavbar',
  props: {
    msg: String
  },
  components: {
    CurrencyYenIcon,
    ShoppingCartIcon,
    UserIcon,
    HeartIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#page {
  
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
