const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require('customize-cra');
const antdTheme = require('./antd.theme');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { ...antdTheme },
  }),
  addDecoratorsLegacy()
);
