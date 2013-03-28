describe 'Trakio.Comment', ->

  # TODO: Validate returns a promise, and the then is not being executed
  it 'should validate presence of body', ->
    comment = Trakio.Comment.createRecord({ body: undefined })
    comment.validate().then(-> expect(comment.get('isValid')).toBeFalsy())
    comment.validate().then(-> expect(comment.get('errors.body').length).toEqual(1))

  describe '#createdAtString', ->
    it 'should render date to match pattern', ->
      date = new Date("October 22, 1984 10:30")
      comment = Trakio.Comment.createRecord({ createdAt: date })
      expect(comment.get('createdAtString')).toEqual("22 October, 1984 10:30am")
