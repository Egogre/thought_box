require 'test_helper'
require 'selenium-webdriver'

class LinksIndexTest < Capybara::Rails::TestCase

  def setup
    User.create(name: "Test", password: "password")
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
    assert page.has_content?("Links List")
  end

  test "authenticated user can create link with valid attributes" do
    visit '/'

    refute page.has_content?("Github")
    refute page.has_content?("https://github.com/")

    within('#add_link') do
      fill_in 'link_url', with: 'https://github.com/'
      fill_in 'link_title', with: "Github"
      click_on('Save Link')
    end

    assert_equal "/", current_path
    assert page.has_content?("Github")
    assert page.has_content?("https://github.com/")
  end

  test "new user cannot create account with missing name" do
    visit '/login'

    within('#signup') do
      fill_in 'user_password', with: "password"
      click_on('Save User')
    end

    assert_equal "/login", current_path
    assert page.has_content?("Name can't be blank")
  end

  test "new user cannot create account with missing password" do
    visit '/login'

    within('#signup') do
      fill_in 'user_name', with: 'Test'
      click_on('Save User')
    end

    assert_equal "/login", current_path
    assert page.has_content?("Password can't be blank")
  end

  test "unauthenticated user can sign in with valid attributes" do
    User.create(name: "Test", password: "password")
    visit '/login'

    within('#login') do
      fill_in 'session_password', with: 'password'
      fill_in 'session_name', with: 'Test'
      click_on('Save Session')
    end

    assert_equal "/", current_path
  end

  test "unauthenticated user cannot sign in with missing name" do
    User.create(name: "Test", password: "password")
    visit '/login'

    within('#login') do
      fill_in 'session_password', with: 'password'
      click_on('Save Session')
    end

    assert_equal "/login", current_path
    assert page.has_content?("Invalid Login")
  end

  test "unauthenticated user cannot sign in with missing password" do
    User.create(name: "Test", password: "password")
    visit '/login'

    within('#login') do
      fill_in 'session_name', with: 'Test'
      click_on('Save Session')
    end

    assert_equal "/login", current_path
    assert page.has_content?("Invalid Login")
  end

  test "authenticated user can logout" do
    User.create(name: "Test", password: "password")
    visit '/login'

    within('#login') do
      fill_in 'session_name', with: 'Test'
      fill_in 'session_password', with: 'password'
      click_on('Save Session')
    end
    click_on('Logout')
    assert_equal "/login", current_path
  end

end
