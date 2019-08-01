const mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {
    grunt.initConfig({
        htmllint: {
            src: 'index.html'
        },
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}]
                }
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/scrits.min.js' : 'js/scripts.js'
                }
            }
        },
        responsive_images: {
            task: {
            options: {
                sizes: 
                [{
                    name: 'small',
                    width: 320
                },
                {
                    name: 'medium',
                    width: 640
                },
                {
                    name: 'large',
                    width: 1024
                },
                {
                    name: 'xlarge',
                    width: 1680
                }]
            },
            files: [{
                expand: true,
                src: ['images/**.jpg'],
                dest: 'assets/'
            }]
        }
    }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-responsive-images');

    grunt.registerTask('default', ['responsive_images']);
}