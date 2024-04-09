import { ref } from "vue";
/* ref para que este pendiente */

export default function useFormTweet() {
  const showForm = ref(false);
  /*Aqui seteo el valor contrario del valor !showForm.value*/

  const openCloseForm = () => {
    showForm.value = !showForm.value;
  };

  return {
    showForm,
    openCloseForm,
  };
}
