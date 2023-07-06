const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

/*import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';*/

const BOT_TOKEN="6260165248:AAEanaxH7oSUoIJjBXM1FxIIvO-RCfUasdI"

const bot = new Telegraf(BOT_TOKEN);


bot.start((ctx) => {
    ctx.deleteMessage()
    ctx.reply("Bienvenue sur RNE", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Langues", callback_data: "langues" },
            { text: "Aides", callback_data: "aides" }
          ],
          [{ text: "Recherche", callback_data: "recherche" }]
        ]
      }
    });
  });
  

  //Les actions à faire
  bot.on("callback_query", (ctx) => {
    const callbackData = ctx.callbackQuery.data;
    ctx.deleteMessage()
  
    // Traitez les différentes valeurs de callbackData en fonction de vos besoins
    if (callbackData === "langues") {
      // Gérer l'action du bouton "Langues"
      ctx.reply("Choisissez une langue", {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Francophone", callback_data: "continent" }, { text: "Anglophone", callback_data: "continent" }],
            [{ text: "Hispanohablante", callback_data: "continent" },{ text: "Lusofonos", callback_data: "continent" }],
            [{text:"Retour", callback_data: "menu"}]
          ]
        }
      });
    } else if (callbackData === "aides") {
      // Gérer l'action du bouton "Aides"
    } else if (callbackData === "recherche") {
      // Gérer l'action du bouton "Recherche"
    }
    else if(callbackData==="continent"){
        ctx.reply("Continent", {
            reply_markup: {
              inline_keyboard: [
                [
                  { text: "Afrique", callback_data: "afrique" },
                  { text: "Europe", callback_data: "europe" }
                ],
                [
                    { text: "Amerique", callback_data: "amerique" },
                    { text: "Asie", callback_data: "asie" }
                  ],
                [{ text: "Retour", callback_data: "langues" }]
              ]
            }
          });
    }
    else if(callbackData==="afrique"){
        ctx.reply("Pays", {
            reply_markup: {
              inline_keyboard: [
                [
                  { text: "Congo Brazzaville", callback_data: "province" },
                  { text: "Ghana", callback_data: "province" }
                ],
                [{ text: "Retour", callback_data: "continent" }]
              ]
            }
          });
    }
    else if(callbackData==="province"){
        ctx.reply("Province", {
            reply_markup: {
              inline_keyboard: [
                [
                  { text: "Kouillou", callback_data: "province" },
                  { text: "Bouenza", callback_data: "province" }
                ],
                [{ text: "Retour", callback_data: "afrique" }]
              ]
            }
          });
    }
    
  });
  

bot.launch();

// Enable graceful stop
/*process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));*/


//MES FONCTIONS
const TRADUCTION = {
    "francophone" : {
        "continent" : ["Afrique", "Europe", "Asie", "Amérique"],
    },
    anglophone : {
        continent : ["Africa", "Europe", "Asia", "America"]
    }

}