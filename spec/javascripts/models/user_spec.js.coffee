describe 'Trakio.User', ->

  # TODO: Validate returns a promise, and the then is not being executed
  it 'should validate presence of email', ->
    comment = Trakio.User.createRecord({ email: undefined })
    comment.validate().then(-> expect(comment.get('isValid')).toBeFalsy())
    comment.validate().then(-> expect(comment.get('errors.email').length).toEqual(1))

