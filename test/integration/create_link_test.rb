require 'test_helper'
require 'selenium-webdriver'

class CreateLinkTest < Capybara::Rails::TestCase

  def setup
    User.create(name: "Test", password: "password")
    visit '/login'

    within('#login') do
      fill_in 'session_name', with: 'Test'
      fill_in 'session_password', with: 'password'
      click_on('Save Session')
    end
  end

  test "authenticated user can create link with valid attributes" do
    visit '/'

    refute page.has_content?("Github")
    refute page.has_content?("https://github.com/")

    within('#add-link') do
      fill_in 'new-link-url', with: 'https://github.com/'
      fill_in 'new-link-title', with: "Github"
      click_on('save')
    end

    assert_equal "/", current_path  
  end

end
