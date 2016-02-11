module.exports = function (grunt, options) {
  return {
    compile: {
      options: {
        client: false,
        pretty: true,
         data: {
              section: grunt.file.readJSON('json/section.json')
         }
      },
      files: [ {
        cwd: "app/views",
        src: "**/index.jade",
        dest: "build/templates",
        expand: true,
        ext: ".html"
      } ]
    }
  }
}
