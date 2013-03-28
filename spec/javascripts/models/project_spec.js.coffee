describe 'Trakio.Project', ->

  describe '#emails', ->
    it 'is great', ->
      projectMembership = Trakio.ProjectMembership.createRecord({
        id: 3,
        email: 'test@aol.com'
      })
