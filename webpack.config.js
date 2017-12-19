const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dependencyFileNamePattern = '[path][name].[ext]?[sha1:hash:base64]';
const createLoader = (loader, test, query) => {
    query.name = dependencyFileNamePattern;
    return {test, loader: `${loader}-loader`, query};
};

var mediaFileLoaders = [
    createLoader('file', /\.png$/, {mimetype: 'image/png'}),
    createLoader('url', /\.svg(\?.*)?/, {mimetype: 'image/svg+xml', limit: 10 * 1024}), // TODO kill queryparam
    createLoader('file', /\.jpg$/, {mimetype: 'image/jpg'}),
    createLoader('file', /\.gif$/, {mimetype: 'image/gif'}),
    createLoader('file', /\.eot$/, {mimetype: 'application/x-font-ttf'}),
    createLoader('file', /\.woff$/, {mimetype: 'application/font-woff'}),
    createLoader('file', /\.woff2$/, {mimetype: 'application/font-woff2'}),
    createLoader('file', /\.ttf$/, {mimetype: 'application/vnd.ms-fontobject'})
];

module.exports = function() {
    return {
        entry: {
            'board.core': './css.import/board.core.css',
            'page.board.views.core': './css.import/page.board.views.core.css',
            'entity-colors': './css.import/entity-colors.css',
            'report.integration': './css.import/report.integration.css',
            'loginPageStyles': './css.import/loginPage.css',
            'printNewLists': './css.import/printNewLists.css',
            // tp2 styles:
            // 'ui': './css.import/ui.css',
            // 'tp2Styles': './css.import/tp2.css'
        },
        output: {
            filename: 'dist/[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract([
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ])
                },
                ...mediaFileLoaders
            ]
        },
        plugins: [
            new ExtractTextPlugin({
                filename: 'dist/[name].css',
                ignoreOrder: true
            })
        ]
    }
}
