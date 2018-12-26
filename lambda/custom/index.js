// Alexa  - 
/* eslint no-use-before-define: 0 */
// sets up dependencies
const Alexa = require('ask-sdk-core');
const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');

const WelcomeHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    return handlerInput.responseBuilder
      .speak(requestAttributes.t('WELCOME_MESSAGE'))
      .reprompt(requestAttributes.t('WELCOME_REPROMPT'))
      .getResponse();
  },
};

const VaithiyamAvailableListHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    // checks request type
    return (request.type === 'IntentRequest'
        && request.intent.name === 'VaithiyamAvailableListIntent');
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const vaithiyamListMsg = requestAttributes.t('VAITHIYAM_AVAILABLE_LIST_MESSAGE');
    const speakOutput = "Here is the patty Vaithiyam list , " + vaithiyamListMsg;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(requestAttributes.t('HELP_REPROMPT'))
      .withSimpleCard(requestAttributes.t('SKILL_NAME'), vaithiyamListMsg)
      .getResponse();
  },
};

const VaithiyamForDiabetesHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    // checks request type
    return (request.type === 'IntentRequest'
        && request.intent.name === 'VaithiyamForDiabetesIntent');
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const diabetesMsg = requestAttributes.t('DIABETES_MESSAGE');
    const speakOutput = requestAttributes.t('GET_PATTY_VAITHIYAM_MESSAGE') + diabetesMsg;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(requestAttributes.t('HELP_REPROMPT'))
      .withSimpleCard(requestAttributes.t('SKILL_NAME'), diabetesMsg)
      .getResponse();
  },
};

const VaithiyamForDryCoughHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    // checks request type
    return (request.type === 'IntentRequest'
        && request.intent.name === 'VaithiyamForDryCoughIntent');
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const dryCoughMsg = requestAttributes.t('DRY_COUGH_MESSAGE');
    const speakOutput = requestAttributes.t('GET_PATTY_VAITHIYAM_MESSAGE') + dryCoughMsg;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(requestAttributes.t('HELP_REPROMPT'))
      .withSimpleCard(requestAttributes.t('SKILL_NAME'), dryCoughMsg)
      .getResponse();
  },
};

const VaithiyamForDiarrheaHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    // checks request type
    return (request.type === 'IntentRequest'
        && request.intent.name === 'VaithiyamForDiarrheaIntent');
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const diarrheaMsg = requestAttributes.t('DIARRHEA_MESSAGE');
    const speakOutput = requestAttributes.t('GET_PATTY_VAITHIYAM_MESSAGE') + diarrheaMsg;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(requestAttributes.t('HELP_REPROMPT'))
      .withSimpleCard(requestAttributes.t('SKILL_NAME'), diarrheaMsg)
      .getResponse();
  },
};

const VaithiyamForConstipationHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    // checks request type
    return (request.type === 'IntentRequest'
        && request.intent.name === 'VaithiyamForConstipationIntent');
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const constipationMsg = requestAttributes.t('CONSTIPATION_MESSAGE');
    const speakOutput = requestAttributes.t('GET_PATTY_VAITHIYAM_MESSAGE') + constipationMsg;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(requestAttributes.t('HELP_REPROMPT'))
      .withSimpleCard(requestAttributes.t('SKILL_NAME'), constipationMsg)
      .getResponse();
  },
};

const VaithiyamForNasalBlockHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    // checks request type
    return (request.type === 'IntentRequest'
        && request.intent.name === 'VaithiyamForNasalBlockIntent');
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const nasalBlockMsg = requestAttributes.t('NASAL_BLOCK_MESSAGE');
    const speakOutput = requestAttributes.t('GET_PATTY_VAITHIYAM_MESSAGE') + nasalBlockMsg;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(requestAttributes.t('HELP_REPROMPT'))
      .withSimpleCard(requestAttributes.t('SKILL_NAME'), nasalBlockMsg)
      .getResponse();
  },
};

const VaithiyamForFeverHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    // checks request type
    return (request.type === 'IntentRequest'
        && request.intent.name === 'VaithiyamForFeverIntent');
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const feverMsg = requestAttributes.t('FEVER_MESSAGE');
    const speakOutput = requestAttributes.t('GET_PATTY_VAITHIYAM_MESSAGE') + feverMsg;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(requestAttributes.t('HELP_REPROMPT'))
      .withSimpleCard(requestAttributes.t('SKILL_NAME'), feverMsg)
      .getResponse();
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    return handlerInput.responseBuilder
      .speak(requestAttributes.t('HELP_MESSAGE'))
      .reprompt(requestAttributes.t('HELP_REPROMPT'))
      .getResponse();
  },
};

const FallbackHandler = {
  // 2018-Aug-01: AMAZON.FallbackIntent is only currently available in en-* locales.
  //              This handler will not be triggered except in those locales, so it can be
  //              safely deployed for any locale.
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.FallbackIntent';
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    return handlerInput.responseBuilder
      .speak(requestAttributes.t('FALLBACK_MESSAGE'))
      .reprompt(requestAttributes.t('FALLBACK_REPROMPT'))
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    return handlerInput.responseBuilder
      .speak(requestAttributes.t('STOP_MESSAGE'))
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
    console.log(`Error stack: ${error.stack}`);
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    return handlerInput.responseBuilder
      .speak(requestAttributes.t('ERROR_MESSAGE'))
      .reprompt(requestAttributes.t('ERROR_MESSAGE'))
      .getResponse();
  },
};

const LocalizationInterceptor = {
  process(handlerInput) {
    const localizationClient = i18n.use(sprintf).init({
      lng: handlerInput.requestEnvelope.request.locale,
      resources: languageStrings,
    });
    localizationClient.localize = function localize() {
      const args = arguments;
      const values = [];
      for (let i = 1; i < args.length; i += 1) {
        values.push(args[i]);
      }
      const value = i18n.t(args[0], {
        returnObjects: true,
        postProcess: 'sprintf',
        sprintf: values,
      });
      if (Array.isArray(value)) {
        return value[Math.floor(Math.random() * value.length)];
      }
      return value;
    };
    const attributes = handlerInput.attributesManager.getRequestAttributes();
    attributes.t = function translate(...args) {
      return localizationClient.localize(...args);
    };
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    WelcomeHandler,
    VaithiyamAvailableListHandler,
    VaithiyamForDiabetesHandler,
    VaithiyamForDryCoughHandler,
    VaithiyamForDiarrheaHandler,
    VaithiyamForConstipationHandler,
    VaithiyamForNasalBlockHandler,
    VaithiyamForFeverHandler,
    HelpHandler,
    ExitHandler,
    FallbackHandler,
    SessionEndedRequestHandler,
  )
  .addRequestInterceptors(LocalizationInterceptor)
  .addErrorHandlers(ErrorHandler)
  .lambda();

// translations
const enData = {
  translation: {
    SKILL_NAME: 'Patty Vaithiyam',
    WELCOME_MESSAGE: 'Welcome to Patti Vaithiyam, You can say tell patti Vaithiyam medicines for dry cough and explore patti vaithiyam for health life, What can i help you with?',
    WELCOME_REPROMPT: 'What can I help you with?',
    VAITHIYAM_AVAILABLE_LIST_MESSAGE: "1. Home Remedy for diabetes mellitus. 2. Remedy for dry cough. 3. Remedy for loose stools. 4. Remedy for childhood constipation. 5. Remedy for nasal block or running nose. 6. Remedy for fever. Is there anything can i help you with?",
    GET_PATTY_VAITHIYAM_MESSAGE: 'Here\'s your steps: ',
    DIABETES_MESSAGE: "Take a handful of dry or fresh Avarampoo (flowers of Avarai). Put it in two glass of water and make it into one glass. Drink it daily. It is helpful in controlling increased urination in diabetes mellitus. It is also helpful in controlling blood sugar level. Is there anything can i help you with?",
    DRY_COUGH_MESSAGE: "Take two or three leaves of Adathoda, take small piece of Athimathuram which is availabale in country drug store, crush the Athimathuram.Put Adathoda leavers and crushed Athimathuram in 2 glass of water and boil it. When the water will become one glass, stop boiling and filter the decoction.Drink it hot. Is there anything can i help you with?",
    DIARRHEA_MESSAGE: "Take one spoon of Cumin Seeds(Jeerakam) and fry it in a pan until it become blackish color, than add 2 glass water and make it boil well to turn into one glass. Allow the decoction to cool and drink it. Is there anything can i help you with?",
    CONSTIPATION_MESSAGE: "Soak 5-10 Raisin or kishmish in hot water over a night, in the morning, crush the Raisin or kishmish inside the water, filter the water and drink it. Raisin or Kishmish is the trade name of dried grapes. Is there anything can i help you with?",
    NASAL_BLOCK_MESSAGE: "Take a handful of Nochi leaves, put it in water, add a pinch of turmeric powder and boil it. Take vapor bath from the boiled mixture. Is there anything can i help you with?",
    FEVER_MESSAGE: "Take 15 leaves of Nilavembu, put it in 2 glasses of waters and boil till it becomes one glass, drink it hot. Drink the decoction every 4 hours until fever and body ache subsides. Is there anything can i help you with?",
    HELP_MESSAGE: 'You can say tell me list of patti vaithiyam, or, you can say exit... What can I help you with?',
    HELP_REPROMPT: 'What can I help you with?',
    FALLBACK_MESSAGE: 'The Patty Vaithiyam skill can\'t help you with that. You can say tell me list of patti vaithiyam, What can I help you with?',
    FALLBACK_REPROMPT: 'What can I help you with?',
    ERROR_MESSAGE: 'Sorry, an error occurred.',
    STOP_MESSAGE: 'Goodbye!',
  },
};

const eninData = {
  translation: {
    SKILL_NAME: 'Patty Vaithiyam',
  },
};

const enusData = {
  translation: {
    SKILL_NAME: 'Patty Vaithiyam',
  },
};

// constructs i18n and l10n data structure
// translations for this sample can be found at the end of this file
const languageStrings = {
  'en': enData,
  'en-IN': eninData,
  'en-US': enusData,
};
