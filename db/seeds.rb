require 'faker'

becca = User.create!(first_name: "Becca", last_name: "Nelson", email: "beccanelson88@gmail.com", password: "password")
becca = User.find(1)
10.times do
  folio = becca.folios.create!(title: Faker::Hacker.adjective)
  20.times do
    element = folio.elements.create!(title: Faker::Hipster.sentence, element_link: Faker::Internet.url, description: Faker::Hipster.paragraph)
  end
end
