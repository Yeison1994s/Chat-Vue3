<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm" />
  <!--showForm es un hots que nos indica si esta cerrado o abierto-->
  <TweetForm
    :showForm="showForm"
    :openCloseForm="openCloseForm"
    :reloadTweets="reloadTweets"
  />
  <TweetList :tweets="tweets" :reloadTweets="reloadTweets" />
</template>

<script>
import { ref } from "vue";
import Menu from "./components/Menu.vue";
import TweetForm from "./components/TweetForm.vue";
import useFormTweet from "./hooks/useFormTweet";
import TweetList from "./components/TweetList";
import { getTweetsApi } from "./api/tweet";
export default {
  name: "App",

  components: { Menu, TweetForm, TweetList },
  setup() {
    let tweets = ref(getTweetsApi().reverse());

    const reloadTweets = () => {
      tweets.value = getTweetsApi().reverse();
    };

    return {
      /*
 ...useFormTweet(), lo que hago es llamar todas las funciones 
*/
      ...useFormTweet(),
      tweets,
      reloadTweets,
    };
  },
};
</script>

<style lang="scss"></style>
