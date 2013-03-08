Trakio::Application.routes.draw do

  class FormatTest
    attr_accessor :mime_type

    def initialize(format)
      @mime_type = Mime::Type.lookup_by_extension(format)
    end

    def matches?(request)
      request.format == mime_type
    end
  end

  resources :projects, constraints: FormatTest.new(:json)
  resources :stories, :only => :create, constraints: FormatTest.new(:json)
  resources :project_memberships, :only => :create, constraints: FormatTest.new(:json)
  resources :users, only: [:show, :update], constraints: FormatTest.new(:json)

  match '/auth', to: 'auth_token#login', :via => :post
  match '/register', to: 'registration#create', :via => :post

  get '*foo', to: 'trakio#index', constraints: FormatTest.new(:html)
  get '/', to: 'trakio#index', constraints: FormatTest.new(:html)

end
