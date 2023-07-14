module.exports = function (api) {
    const presets = [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: 3,
        },
      ],
      '@babel/preset-react',
    ];
    const plugins = ['@babel/plugin-proposal-class-properties', 'macros'];
      
    // Configure cache
    api.cache(true);
  
    return {
      presets,
      plugins
    };
  };
  