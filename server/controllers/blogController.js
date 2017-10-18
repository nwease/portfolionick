const express = require('express')

const blogControllers = {}

blogControllers.index = (req, res) => {
  res.render('blog/index')
}

module.exports = blogControllers
