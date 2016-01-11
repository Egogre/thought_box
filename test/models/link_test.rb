require 'test_helper'

class LinkTest < ActiveSupport::TestCase
  test "valid link with valid attributes" do
    link = Link.new(url:"https://github.com/", title:"title")

    assert link.valid?
  end

  test "invalid link with missing attributes" do
    link1 = Link.new(title:"title")
    link2 = Link.new(url:"https://github.com/")

    refute link1.valid?
    refute link2.valid?
  end

  test "invalid link with invalid url" do
    link = Link.new(url:"aaaabbbbbcccc", title:"title")

    refute link.valid?
  end

end
