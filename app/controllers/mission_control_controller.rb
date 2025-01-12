# frozen_string_literal: true

class MissionControlController < ApplicationController
  before_action :authenticate_admin_user!
end
