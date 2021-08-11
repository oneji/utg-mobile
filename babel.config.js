module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['@babel/plugin-proposal-class-properties', { loose: false }]],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
