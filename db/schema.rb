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

ActiveRecord::Schema.define(version: 20151122004808) do

  create_table "pallets", force: true do |t|
    t.string  "name"
    t.integer "weight"
    t.integer "height"
    t.integer "width"
    t.boolean "isDamaged",              null: false
    t.boolean "isSeparated",            null: false
    t.float   "latitude",    limit: 24
    t.float   "longitude",   limit: 24
  end

  create_table "shipments", force: true do |t|
    t.string  "name"
    t.string  "receiver"
    t.string  "destination"
    t.string  "description"
    t.integer "bol"
    t.string  "custody"
    t.boolean "hasDamaged",              null: false
    t.boolean "hasSeparated",            null: false
    t.boolean "isLate",                  null: false
    t.float   "latitude",     limit: 24
    t.float   "longitude",    limit: 24
  end

end
