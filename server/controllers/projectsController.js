const express = require('express')

const projectsControllers = {}

projectsControllers.index = (req, res) => {
  const projects = [{
    title: 'Dashboard',
    slug: 'dashboard',
    tags: ['html', 'css', 'javascript', 'php'],
    date: '10/17/2017',
    img: 'https://cdn.dribbble.com/users/757683/screenshots/3824804/bnp5.jpg'
  },
  {
    title: 'Blog',
    slug: 'blog',
    tags: ['html', 'css', 'javascript', 'node'],
    date: '10/17/2017',
    img: 'https://cdn.dribbble.com/users/286978/screenshots/3878177/dribbble-omnichannel_1x.png'
  },
  {
    title: 'Mobile App',
    slug: 'modile-app',
    tags: ['html', 'css', 'javascript', 'React-Native'],
    date: '10/17/2017',
    img: 'https://cdn.dribbble.com/users/255512/screenshots/3879408/800x600_1x.png'
  },
  {
    title: 'Stuff',
    slug: 'stuff',
    tags: ['html', 'css', 'javascript', 'C#'],
    date: '10/17/2017',
    img: 'src="https://cdn.dribbble.com/users/31664/screenshots/3880613/we_are_hiring_2.gif"'
  },
  {
    title: 'More Stuff',
    slug: 'more-stuff',
    tags: ['html', 'css', 'javascript', 'php'],
    date: '10/17/2017',
    img: 'https://cdn.dribbble.com/users/425500/screenshots/3880642/plans-dribbble.gif'
  },
  {
    title: 'Even More Stuff',
    slug: 'even-more-stuff',
    tags: ['html', 'css', 'javascript', 'php'],
    date: '10/17/2017',
    img: 'src="https://cdn.dribbble.com/users/5749/screenshots/3878267/drz_1x.jpg"'
  }
]

  res.render('projects/index', {
    projects: projects
  })
}

projectsControllers.create = (req, res) => {
  res.render('projects/create')
}

projectsControllers.store = (req, res) => {
  res.send({
    saved: true
  })
}

projectsControllers.show = (req, res) => {
  res.render('projects/show')
}

projectsControllers.edit = (req, res) => {
  res.render('projects/edit')
}

projectsControllers.update = (req, res) => {
  res.send({
    updated: true
  })
}

projectsControllers.destroy = (req, res) => {
  res.send({
    deleted: true
  })
}

module.exports = projectsControllers
