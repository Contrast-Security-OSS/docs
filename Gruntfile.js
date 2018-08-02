'use strict';

module.exports = function (grunt) {

  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist',
      distAssets: 'dist/assets',
      docs: 'docs'
    },

    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= config.docs %>/assets/main.css'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0',
        open: true,
        base: [
          '<%= config.dist %>'
        ]
      },
      livereload: {
        options: {
          livereload: 35729
        }
      },
      keepalive: {
        options: {
          keepalive: true
        }
      }
    },

    assemble: {
      options: {
        flatten: true,
        assets: '<%= config.dist %>/assets',
        data: '<%= config.src %>/data/*.{json,yml}',
        partials: ['<%= config.src %>/templates/partials/**/*.hbs', '<%= config.docs %>/**/*.md'],
        plugins: ['assemble-contrib-permalinks', 'grunt-assemble-sitemap', 'assemble-contrib-toc', './grunt-assemble-lunr.js'],
        helpers: ['handlebars-helper-md', './helpers/**/*.js'],
        lunr: {
          dataPath: '<%= config.dist %>/assets/index_data.json',
          searchDataPath: '<%= config.dist %>/assets/search_data.json'
        },
        noEscape: true
      },
      banner: {
        options: {
          layout: '<%= config.src %>/templates/layouts/banner.hbs'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/index.hbs']
        }
      },
      pages: {
        options: {
          layout: '<%= config.src %>/templates/layouts/page.hbs'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/**/*.hbs']
        }
      }
    },


    copy: {
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist/',
        src: '**',
        dest: '<%= config.dist %>/assets/'
      },
      lunr: {
        expand: true,
        cwd: 'node_modules/lunr',
        src: 'lunr.min.js',
        dest: '<%= config.dist %>/assets/js/'
      },
      handlebars: {
        expand: true,
        cwd: 'node_modules/handlebars/dist/',
        src: 'handlebars.min.js',
        dest: '<%= config.dist %>/assets/js/'
      },
      typeahead: {
        expand: true,
        cwd: 'node_modules/typeahead.js/dist/',
        src: 'typeahead.jquery.min.js',
        dest: '<%= config.dist %>/assets/js/'
      },
      contentImages: {
        expand: true,
        cwd: 'docs/assets/images/',
        src: '**',
        dest: '<%= config.dist %>/assets/images/'
      },
      presentationImages: {
        expand: true,
        cwd: '<%= config.src %>/images/',
        src: '**',
        dest: '<%= config.dist %>/assets/presentation-images/'
      },
      attachments: {
        expand: true,
        cwd: 'docs/assets/attachments/',
        src: '**',
        dest: '<%= config.dist %>/assets/attachments/'
      },
      lightbox: {
        expand: true,
        cwd: 'src/lightbox/',
        src: '**',
        dest: '<%= config.dist %>/assets/lightbox/'
      },
      js: {
        expand: true,
        cwd: 'src/js/',
        src: '**',
        dest: '<%= config.dist %>/assets/js/'
      },
      octicons: {
        expand: true,
        cwd: 'src/octicons/',
        src: 'octicons.css',
        dest: '<%= config.dist %>/assets/css/'
      },
      ionicons: {
        expand: true,
        cwd: 'src/ionicons/',
        src: 'ionicons.css',
        dest: '<%= config.dist %>/assets/css/'
      },
      fonts: {
        expand: true,
        cwd: 'src/fonts/',
        src: '**',
        dest: '<%= config.dist %>/assets/fonts/'
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>'],

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          '<%= config.dist %>/assets/css/main.css': '<%= config.src %>/main.scss'
        }
      }
    },

    concat: {
      dist: {
        src: [
          // The JS is separated to emphasis separation of concerns
          'src/js/main_start.js',
          'src/js/Location.js',
          'src/js/Menu.js',
          'src/js/Articles.js',
          'src/js/Search.js',
          'src/js/QuickLinks.js',
          'src/js/TocSelectMenu.js',
          'src/js/App.js',
          'src/js/main.js',
          'src/js/main_end.js'
        ],
        dest: '<%= config.dist %>/assets/js/opendocs.js'
      }
    },

    uglify: {
      dist: {
        files: {
          '<%= config.dist %>/assets/js/opendocs.js': ['<%= config.dist %>/assets/js/opendocs.js']
        }
      }
    },

    cacheBust: {
      options: {
        baseDir: './<%= config.dist %>',
        assets: [
          'assets/css/*',
          'assets/images/*',
          'assets/js/*',
          'assets/lightbox/*'
        ],
        createCopies: true,
        deleteOriginals: true,
        jsonOutput: false
      },
      taskName: {
        src: [
          '<%= config.dist %>/**/*.html'
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-cache-bust');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('server', [
    'buildDebug',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('buildDebug', [
    'clean',
    'sass',
    'concat',
    'copy',
    'assemble'
  ]);

  grunt.registerTask('build', [
    'clean',
    'sass',
    'concat',
    'copy',
    'uglify',
    'assemble',
    'cacheBust'
  ]);

  grunt.registerTask('jsOnly', [
    'concat',
    'copy:js'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
