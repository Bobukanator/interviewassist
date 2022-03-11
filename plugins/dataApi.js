import { unWrap } from '~/utils/fetchUtils'

export default function (context, inject) {

  inject('dataApi', {
    getAllQuestions, getServerIP
  })

  async function getAllQuestions() {

    try {
      const apiURL = context.$axios.defaults.baseURL.concat("api/iquestions");
      const response = await unWrap(await fetch(apiURL))
      return response.json;

    } catch (error) {
      console.error(error)
    }

  }

  async function getServerIP($axios) {
    const ip = await $axios.$get("http://icanhazip.com");
    console.log("IP ", ip);
    return { ip };
  }
}
