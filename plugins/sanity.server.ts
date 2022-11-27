export default defineNuxtPlugin((nuxtApp) => {
  const sanity = useSanity()
  const token = getTokenFromReq(nuxtApp.ssrContext.req)
  sanity.setToken(token)
})