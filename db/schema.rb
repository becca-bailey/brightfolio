# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160112143211) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "elements", force: :cascade do |t|
    t.integer  "folio_id"
    t.string   "title"
    t.string   "description"
    t.string   "citation"
    t.string   "element_link"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "document_file_name"
    t.string   "document_content_type"
    t.integer  "document_file_size"
    t.datetime "document_updated_at"
  end

  create_table "folios", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "primary_element_id"
    t.string   "title"
    t.string   "description"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name",       null: false
    t.string   "last_name",        null: false
    t.string   "email",            null: false
    t.string   "password_digest",  null: false
    t.string   "bio"
    t.string   "facebook_link"
    t.string   "twitter_link"
    t.string   "github_link"
    t.string   "instagram_link"
    t.string   "pinterest_link"
    t.string   "link_1"
    t.string   "link_2"
    t.string   "provider"
    t.string   "uid"
    t.string   "name"
    t.string   "oauth_token"
    t.datetime "oauth_expires_at"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

end
