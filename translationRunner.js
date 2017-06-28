import manageTranslations from "react-intl-translations-manager";

manageTranslations({
  messagesDirectory: "./src/messages/",
  translationsDirectory: "./src/messages/translations",
  languages: ["en-US", "en-UP"],
  singleMessagesFile: true,
});