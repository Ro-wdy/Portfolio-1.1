// Speaker profile on Sessionize. The SpeakingSection fetches live sessions
// from this speaker ID and falls back to `fallbackTalks` if the request fails.
export const sessionize = {
  speakerId: "q425n2ucjr",
  profileUrl: "https://sessionize.com/rhodah-mulera",
  // Unstyled embed variant: returns the session list without Sessionize's CSS.
  embedUrl: "https://sessionize.com/api/speaker/sessions/q425n2ucjr/0x1x3fb393x"
};

export const fallbackTalks = [
  {
    id: "192288",
    title: "Beyond the Chatbot: Building Multi-Agent Systems with Google's Agent Development Kit",
    url: "https://sessionize.com/s/rhodah-mulera/beyond-the-chatbot-building-multi-agent-systems-wi/192288"
  },
  {
    id: "192287",
    title: "Agents That Talk to Each Other: Building a Multi-Agent Team with ADK and the A2A Protocol",
    url: "https://sessionize.com/s/rhodah-mulera/agents-that-talk-to-each-other-building-a-multi-ag/192287"
  }
];
