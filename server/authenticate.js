const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if(!token){
    return res.status(403).json({error: "Авторизация заблокирована", success: false})
  }
  try{
    const verify = jwt.verify(token, process.env.jwtSecret)
    req.user = verify.user
    next()
  } catch(err){
    console.error(err.message)
    res.status(401).json({error: "Неверный токен", success: false})
  }
}