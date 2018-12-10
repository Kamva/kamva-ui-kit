import rollupTypescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "./src/index.tsx",
  external: ["react", "react-dom", "stream", "prop-types"],
  plugins: [
    rollupTypescript(),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "node_modules/react/index.js": [
          "cloneElement",
          "createContext",
          "Component",
          "createElement",
          "PropTypes",
        ],
        "node_modules/react-dom/index.js": ["render", "hydrate"],
        "node_modules/react-is/index.js": [
          "isElement",
          "isValidElementType",
          "ForwardRef",
        ],
      },
    }),
  ],
  output: [
    {
      file: "./dist/index.umd.js",
      format: "umd",
      name: "umd",
      globals: {
        react: "React",
        "react-dom": "ReactDom",
        stream: "stream",
        "prop-types": "PropTypes",
        "react-router": "Link",
        "react-transition-group": "ReactTransitionGroup",
        "styled-component": "styled",
        "bootstrap-styled": "Jumbotron",
        classnames: "cn",
      },
    },
    {
      file: "./dist/index.js",
      format: "cjs",
      name: "umd",
      globals: {
        react: "React",
        "react-dom": "ReactDom",
        stream: "stream",
        "prop-types": "PropTypes",
        "react-router": "Link",
        "react-transition-group": "ReactTransitionGroup",
        "styled-component": "styled",
        "bootstrap-styled": "Jumbotron",
        classnames: "cn",
      },
    },
    {
      file: "./dist/index.module.js",
      format: "es",
      name: "es",
      globals: {
        react: "React",
        "react-dom": "ReactDom",
        stream: "stream",
        "prop-types": "PropTypes",
        "react-router": "Link",
        "react-transition-group": "ReactTransitionGroup",
        "styled-component": "styled",
        "bootstrap-styled": "Jumbotron",
        classnames: "cn",
      },
    },
  ],
};
