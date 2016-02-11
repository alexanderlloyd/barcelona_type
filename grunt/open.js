/**
 * grunt-contrib-connect options
 * @type {Object}
 */

module.exports = {

	dev : {
      path: 'http://127.0.0.1:8888/src',
      app: 'Google Chrome'
    },
    build : {
      path : 'http://google.com/',
      app: 'Firefox'
    },
    file : {
      path : '/etc/hosts'
    },
    custom: {
      path : function () {
        return grunt.option('path');
      }
    }

};
