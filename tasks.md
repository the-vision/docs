# Major Tasks

I’d suggest to go through [JARVIS](https://github.com/swapagarwal/JARVIS-on-Messenger)’s code first to understand the basic concepts.

1. Integrate with Rasa NLU.
1. Play around with Messenger, Slack, Discord, Telegram, Skype APIs to see what all features they support.
1. Design a generic response interface.
1. Write adaptors to convert response to platform-specific response.
1. Integrate with platform APIs (prefer using libraries here) to send and receive messages.
1. Write modules (see examples here: [https://github.com/swapagarwal/JARVIS-on-Messenger/tree/master/modules/src](https://github.com/swapagarwal/JARVIS-on-Messenger/tree/master/modules/src) )
1. Set up analytics to gather usage feedback.
