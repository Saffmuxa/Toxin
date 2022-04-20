const path = require("path");
const PugPlugin = require("pug-plugin");
const CssUrlRelativePlugin = require("css-url-relative-plugin"); //Решает проблему ломаного URL в итоговом CSS
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const isProduction = false; //process.env.NODE_ENV === 'production';
module.exports = {
  mode: "production",
  devtool: isProduction ? false : "source-map",

  resolve: {
    // aliases used in the code example
    alias: {
      App: path.join(__dirname, "src/app/"),
      Images: path.join(__dirname, "src/assets/images/"),
      Styles: path.join(__dirname, "src/assets/styles/"),
      // Fonts: path.join(__dirname, "src/assets/fonts/"),
      Templates: path.join(__dirname, "src/templates/"),
    },
  },

  output: {
    path: path.join(__dirname, "public"),
    publicPath: "",
    filename: "[name].js",
  },

  entry: {
    app: "./src/main.js",
    dropdown: "./src/templates/pages/ui/dropdown.js",
    // mainStyle: "./src/assets/styles/styles.scss",
    // about: "./src/assets/styles/about.css",
    // vendor: "./src/assets/styles/vendor.css",
    // "post-css-demo.min": "./src/assets/styles/post-css-demo.scss",

    index: "./src/templates/pages/index.pug",
    Toxin: "./src/templates/pages/toxin.pug",
    UI: "./src/templates/pages/ui.pug",
    // aboutHtml: {
    //   import: "./src/templates/about.html",
    //   filename: "about.html",
    // },
    // UI: {
    //   import: "./src/templates/pages/UI.pug",
    //   filename: "UI.html",
    // },
  },

  plugins: [
    new CssUrlRelativePlugin(/* options */),
    // extract HTML from pug files defined by webpack entry
    new PugPlugin({
      verbose: true,
      modules: [
        PugPlugin.extractHtml(),
        PugPlugin.extractCss({
          verbose: false,
          filename: "assets/css/[name].css",
        }),
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader, // the pug-loader is already included in the PugPlugin
        options: {
          method: "render",
        },
      },
      // image resources processing via require() in pug
      {
        test: /\.(png|jpg|jpeg|ico|svg)/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name][ext]",
          // filename: "assets/img/[name].[hash][ext]",
        },
      },
      {
        test: /\.(ttf|otf|eot|woff(2)?)/,
        type: "asset/resource",
        // include: path.resolve(__dirname, "./src/assets/fonts"),
        generator: {
          filename: "assets/fonts/[name][ext]",

          // filename: "assets/img/[name].[hash][ext]",
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      // {
      //   test: /\.(js)/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: "assets/js/",
      //         // publicPath: "../fonts/",
      //       },
      //     },
      //   ],
      // },
      // style loader for webpack entry and processing via require() in pug
      {
        test: /\.(css|sass|scss)$/,
        include: [path.resolve(__dirname, "src/assets/styles")],
        use: [
          {
            loader: "css-loader",
            options: {},
          },
          // {
          //   loader: "resolve-url-loader",
          //   options: { sourceMap: true },
          // },
          // Add browser prefixes and minify CSS.
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer(), cssnano()],
              },
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {},
          },
        ],
      },

      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          // disable processing of resources in static HTML, leave as is
          sources: false,
        },
      },
    ],
  },

  optimization: {
    splitChunks: {
      //chunks: 'all',
      maxSize: 5000,
      minSize: 5000,
    },
  },

  performance: {
    hints: isProduction ? "error" : "warning",
    // in development mode may be the size of css and js more times bigger than in production
    maxEntrypointSize: isProduction ? 1024000 : 4096000,
    maxAssetSize: isProduction ? 1024000 : 4096000,
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 9000,
    https: false,
    liveReload: true,
    hot: true,
    client: {
      progress: true,
    },
    compress: true,
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
    // open in default browser
    open: true,
  },
};
