<template>
  <!--Esto es una clase dinamica :class, esto me indica cuando sea verdadero-->
  <div class="tweet-form container" :class="{ open: showForm }">
    <form @submit.prevent="sedTweet">
      <input
        type="text"
        class="form-control"
        placeholder="Tu nombre"
        v-model="username"
      />
      <textarea
        class="form-control"
        rows="3"
        placeholder="Escribe tu tweet"
        v-model="tweet"
      ></textarea>
      <button type="submit" class="btn btn-primary">Enviar Tweet</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { saveTweetApi } from "../api/tweet";
export default {
  props: {
    showForm: Boolean,
    openCloseForm: Function,
    reloadTweets: Function,
  },

  setup(props) {
    let username = ref("");
    let tweet = ref();

    const sedTweet = () => {
      if (!tweet.value || !username.value) return;

      saveTweetApi(tweet.value, username.value);
      /*Para limpiar*/
      tweet.value = "";
      username.valur = "";
      props.reloadTweets();
      props.openCloseForm();
    };

    return { sedTweet, username, tweet };
  },
};
</script>

<style lang="scss" scoped>
.tweet-form {
  margin-top: 20px;
  height: 0;
  overflow: hidden;

  &.open {
    height: auto;
  }

  form {
    margin-bottom: 50px;

    input {
      margin-bottom: 10px;
    }
    button {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
