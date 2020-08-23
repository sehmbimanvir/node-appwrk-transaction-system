export const responseMiddleware = (req, res, next) => {
  res.success = (message = '', data = {}, status = 200) => {
    res.status(status).send({
      message, data
    })
  }

  res.error = (message = 'Something went wrong', status= 400, data= {}) => {
    res.status(status).send({
      message, data
    })
  }

  next()
}
