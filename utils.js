
bot.command('quit', async (ctx) => {
    // Explicit usage
    await ctx.telegram.leaveChat(ctx.message.chat.id);
  
    // Using context shortcut
    await ctx.leaveChat();
  });
  
  bot.on(message('text'), async (ctx) => {
    // Explicit usage
    await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);
  
    // Using context shortcut
    await ctx.reply(`Hello ${ctx.state.role}`);
  });
  
  bot.on('callback_query', async (ctx) => {
    // Explicit usage
    await ctx.telegram.answerCbQuery(ctx.callbackQuery.id);
  
    // Using context shortcut
    await ctx.answerCbQuery();
  });
  
  bot.on('inline_query', async (ctx) => {
    const result = [];
    // Explicit usage
    await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);
  
    // Using context shortcut
    await ctx.answerInlineQuery(result);
  });
  

  /* 
  
1.71 https://www.facebook.com/groups/321684537915414/
1.72 https://www.facebook.com/groups/351188081885338/
1.73 https://www.facebook.com/groups/afriqsolidariteemploiformat/
1.74 https://www.facebook.com/groups/867618547470653/
1.75 https://www.facebook.com/groups/184249576349173/
1.76 https://www.facebook.com/groups/520115628884166/
1.77 https://www.facebook.com/groups/safaris.en.afrique/
1.78 https://www.facebook.com/groups/904769113390599/
1.79 https://www.facebook.com/groups/voyages.france.et.europe/
1.80 https://www.facebook.com/groups/923377474370086/
1.81 https://www.facebook.com/groups/459893345891775/
1.82 https://www.facebook.com/groups/279142157651167/
1.83 https://www.facebook.com/groups/1854778541451844/
1.84 https://www.facebook.com/groups/legroupefacebookwhatsappamitiamourfra/
1.85 https://www.facebook.com/groups/365130513634731/
1.86 https://www.facebook.com/groups/MimoDiaLeydimen/
1.87 https://www.facebook.com/groups/399116000922012/
1.88 https://www.facebook.com/groups/1925271904363340/
1.89 https://www.facebook.com/groups/1749378965369781/
1.90 https://www.facebook.com/groups/803346299761868/
1.91 https://www.facebook.com/groups/je.consomme.afric1/
1.92 https://www.facebook.com/groups/189441584401512/
1.93 https://www.facebook.com/groups/1913602572114294/
1.94 https://www.facebook.com/groups/486407078821372/
1.95 https://www.facebook.com/groups/317465509244790/
1.96 https://www.facebook.com/groups/je.pars.en.afrique/
1.97 https://www.facebook.com/groups/1307745922715732/
1.98 https://www.facebook.com/groups/VoyagerEnAfrique/
1.99 https://www.facebook.com/groups/naturalisation/
1.100 https://www.facebook.com/groups/968319316553244/
1.101 https://www.facebook.com/groups/773486357511348/
1.102 https://www.facebook.com/groups/922237984646091/
1.103 https://www.facebook.com/groups/370418896464122/
1.104 https://www.facebook.com/groups/296697517506890/
1.105 https://www.facebook.com/groups/209744370810/
1.106 https://www.facebook.com/groups/positivattitud/
1.107 https://www.facebook.com/groups/130896940900135/
1.108 https://www.facebook.com/groups/308603426498890/
1.109 https://www.facebook.com/groups/1775828542749503/
1.110 https://www.facebook.com/groups/738408112920068/
1.111 https://www.facebook.com/groups/156485878302249/
1.112 https://www.facebook.com/groups/Infosafricaines/
1.113 https://www.facebook.com/groups/2002525963332056/
1.114 https://www.facebook.com/groups/1440073859575335/
1.115 https://www.facebook.com/groups/2173679486235168/
1.116 https://www.facebook.com/groups/acohen.il.sioniste.afrique.fr/
1.117 https://www.facebook.com/groups/820821961398725/
1.118 https://www.facebook.com/groups/2690078524545864/
1.119 https://www.facebook.com/groups/2359293514387939/
1.120 https://www.facebook.com/groups/1472327592835437/
1.121 https://www.facebook.com/groups/808382106257504/
1.122 https://www.facebook.com/groups/477131069333647/
1.123 https://www.facebook.com/groups/114188529197695/
  */