module.exports = {
  tokenize: [
    {
      str: 'no mentions',
      expected: ['no', 'mentions']
    },
    {
      str: '      ',
      expected: []
    },
    {
      str: '  a b    ',
      expected: ['a', 'b']
    },
    {
      str: '@hello world!',
      expected: ['@hello', 'world!']
    },
    {
      str: '@hello@',
      expected: ['@hello@']
    },
    {
      str: '@@',
      expected: ['@@']
    },
  ],
};
