class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "the_chat"
  end
end
