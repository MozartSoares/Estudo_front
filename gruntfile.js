module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            production: {
                options: {
                    compress: false
                },
                files: {
                    './build/styles/main.css': './src/styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'build/scripts/main.min.js':'src/scripts/main.js'
                }
            }
        }
})
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-uglify');
        
grunt.registerTask('default',['less',]) 
}

