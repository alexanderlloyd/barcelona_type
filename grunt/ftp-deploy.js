module.exports = {
  build: {
    auth: {
      host: 'ux.machinas.com',
      port: 21,
      authKey: 'key1'
    },
    src: 'build',
    dest: '/test/app',
    exclusions: [
      '.DS_Store',
      '.gitignore',
      '.ftppass'
    ]
  }
}
