const errorHandler = (error) => {
  const { status, response } = error
  let message = ''

  switch (status) {
    case 404:
    case 422:
    case 500:
    default:
      message = response.data.message
  }

  return message
}

export default {
  install: function (Vue) {
    Vue.prototype.$errorHandler = errorHandler
  }
}
