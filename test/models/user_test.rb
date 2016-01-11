require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "valid user with valid attributes" do
    user = User.new(name:"Test", password:"password")

    assert user.valid?
  end

  test "invalid user without valid attributes" do
    user1 = User.new(password:"password")
    user2 = User.new(name:"Test")

    refute user1.valid?
  end

end
