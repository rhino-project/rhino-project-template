DeviseTokenAuth.setup do |config|
  config.cookie_enabled = true
  config.cookie_attributes = {
    secure: ENV.fetch("DISABLE_SSL", false) ? false : true,
    httponly: true,
    expires: 1.day,
    same_site: ENV.fetch("DISABLE_SSL", false) ? "Lax" : "None"
    # WARNING: the :domain attribute specifies to whom the cookie will be sent to.
    # It's recommended to leave it empty, so it acts in the most restrictive way as per
    # https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#domain-and-path-attributes
  }
  # By default the authorization headers will change after each request. The
  # client is responsible for keeping track of the changing tokens. Change
  # this to false to prevent the Authorization header from changing after
  # each request.
  config.change_headers_on_each_request = false

  # By default, users will need to re-authenticate after 2 weeks. This setting
  # determines how long tokens will remain valid after they are issued.
  # config.token_lifespan = 2.weeks

  # Sets the max number of concurrent devices per user, which is 10 by default.
  # After this limit is reached, the oldest tokens will be removed.
  # config.max_number_of_devices = 10

  # Sometimes it's necessary to make several requests to the API at the same
  # time. In this case, each request in the batch will need to share the same
  # auth token. This setting determines how far apart the requests can be while
  # still using the same auth token.
  # config.batch_request_buffer_throttle = 5.seconds

  # This route will be the prefix for all oauth2 redirect callbacks. For
  # example, using the default '/omniauth', the github oauth2 provider will
  # redirect successful authentications to '/omniauth/github/callback'
  config.omniauth_prefix = "/api/auth/omniauth"

  # By default sending current password is not needed for the password update.
  # Uncomment to enforce current_password param to be checked before all
  # attribute updates. Set it to :password if you want it to be checked only if
  # password is updated.
  config.check_current_password_before_update = :password

  # By default we will use callbacks for single omniauth.
  # It depends on fields like email, provider and uid.
  # config.default_callbacks = true

  # Makes it possible to change the headers names
  config.headers_names = { 'access-token': "auth-access-token",
                         'client': "auth-client",
                         'expiry': "auth-expiry",
                         'uid': "auth-uid",
                         'token-type': "auth-token-type" }

  # By default, only Bearer Token authentication is implemented out of the box.
  # If, however, you wish to integrate with legacy Devise authentication, you can
  # do so by enabling this flag. NOTE: This feature is highly experimental!
  # config.enable_standard_devise_support = false

  # Ensure that the SPA client must submit a password reset token to reset the password if not already logged in.
  config.require_client_password_reset_token = true

  config.default_confirm_success_url = "#{ENV['RHINO_APP_URL']}/auth/signin"
  config.default_password_reset_url = "#{ENV['RHINO_APP_URL']}/auth/reset-password"
end
