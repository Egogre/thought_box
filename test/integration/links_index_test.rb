require 'test_helper'
require 'selenium-webdriver'

class LinksIndexTest < Capybara::Rails::TestCase

  def setup
    @user = User.create(name: "Test", password: "password")
    visit '/login'

    within('#login') do
      fill_in 'session_name', with: 'Test'
      fill_in 'session_password', with: 'password'
      click_on('Save Session')
    end
  end

  test "authenticated user can see links index" do
    visit '/'

    assert_equal "/", current_path
    assert page.has_content?("Thought Box")
    assert page.has_content?("Link List")
  end

  test "authenticated user can only see own links" do
    user2 = User.create(name: "Other", password: "password")
    Link.create(title: "Github", url: "https://gist.github.com/", user_id: @user.id)
    Link.create(title: "Jobs", url: "http://careers.stackoverflow.com/", user_id: user2.id)
    visit '/'

    assert_equal "/", current_path
  end

end
