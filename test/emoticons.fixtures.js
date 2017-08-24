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
      expected: []
    },
    {
      arr: ['(hello)', '(megusta)'],
      expected: ['hello', 'megusta']
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
      arr: ['(--)'],
      expected: []
    },
  ],
  emoticonsPredicate: [
    {
      str: '',
      expected: false
    },
    {
      str: 't()st',
      expected: false
    },
        {
      str: '()st',
      expected: false
    },
    {
      str: '(megusta)',
      expected: true
    },
    {
      str: '((test))',
      expected: false
    },
    {
      str: '(test',
      expected: false
    },
    {
      str: '@(test)',
      expected: false
    },
    {
      str: '@-/~test/',
      expected: false
    },
    {
      str: '@test',
      expected: false
    },
  ],
}
