/**
 * path.resolve()
 * Метод решает последовательность путей или сегментов пути в абсолютный путь.
 */
/**
 * [contenthash] - мета переменная (при пересобирания проекта)
 * Hash один на все текущую сборку. Каждый файл получит одинаковый хеш в сборке. И при каждой генерации сборки, хеш будет обновляться.
 * Каждый сгенерированный файл имеет уникальный хэш в своем имени, рассчитанный на основе содержимого этого файла.
 * Если я изменю, скажем, поменяю только index.css то при повторной сборке, только сгенерированный index.css будет иметь новый хеш.
 */

/**
 * module.rules
 * Массив правил, которые соответствуют запросам при создании модулей. Эти правила могут изменять способ создания модуля.
 * Они могут применять загрузчики к модулю или изменять синтаксический анализатор.
 Правило
 */
/**
 * htmlWebpackPlugin
 * npm -i (плагин для компиляции HTML)
 */

/**
 * По умолчанию этот плагин удаляет все файлы внутри каталога webpack (______), а также все неиспользуемые ресурсы
 * webpack после каждой успешной перестройки.
 */


const {resolve} = require('path');// *PATH* работа с путями к файлам Windows
// const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './main.js',
    output: {
        path: resolve(__dirname, 'build'),// указываем путь к создаваемой папке (сборки), в данном случае мы указываем *корень*
        filename: "main.[contenthash].js"
    },
    //добавляем "лоадеры"
    module: {
        rules: [
            //
            {
                test: /\.css$/i, //style,css!!!
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: `audio/[name].[ext]`,
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i, //style,css!!!
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            }]

    },
    plugins: [

        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),

        new BundleAnalyzerPlugin()



    ],
}