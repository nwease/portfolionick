const express = require('express')

const blogControllers = {}

blogControllers.index = (req, res) => {
  res.render('blog/index')
}

blogControllers.show = (req, res) => {
  res.render('blog/show')
}

module.exports = blogControllers
