module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'Init',
        'Feat',
        'Remove',
        'Delete',
        'Move',
        'New',
        'Add',
        'Patch',
        'Fix',
        'Test',
        'Update',
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'never', 72],
  },
}
