const path = require("path");
const PugPlugin = require("pug-plugin");
const CssUrlRelativePlugin = require("css-url-relative-plugin");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isProduction = true;
module.exports = {
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? false : "source-map",

  resolve: {
    // aliases used in the code example
    alias: {
      Images: path.join(__dirname, "src/assets/images/"),
      // Imagess: path.resolve(__dirname, "src/assets/images/"),
      Styles: path.join(__dirname, "src/assets/styles/"),
    },
  },

  output: {
    filename: "assets/js/[name].js",
    path: path.join(__dirname, "public"),
    publicPath: "",
    clean: true,
  },

  entry: {
    index:
      "./src/pages/home/index.pug?" + JSON.stringify({ title: "Homepage" }),
    aboutHtml: {
      import:
        "./src/pages/about/index.pug?" + JSON.stringify({ title: "About" }),
      filename: "about.html",
    },
    UIHtml: {
      import: "./src/pages/ui/ui.pug?" + JSON.stringify({ title: "UI" }),
      filename: "ui.html",
    },
    mainPage: {
      import:
        "./src/pages/toxin/toxin.pug?" + JSON.stringify({ title: "Toxin" }),
      filename: "toxin.html",
    },
    searchRoom: {
      import:
        "./src/pages/search-room/search-room.pug?" +
        JSON.stringify({ title: "Search Room" }),
      filename: "search-room.html",
    },
    room1: {
      import:
        "./src/pages/room1/room1.pug?" + JSON.stringify({ title: "room1" }),
      filename: "room1.html",
    },
    signIn: {
      import:
        "./src/pages/sign-in/sign-in.pug?" +
        JSON.stringify({ title: "Sign In" }),
      filename: "sign-in.html",
    },
    Registration: {
      import:
        "./src/pages/reg-page/reg-page.pug?" +
        JSON.stringify({ title: "Registration" }),
      filename: "reg-page.html",
    },
  },

  plugins: [
    new CssUrlRelativePlugin(/* options */),
    // extract HTML from pug files defined by webpack entry
    new PugPlugin({
      //verbose: true,
      modules: [
        PugPlugin.extractHtml(),
        PugPlugin.extractCss({
          //verbose: true,
          filename: isProduction
            ? "assets/css/[name].css"
            : "assets/css/[name].[contenthash:8].css",
        }),
      ],
    }),
    new CleanWebpackPlugin(),
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
        exclude: [/fonts/],
        type: "asset/resource",
        generator: {
          filename: isProduction
            ? "assets/img/[name][ext]"
            : "assets/img/[name][contenthash:8][ext]",

          // filename: 'assets/img/[name].[hash][ext]',
        },
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)/,
        exclude: [/images/],
        type: "asset/resource",
        // include: path.resolve(__dirname, "./src/assets/fonts"),
        generator: {
          filename: isProduction
            ? "assets/fonts/[name][ext]"
            : "assets/fonts/[name][contenthash:8][ext]",

          // filename: "assets/fonts/[name][ext]",

          // filename: "assets/img/[name].[hash][ext]",
        },
      },
      // style loader for webpack entry and processing via require() in pug
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: "css-loader",
            options: {},
          },
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
    maxAssetSize: isProduction ? 3024000 : 6096000,
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
      watch: true,
    },
    port: 9000,
    https: false,
    // liveReload: true,
    // hot: true,
    // client: {
    //   progress: true,
    // },
    // compress: true,
    // headers: {
    //   'Cross-Origin-Opener-Policy': 'same-origin',
    //   'Cross-Origin-Embedder-Policy': 'require-corp',
    // },
    // open in default browser
    // open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
