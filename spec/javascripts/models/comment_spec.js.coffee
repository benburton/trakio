describe 'Trakio.Comment', ->

  describe '#createdAtString', ->
    it 'render date to match pattern', ->
      date = new Date("October 22, 1984 10:30")
      comment = Trakio.Comment.createRecord({
        createdAt: date
      });
      expect(comment.get('createdAtString')).toEqual("22 October, 1984 10:30am")