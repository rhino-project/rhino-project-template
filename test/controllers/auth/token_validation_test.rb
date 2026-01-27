# frozen_string_literal: true

require "test_helper"

class TokenValidationSuccessTest < Rhino::TestCase::ControllerTest
  def setup
    sign_in
    validate_session
  end

  test "returns 200 when successful" do
    assert_response_ok
  end

  test "returns user information when successful" do
    # Reload user to get current state (updated_at may have changed during token validation)
    @current_user.reload
    # Convert to_caching_json to match JSON-serialized format (timestamps as strings)
    expected = JSON.parse(@current_user.to_caching_json.to_json)

    assert_equal expected, parsed_response["data"]
  end
end

class TokenValidationNonExistingTokenTest < Rhino::TestCase::ControllerTest
  def setup
    sign_in
    delete_user_tokens
    validate_session
  end

  test "returns 401 when token doesn't exist" do
    assert_response_unauthorized
  end

  test "cleans cookie when token doesn't exist" do
    assert_deleted_cookie DeviseTokenAuth.cookie_name
  end
end

class TokenValidationAbsentCookieTest < Rhino::TestCase::ControllerTest
  def setup
    sign_in
    validate_session headers: empty_auth_cookie_header
  end

  test "returns 401 when client doesn't send cookie" do
    assert_response_unauthorized
  end

  test "clears cookie when cookie is not sent" do
    assert_deleted_cookie DeviseTokenAuth.cookie_name
  end
end
