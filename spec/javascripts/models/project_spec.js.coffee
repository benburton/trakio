describe 'Trakio.Project', ->

  describe '#emails', ->

    userEmail = 'ben@burton.com'
    inviteeEmail = 'ben@gmail.com'

    it 'should contain project membership emails and user emails', ->
      project = Trakio.Project.createRecord()
      project.get('project_memberships').pushObject(Trakio.ProjectMembership.createRecord({ email: inviteeEmail }))
      project.get('project_memberships').pushObject(Trakio.ProjectMembership.createRecord({ user: Trakio.User.createRecord(email: userEmail) }))
      emails = $.map(project.get('emails').toArray(), (email) -> email.get('email'))

      expect(emails).toContain(userEmail)
      expect(emails).toContain(inviteeEmail)
