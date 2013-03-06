module AuthTokenHelper

  # Attach authentication token to requests if user object exists
  ['get', 'put', 'post', 'delete'].each do |http_method|
    define_method "authed_#{http_method}" do |custom_method_name, options = {}|
      if defined? user
        options.merge!(auth: user.authentication_token)
      end
      send(http_method, custom_method_name, options)
    end
  end

end