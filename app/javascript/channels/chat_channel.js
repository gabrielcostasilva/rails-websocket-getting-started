import consumer from "channels/consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    console.log("ChatChannel connected! 🎉")
  },

  received(data) {
    console.log(`The message: ${data.content}`)
  }
});
