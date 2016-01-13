class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :bio
      t.string :facebook_link
      t.string :twitter_link
      t.string :github_link
      t.string :instagram_link
      t.string :pinterest_link
      t.string :link_1
      t.string :link_2

      t.string :provider
      t.string :uid
      # t.string :name
      t.string :oauth_token
      t.datetime :oauth_expires_at

      t.timestamps null: false
    end
  end
end
