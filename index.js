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
          [{ text: "Francophone", callback_data: "langue" }, { text: "Anglophone", callback_data: "langue" }],
            [{ text: "Hispanohablante", callback_data: "langue" },{ text: "Lusofonos", callback_data: "langue" }],
            //[{text:"QUITTER", callback_data: "QUITTER"}]
        ]
      }
    });
  });
  

  //Les actions à faire
  bot.on("callback_query", (ctx) => {
    const callbackData = ctx.callbackQuery.data;
    ctx.deleteMessage()

    if(callbackData.startsWith("lien_continent")){
      const liste_continent = ["Afrique", "Europe", "Amerique", "Asie", "Antartique", "Océanie"]
      const continent = callbackData.split(":")[1]
      const index = liste_continent.indexOf(continent)
      console.log(index)
      ctx.reply(`${index+1}. ${continent}\n
      ${LIENS_CONTINENTS[index]}`, {
        reply_markup: {
          inline_keyboard: [
            [{text:"Retour", callback_data: "continent"}]
          ]
        }
      });
    }
  
    // Traitez les différentes valeurs de callbackData en fonction de vos besoins
    if (callbackData === "langue") {
      // Gérer l'action du bouton "Langues"
      ctx.reply("Choisissez une option", {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Continents", callback_data: "continent" }, { text: "Pays Francophones", callback_data: "pays francophones" }],
            //[{ text: "Amérique", callback_data: "continent" },{ text: "Asie", callback_data: "continent" }],
            [{text:"Retour", callback_data: "menu"}]
          ]
        }
      });
    }
    else if(callbackData === "menu"){
      ctx.reply("Bienvenue sur RNE", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Francophone", callback_data: "langue" }, { text: "Anglophone", callback_data: "langue" }],
            [{ text: "Hispanohablante", callback_data: "langue" },{ text: "Lusofonos", callback_data: "langue" }],
            //[{text:"QUITTER", callback_data: "QUITTER"}]
        ]
      }
    });
    }
    else if(callbackData=="continent"){
      ctx.reply("Choisissez une option", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "1. Afrique", callback_data: "lien_continent:Afrique" }, { text: "2. Europe", callback_data: "lien_continent:Europe" }],
            [{ text: "3. Amérique du nord/sud", callback_data: "lien_continent:Amérique" },{ text: "4. Asie", callback_data: "lien_continent:Asie" }],
          [{ text: "5. Antartique", callback_data: "lien_continent:Antartique" }, { text: "6. Océanie", callback_data: "lien_continent:Océanie" }],
            [{text:"Retour", callback_data: "langue"}]
        ]
      }
    });
    }
    
    else if(callbackData=="pays francophones"){
      ctx.reply("Les pays francophones ne sont pas encore disponible pour l'instant.", {
        reply_markup: {
          inline_keyboard: [
              [{text:"Retour", callback_data: "langue"}]
          ]
        }
      });
    }

    else if (callbackData=="afrique"){

    }


     else if (callbackData === "aides") {
      // Gérer l'action du bouton "Aides"
    } else if (callbackData === "recherche") {
      // Gérer l'action du bouton "Recherche"
    }
    
  });
  

bot.launch();

const LIENS_CONTINENTS = [`1.1 https://www.facebook.com/groups/1484720455134038/

1.2 https://www.facebook.com/groups/470713840331/

1.3 https://www.facebook.com/groups/325611895901672/

1.4 https://www.facebook.com/groups/africainsdefrance/

1.5 https://www.facebook.com/groups/1636255639953941/

1.6 https://www.facebook.com/groups/burkina2015/

1.7 https://www.facebook.com/groups/lajeunesseafricainedaujourdhui/

1.8 https://www.facebook.com/groups/761824107211744/

1.9 https://www.facebook.com/groups/alphablondy30ans/

1.10 https://www.facebook.com/groups/581316375342371/

1.11 https://www.facebook.com/groups/923279308023891/

1.12 https://www.facebook.com/groups/473512369895138/

1.13 https://www.facebook.com/groups/841879096310309/

1.14 https://www.facebook.com/groups/awa.gueye.3975/

1.15 https://www.facebook.com/groups/516591652103741/

1.16 https://www.facebook.com/groups/305077060233603/

1.17 https://www.facebook.com/groups/1344870302920978/

1.18 https://www.facebook.com/groups/jadorelacuisineafricaine.jaipasunemeilleu/

1.19 https://www.facebook.com/groups/640911907727288/

1.20 https://www.facebook.com/groups/403183196933093/

1.21 https://www.facebook.com/groups/233371411847843/

1.22 https://www.facebook.com/groups/571894844871121/

1.23 https://www.facebook.com/groups/203487110530330/

1.24 https://www.facebook.com/groups/2810026952655422/

1.25 https://www.facebook.com/groups/442784229929272/

1.26 https://www.facebook.com/groups/1355332437933485/

1.27 https://www.facebook.com/groups/2374995242757655/

1.28 https://www.facebook.com/groups/325296558108382/

1.29 https://www.facebook.com/groups/1012897762127101/

1.30 https://www.facebook.com/groups/546075009333314/

1.31 https://www.facebook.com/groups/168359318816645/

1.32 https://www.facebook.com/groups/251987678516651/

1.33 https://www.facebook.com/groups/973920189762711/

1.34 https://www.facebook.com/groups/205476009552286/

1.35 https://www.facebook.com/groups/3887184978062718/

1.36 https://www.facebook.com/groups/426619500717580/

1.37 https://www.facebook.com/groups/374761301163487/

1.38 https://www.facebook.com/groups/1901906896518736/

1.39 https://www.facebook.com/groups/1819734488418586/

1.40 https://www.facebook.com/groups/143714316312000/

1.41 https://www.facebook.com/groups/1300052023531579/

1.42 https://www.facebook.com/groups/2221335917969424/

1.43 https://www.facebook.com/groups/172872183356456/

1.44 https://www.facebook.com/groups/373459089493184/

1.45 https://www.facebook.com/groups/2959596041022947/

1.46 https://www.facebook.com/groups/1900965146761949/

1.47 https://www.facebook.com/groups/558510515068551/

1.48 https://www.facebook.com/groups/1486076028212635/

1.49 https://www.facebook.com/groups/1158220641346060/

1.50 https://www.facebook.com/groups/1108627305864074/
`,

//EUROPE
`
2.1 https://www.facebook.com/groups/1646280389077334/

2.2 https://www.facebook.com/groups/42755481346/

2.3 https://www.facebook.com/groups/863440824872278/

2.4 https://www.facebook.com/groups/sitederencontreentreeuropeenmalgacheafri/

2.5 https://www.facebook.com/groups/365383673604121/

2.6 https://www.facebook.com/groups/388129851531192/

2.7 https://www.facebook.com/groups/405620766251349/

2.8 https://www.facebook.com/groups/2169067223105560/

2.9 https://www.facebook.com/groups/anciensnancy/

2.10 https://www.facebook.com/groups/1411688822577478/

2.11 https://www.facebook.com/groups/grouperencontreamoureuxpourmariagefrancomalg/

2.12 https://www.facebook.com/groups/1006659439885759/

2.13 https://www.facebook.com/groups/11527822946/

2.14 https://www.facebook.com/groups/euroschools/

2.15 https://www.facebook.com/groups/720963979686992/

2.16 https://www.facebook.com/groups/1293234027397712/

2.17 https://www.facebook.com/groups/3902816226397642/

2.18 https://www.facebook.com/groups/711346715658061/

2.19 https://www.facebook.com/groups/398516014712267/

2.20 https://www.facebook.com/groups/1713685978641564/

2.21 https://www.facebook.com/groups/1726782087467122/

2.22 https://www.facebook.com/groups/1711863079068212/

2.23 https://www.facebook.com/groups/killenmanzano/

2.24 https://www.facebook.com/groups/3699295430120804/

2.25 https://www.facebook.com/groups/ecologiecentraleurope/

2.26 https://www.facebook.com/groups/491869575357626/

2.27 https://www.facebook.com/groups/wydadclub1937/

2.28 https://www.facebook.com/groups/2920930064674828/

2.29 https://www.facebook.com/groups/823321061334925/

2.30 https://www.facebook.com/groups/1390395861321736/

2.31 https://www.facebook.com/groups/1001381246734882/

2.32 https://www.facebook.com/groups/138130263003030/

2.33 https://www.facebook.com/groups/1706153512964342/

2.34 https://www.facebook.com/groups/1675608739191481/

2.35 https://www.facebook.com/groups/835696589801497/

2.36 https://www.facebook.com/groups/2055782921411635/

2.37 https://www.facebook.com/groups/3935880446440625/

2.38 https://www.facebook.com/groups/poureuropefederale/

2.39 https://www.facebook.com/groups/1180878078970897/
`,

//AMERIQUE
`
3.1 https://www.facebook.com/groups/nordamerique/

3.2 https://www.facebook.com/groups/178513668858395/

3.3 https://www.facebook.com/groups/1012702942595011/

3.4 https://www.facebook.com/groups/599178664593674/

3.5 https://www.facebook.com/groups/180130813984622/

3.6 https://www.facebook.com/groups/1609783836002231/

3.7 https://www.facebook.com/groups/vieamerique/

3.8 https://www.facebook.com/groups/753482398410689/

3.9 https://www.facebook.com/groups/592983152674256/

3.10 https://www.facebook.com/groups/bpvoa/

3.11 https://www.facebook.com/groups/702605217222609/

3.12 https://www.facebook.com/groups/destinationouestamericain/

3.13 https://www.facebook.com/groups/508631704043366/

3.14 https://www.facebook.com/groups/410795955751189/

3.15 https://www.facebook.com/groups/3428077857469175/

3.16 https://www.facebook.com/groups/234487623593737/

3.17 https://www.facebook.com/groups/50032510784/

3.18 https://www.facebook.com/groups/347568798982139/

3.19 https://www.facebook.com/groups/552212082284331/

3.20 https://www.facebook.com/groups/9226671594071147/

3.21 https://www.facebook.com/groups/ufelosangeles/

3.22 https://www.facebook.com/groups/802421289851368/

3.23 https://www.facebook.com/groups/1225080204932183/

3.24 https://www.facebook.com/groups/577648996080491/

3.25 https://www.facebook.com/groups/1419019164949542/

3.26 https://www.facebook.com/groups/VoyagesresponsablesAmeriqueLatine/

3.27 https://www.facebook.com/groups/415751859253781/

3.28 https://www.facebook.com/groups/295874311952118/

3.29 https://www.facebook.com/groups/998081154076373/

3.30 https://www.facebook.com/groups/1388707724512352/

3.31 https://www.facebook.com/groups/303660174090090/

3.32 https://www.facebook.com/groups/AmnestyAmeriqueLatine/

3.33 https://www.facebook.com/groups/998081154076373/

3.34 https://www.facebook.com/groups/1898706687038135/

3.35 https://www.facebook.com/groups/1419019164949542/
`,

//ASIE
`
4.1 https://www.facebook.com/groups/Francophonesenasie/

4.2 https://www.facebook.com/groups/616234962485472/

4.3 https://www.facebook.com/groups/564126381443604/

4.4 https://www.facebook.com/groups/1720069318056456/

4.5 https://www.facebook.com/groups/1012702942595011/

4.6 https://www.facebook.com/groups/asiatiquepower/

4.7 https://www.facebook.com/groups/francaisdasie/

4.8 https://www.facebook.com/groups/1923352857887322/

4.9 https://www.facebook.com/groups/cuisineasie/

4.10 https://www.facebook.com/groups/auditorium.guimet/

4.11 https://www.facebook.com/groups/314403600621638/

4.12 https://www.facebook.com/groups/222495857936222/

4.13 https://www.facebook.com/groups/676015866372204/

4.14 https://www.facebook.com/groups/1734787540199831/

4.15 https://www.facebook.com/groups/adopteunasiatique/

4.16 https://www.facebook.com/groups/union.asiatiques.france/

4.17 https://www.facebook.com/groups/550146229204634/

4.18 https://www.facebook.com/groups/cuisine.vegan.asiatique/

4.19 https://www.facebook.com/groups/1936800543256569/

4.20 https://www.facebook.com/groups/femme.asiatique/

4.21 https://www.facebook.com/groups/amsea.bzh/

4.22 https://www.facebook.com/groups/cuisine.asiatique.recettes.faciles/

4.23 https://www.facebook.com/groups/3402344306526314/

4.24 https://www.facebook.com/groups/426647637524566/

4.25 https://www.facebook.com/groups/1042773109134961/
`,

//ANTARTIQUE
`
5.1 https://www.facebook.com/groups/165720260507964/
5.2 https://www.facebook.com/groups/129347383835985/
`,

//OCEANIE
`
6.1 https://www.facebook.com/groups/1012702942595011/

6.2 https://www.facebook.com/groups/565907891366016/

6.3 https://www.facebook.com/groups/UFFONC/

6.4 https://www.facebook.com/groups/741396911002428/

6.5 https://www.facebook.com/groups/232604662992980/

6.6 https://www.facebook.com/groups/411644176343987/

6.7 https://www.facebook.com/groups/126505108047779/

6.8 https://www.facebook.com/groups/259222880804572/

6.9 https://www.facebook.com/groups/283713813508033/
`
];