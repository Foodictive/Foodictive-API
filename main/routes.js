const {
  // postMethodHandler,
  getMethodHandler,
  getDetailMethodHandler,
  // putMethodHandler,
  // deleteMethodHandler,
} = require('./handler');

const routes = [
  // {
  //   method: 'POST',
  //   path: '/foods',
  //   config: { auth: 'jwt' },
  //   handler: postMethodHandler,
  // },
  {
    method: 'GET',
    path: '/foods',
    config: { auth: 'jwt' },
    handler: getMethodHandler,
  },
  {
    method: 'GET',
    path: '/foods/{id}',
    config: { auth: 'jwt' },
    handler: getDetailMethodHandler,
  },
  // {
  //   method: 'PUT',
  //   path: '/foods/{id}',
  //   config: { auth: 'jwt' },
  //   handler: putMethodHandler,
  // },
  // {
  //   method: 'DELETE',
  //   path: '/foods/{id}',
  //   config: { auth: 'jwt' },
  //   handler: deleteMethodHandler,
  // },
];

module.exports = routes;