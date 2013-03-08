module StoriesHelper

  STORY_TYPES = ['story', 'bug', 'task']
  DEFAULT_STORY_TYPE = STORY_TYPES.first

  STATES = ['not_started', 'started', 'finished', 'confirmed', 'delivered']
  DEFAULT_STATE = STATES.first

end