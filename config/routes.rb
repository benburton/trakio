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

  get '*foo', :to => 'trakio#index', :constraints => FormatTest.new(:html)
  get '/', :to => 'trakio#index', :constraints => FormatTest.new(:html)

end
