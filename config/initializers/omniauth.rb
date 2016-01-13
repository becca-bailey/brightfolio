# require "omniauth-facebook"

OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '926081044106096', '522d199b37b7bc787225b2715147f83b',
  {
    strategy_class: OmniAuth::Strategies::Facebook,
    provider_ignores_state: true,

  }
end

OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, 'w9LjuYfzE709KFVvzHrtXUeS1', 'yuxzvI1ptaghX3a9yWXu0XTDyYcog07EdccDQUNO6idqRTfa2A',
  {
    strategy_class: OmniAuth::Strategies::Twitter,
    provider_ignores_state: true,

  }
end

# Rails.application.config.middleware.use OmniAuth::Builder do
#   provider :facebook, ENV['926081044106096'], ENV['522d199b37b7bc787225b2715147f83b']

  # {
  #   strategy_class: OmniAuth::Strategies::Facebook,
  #   provider_ignores_state: true,

  # }
# end

# Rails.application.config.omniauth :facebook, ENV['926081044106096'], ENV['522d199b37b7bc787225b2715147f83b'], {
#   strategy_class: OmniAuth::Strategies::Facebook,
#   provider_ignores_state: true,
# }

  # {:scope => fb_permissions, :provider_ignores_state => true}




