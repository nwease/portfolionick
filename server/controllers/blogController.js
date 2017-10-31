const express = require('express')

const blogController = {}

blogController.index = (req, res) => {
    res.render('blog/index')
}

blogController.show = (req, res) => {
  res.render('blog/show')
}

blogController.create = (req, res) => {
  res.render('blog/create')
}

blogController.store = (req, res) => {
    res.send(req.body)
}

module.exports = blogController
