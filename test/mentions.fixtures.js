module.exports = {
  mentions: [
    {
      arr: ['no', 'mentions'],
      expected: []
    },
    {
      arr: [],
      expected: []
    },
    {
      arr: ['@justin'],
      expected: ['justin']
    },
    {
      arr: ['@justin', '@hernandez'],
      expected: ['justin', 'hernandez']
    },
    {
      arr: ['@'],
      expected: []
    },
    {
      arr: ['@@'],
      expected: []
    },
    {
      arr: ['@justin@'],
      expected: []
    },
  ],
  mentionsPredicate: [
    {
      str: '',
      expected: false
    },
    {
      str: null,
      expected: false
    },
    {
      str: 'test',
      expected: false
    },
    {
      str: '@test@',
      expected: false
    },
    {
      str: '@test',
      expected: true
    },
  ],
}
