function route (dependencies) {
  const create = (req, res) => {
    req.route.name = 'user'
    req.route.handler = 'create'
    req.lookup = dependencies.geolocator.getLookup(req)
    const locale = dependencies.locale.international(req, res)
    if (!locale) {
      res.redirect('/maintenance?error=lang-not-found')
      return
    }

    if (req.cookies.user_session) {
      res.render('user/create.view.jsx', {
        title: 'Create new user',
        description: '',
        data: {
          locale,
          services: [
            '_services/notification/s-notification.js',
            '_services/role/s-role.js',
            '_services/user/s-user.js'
          ]
        },
        vue: '_views/user/v-create.js'
      })
    } else {
      res.redirect('/login')
    }
  }

  const list = (req, res) => {
    req.route.name = 'user'
    req.route.handler = 'list'
    req.lookup = dependencies.geolocator.getLookup(req)
    const locale = dependencies.locale.international(req, res)
    if (!locale) {
      res.redirect('/maintenance?error=lang-not-found')
      return
    }

    if (req.cookies.user_session) {
      res.render('user/list.view.jsx', {
        title: 'All users on your franchisor',
        description: 'Filter and manage your users.',
        data: {
          locale,
          services: [
            '_services/notification/s-notification.js',
            '_services/user/s-user.js'
          ]
        },
        vue: '_views/user/v-list.js'
      })
    } else {
      res.redirect('/login')
    }
  }

  const edit = (req, res) => {
    req.route.name = 'user'
    req.route.handler = 'edit'
    req.lookup = dependencies.geolocator.getLookup(req)
    const locale = dependencies.locale.international(req, res)
    if (!locale) {
      res.redirect('/maintenance?error=lang-not-found')
      return
    }

    if (req.cookies.user_session) {
      res.render('user/edit.view.jsx', {
        title: 'Edit',
        description: 'Complete all fields of your user',
        data: {
          locale,
          services: [
            '_services/notification/s-notification.js',
            '_services/role/s-role.js',
            '_services/user/s-user.js'
          ]
        },
        vue: '_views/user/v-edit.js'
      })
    } else {
      res.redirect('/login')
    }
  }

  const block = (req, res) => {
    req.route.name = 'user'
    req.route.handler = 'block'
    req.lookup = dependencies.geolocator.getLookup(req)
    const locale = dependencies.locale.international(req, res)
    if (!locale) {
      res.redirect('/maintenance?error=lang-not-found')
      return
    }

    if (req.cookies.user_session) {
      res.render('user/block.view.jsx', {
        title: 'Block',
        description: 'Are you sure you want to block?',
        data: {
          locale,
          services: [
            '_services/notification/s-notification.js',
            '_services/user/s-user.js'
          ]
        },
        vue: '_views/user/v-block.js'
      })
    } else {
      res.redirect('/login')
    }
  }

  const uDelete = (req, res) => {
    req.route.name = 'user'
    req.route.handler = 'delete'
    req.lookup = dependencies.geolocator.getLookup(req)
    const locale = dependencies.locale.international(req, res)
    if (!locale) {
      res.redirect('/maintenance?error=lang-not-found')
      return
    }

    if (req.cookies.user_session) {
      res.render('user/delete.view.jsx', {
        title: 'Delete',
        description: 'Are you sure you want to block?',
        data: {
          locale,
          services: [
            '_services/notification/s-notification.js',
            '_services/user/s-user.js'
          ]
        },
        vue: '_views/user/v-delete.js'
      })
    } else {
      res.redirect('/login')
    }
  }

  const detail = (req, res) => {
    req.route.name = 'user'
    req.route.handler = 'detail'
    req.lookup = dependencies.geolocator.getLookup(req)
    const locale = dependencies.locale.international(req, res)
    if (!locale) {
      res.redirect('/maintenance?error=lang-not-found')
      return
    }

    if (req.cookies.user_session) {
      res.render('user/detail.view.jsx', {
        title: 'Details',
        description: 'This is all information about {{vueBind.model.userDetail.firstname}}',
        data: {
          locale,
          services: [
            '_services/notification/s-notification.js',
            '_services/user/s-user.js'
          ]
        },
        vue: '_views/user/v-detail.js'
      })
    } else {
      res.redirect('/login')
    }
  }

  return {
    create,
    list,
    edit,
    block,
    uDelete,
    detail
  }
}

module.exports = route
