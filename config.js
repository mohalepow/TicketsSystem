/*
  ███████████████████████████████████████████████████████████████████
  █▀▀▀▀▀█████▀▄─██▄─▄─▀█▄─▄▄▀█▄─██─▄█▄─▄███▄─▄████▀▄─██─█─███████████
  ███████████─▀─███─▄─▀██─██─██─██─███─██▀██─██▀██─▀─██─▄─███░░██░░██
  ▀▀▀▀▀▀▀▀▀▀▄▄▀▄▄▀▄▄▄▄▀▀▄▄▄▄▀▀▀▄▄▄▄▀▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▀▄▄▀▄▀▄▀▀▀▄▄▀▀▄▄▀▀
*/

const config = {
    prefix: '-', //برفكس البوت
    token: 'OTA3NDMzMTUyNTM0OTU0MDI0.YYnG-g.-JGxKHDMY_o61i1q6M2FyCXkroo', // التوكن
    debug: 'false',
    antispam_minute: '5', //عدد الدقائق لعدم تكرار فتح تذكرة
    serverurl: 'https://discord.gg/t4RkjHSDBc',
    panel_message: '**╔═══ 『𝐂𝐏𝐑𝐏』 ═══╗**\n**فتح تذكرة متجر「🛒」•**\n\n**فتح تذكرة تعويض「💵」•**\n\n**فتح تذكرة الباند「🚫」•**\n\n**الاستفسارات العامه「❓」•**\n** ╚═══ 『𝐂𝐏𝐑𝐏』 ═══╝ **',
    servername: '» CPRP',
    transcript: 'administrator',
    /*----------------------*/
    close_type: 'close', /* delete or close */
    categoryID_move: '907443409650847815', /* مهم أيدي كاتيجوري التذاكر المغلقه */
    /*----------------------*/
    autodelete_status: 'false', /* حذف التكتات المهملة */
    AutoDelete_inactive: '12',
    /*----------------------*/
    logs: '907443029563039784', /* مهم أيدي أيدي روم اللوقات */
    reopened: '907443409650847815', /* مهم أيدي كاتيجوري التكتات المغلقه بعد فتحها تنقل له */
    /*----------------------*/
    user_permissions: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY'],
    tickets: [
          {//تنسخ من هنا
            channel_name: "{ticket_reaction}〢ticket_{counter}",
            reaction: "🛒",
            title: "شراء من المتجر",
            message: '\`\`\`تم إنشاء تذكرتك بنجاح\`\`\`',
            managers: [`901441609789472778`],
            category: '901185329023815760',
            permissions: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY'],
          },//الى هنا
          {//تنسخ من هنا
            channel_name: "{ticket_reaction}〢ticket_{counter}",
            reaction: "💵",
            title: "طلب تعويض",
            message: '\`\`\`تم إنشاء تذكرتك بنجاح\`\`\`',
            managers: [`901453182415278130`],
            category: '903205648550998036',
            permissions: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY'],
           },//الى هنا
           {//تنسخ من هنا
          channel_name: "{ticket_reaction}〢ticket_{counter}",
          reaction: "🚫",
          title: "تذكرة الباند",
          message: '\`\`\`تم إنشاء تذكرتك بنجاح\`\`\`',
          managers: [`901452278018498611`],
          category: '903205665735073835',
          permissions: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY'],
           },//الى هنا
           {//تنسخ من هنا
                channel_name: "{ticket_reaction}〢ticket_{counter}",
                reaction: "❓",
                title: "استفسارات عامه",
                message: '\`\`\`تم إنشاء تذكرتك بنجاح\`\`\`',
                managers: [`901477622385631232`],
                category: '901184331953864735',
                permissions: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY'],
        },//الى هنا

  ] 

}

module.exports = config
