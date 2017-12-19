const path = require('path');

const toAbsolute = relative => path.resolve(__dirname, relative);

module.exports = {
    plugins: [
        require('postcss-each'),
        require('postcss-mixins')({
            mixins: {
                ellipsis: {
                    'overflow': 'hidden',
                    'text-overflow': 'ellipsis',
                    'white-space': 'nowrap'
                },
                'word-wrap': {
                    'overflow-wrap': 'break-word',
                    'word-wrap': 'break-word'
                },
                'custom-scroll': {
                    '&::-webkit-scrollbar': {
                        '-webkit-appearance': 'none',
                        'width': '7px',
                        'height': '7px'
                    },
                    '&::-webkit-scrollbar-track': {
                        'background-color': 'rgba(160, 160, 160, 0.1)'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        'border-radius': '5px',
                        'background-clip': 'padding-box',
                        'background-color': 'rgba(160, 160, 160, 0.7)'
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        'background-color': 'rgba(160, 160, 160, 1)'
                    },
                    '&::-webkit-scrollbar-corner': {
                        'background-color': 'rgba(160, 160, 160, 0.1)',
                        'border-bottom-right-radius': '5px'
                    }
                }
            }
        }),
        require('postcss-nested'),
        require('postcss-simple-vars')({
            variables: function() {
                const constantsPath = './css/globalConstants';
                delete require.cache[require.resolve(constantsPath)];
                return require(constantsPath);
            }
        }),
        require('postcss-color-function'),
        require('autoprefixer')({browsers: ['last 2 version']}),
        require('postcss-svg')({
            defaults: '[fill]: #8e98a8',
            paths: [
                toAbsolute('./css/images/svg-icons'),
                toAbsolute('./css.board/images/emoji')
            ]
        })
    ]
};
