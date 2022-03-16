import { unWrap } from '~/utils/fetchUtils'

export default function (context, inject) {

  inject('dataApi', {
    getAllQuestions, getAllSkills
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

  async function getAllSkills() {
    try {
      const apiURL = context.$axios.defaults.baseURL.concat("api/skills");
      const response = await unWrap(await fetch(apiURL))
      return response.json;

    } catch (error) {
      console.error(error)
    }
  }
}
