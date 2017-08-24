module.exports = {
  emoticons: [
    {
      arr: ['no', 'emoticons'],
      expected: []
    },
    {
      arr: [],
      expected: []
    },
    {
      arr: ['@(test)', '@-(megusta)-'],
      expected: ['test', 'megusta']
    },
    {
      arr: ['(hello)', '(megusta), ((megusta)mucho)', '((megusta))'],
      expected: ['hello', 'megusta', 'megusta', 'megusta']
    },
    {
      arr: ['@'],
      expected: []
    },
    {
      arr: ['()'],
      expected: []
    },
    {
      arr: ['(--a)'],
      expected: []
    },
  ],
  emoticonsPredicate: [
    {
      str: '(megusta)',
      expected: true
    },
    {
      str: '(megus-ta)',
      expected: false
    },
  ],
};
