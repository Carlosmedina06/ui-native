module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    "@babel/preset-env",
    ['@babel/preset-typescript', {
      allowNamespaces: true,
      isTSX: true,
      onlyRemoveTypeImports: true
    }]
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-modules-commonjs",
    ['nativewind/babel', { mode: 'compileOnly' }]
  ]
};