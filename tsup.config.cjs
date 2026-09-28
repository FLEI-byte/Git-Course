module.exports = {
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.mjs',
      dts: format === 'cjs' ? '.d.ts' : '.d.mts',
    };
  },
};
