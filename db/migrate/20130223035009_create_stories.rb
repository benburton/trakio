class CreateStories < ActiveRecord::Migration
  def up
    create_table :stories do |t|
      t.string :title
    end
  end

  def down
    drop_table :stories
  end
end
