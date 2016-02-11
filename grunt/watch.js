module.exports = {
   jade: {
      files: 'app/views/**/*.jade',
      tasks: ['jade']
    },
     src: {
         files: ['scss/**/*.scss'],
         tasks: ['compass']
    },
           options: {
                livereload: true,
    },
}
