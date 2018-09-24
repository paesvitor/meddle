import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";

import pkg from "./package.json";

export default {
    input: "src/index.js",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: true
        }
    ],
    plugins: [
        external({
            includeDependencies: true
        }),
        postcss({
            modules: true
        }),
        url(),
        babel({
            exclude: "node_modules/**"
        }),
        resolve({
            jsnext: true,
            main: true,
            customResolveOptions: {
                moduleDirectory: "node_modules"
            }
        }),
        commonjs({
            include: "node_modules/**",
            namedExports: {
                "node_modules/react-is/index.js": ["isValidElementType"],
                "node_modules/styled-components/index.js": ["styled"]
            }
        })
    ],
    external: ["styled-components", "color"]
};
