const util = require("util");
const fs = require("fs-extra");
const {
  cmd
} = require("../lib/plugins");
const {
  formatp,
  formatDate,
  TelegraPh,
  aitts,
  tlang,
  botpic,
  smd,
  prefix,
  fetchJson,
  runtime,
  Config,
  parsedJid,
  sleep,
  createUrl
} = require("../lib");
const axios = require("axios");
const fetch = require("node-fetch");
const os = require("os");
const speed = require("performance-now");
const API_KEY = "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";
function _0x2a0d(_0x32de74, _0xce23fd) {
  const _0x3ffb1a = _0x2953();
  _0x2a0d = function (_0x151552, _0x18c062) {
    _0x151552 = _0x151552 - 233;
    let _0x5c396f = _0x3ffb1a[_0x151552];
    return _0x5c396f;
  };
  return _0x2a0d(_0x32de74, _0xce23fd);
}
function _0x2953() {
  const _0x4f0c10 = ["json", "choices", "2KTKIiW", "application/json", "chat", "http://api.brainshop.ai/get?bid=175685&key=Pg8Wu8mrDQjfr0uv&uid=[", "4017447FwUKbt", "2673069xtYnEg", "REMOVE_BG_KEY", "Bearer ", "image-alpha-001", "320668Kzvhym", "data", "then", "message", "1548910BYiCAA", "error in aiResponce : ", "119490ILpvcx", "system", "sender", "binary", "from", "log", "dalle", "https://api.remove.bg/v1.0/removebg", "567277OBjzQH", "length", "get", "POST", "stringify", "content", "512x512", "78qmNvDj", "https://api.openai.com/v1/images/generations", "Error While getting Ai responce ", "url", "catch", "]&msg=[", "split", "8yTiNwA", "You", "gpt", "1769427SEqioY"];
  _0x2953 = function () {
    return _0x4f0c10;
  };
  return _0x2953();
}
(function (_0x4f4b4b, _0x46381a) {
  const _0x23b0f7 = _0x2a0d;
  const _0x17ab9c = _0x4f4b4b();
  while (true) {
    try {
      const _0x24d937 = parseInt(_0x23b0f7(264)) / 1 * (-parseInt(_0x23b0f7(241)) / 2) + parseInt(_0x23b0f7(238)) / 3 + -parseInt(_0x23b0f7(250)) / 4 + -parseInt(_0x23b0f7(256)) / 5 * (parseInt(_0x23b0f7(271)) / 6) + parseInt(_0x23b0f7(246)) / 7 * (parseInt(_0x23b0f7(235)) / 8) + parseInt(_0x23b0f7(245)) / 9 + -parseInt(_0x23b0f7(254)) / 10;
      if (_0x24d937 === _0x46381a) {
        break;
      } else {
        _0x17ab9c.push(_0x17ab9c.shift());
      }
    } catch (_0x1a2819) {
      _0x17ab9c.push(_0x17ab9c.shift());
    }
  }
})(_0x2953, 305050);
async function aiResponce(_0x109acf, _0xf00650, _0x2728a0 = "") {
  const _0x242f00 = _0x2a0d;
  let _0x2d78d9 = "";
  try {
    if (_0xf00650 === _0x242f00(243)) {
      _0x2d78d9 = await (await axios[_0x242f00(266)](_0x242f00(244) + _0x109acf[_0x242f00(258)][_0x242f00(234)]("@")[0] + _0x242f00(233) + _0x2728a0 + "]"))[_0x242f00(251)].cnt;
    } else if (_0xf00650 === _0x242f00(237)) {
      const _0x3e1043 = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: _0x242f00(248) + Config.OPENAI_API_KEY
        },
        body: JSON[_0x242f00(268)]({
          model: "gpt-3.5-turbo",
          messages: [{
            role: _0x242f00(257),
            content: _0x242f00(236)
          }, {
            role: "user",
            content: _0x2728a0
          }]
        })
      });
      const _0x26c61c = await _0x3e1043[_0x242f00(239)]();
      if (!_0x26c61c[_0x242f00(240)] || _0x26c61c[_0x242f00(240)][_0x242f00(265)] === 0) {
        _0x2d78d9 = "*Invalid ChatGPT API Key, Please Put New Key*";
      } else {
        _0x2d78d9 = _0x26c61c[_0x242f00(240)][0][_0x242f00(253)][_0x242f00(269)];
      }
    } else if (_0xf00650 === _0x242f00(262)) {
      const _0x1a4db1 = await fetch(_0x242f00(272), {
        method: _0x242f00(267),
        headers: {
          "Content-Type": _0x242f00(242),
          Authorization: _0x242f00(248) + Config.OPENAI_API_KEY
        },
        body: JSON[_0x242f00(268)]({
          model: _0x242f00(249),
          prompt: _0x2728a0,
          size: _0x242f00(270),
          response_format: _0x242f00(274)
        })
      });
      const _0x2cdadf = await _0x1a4db1[_0x242f00(239)]();
      _0x2d78d9 = _0x2cdadf[_0x242f00(251)][0][_0x242f00(274)];
    }
    if (_0xf00650 === "rmbg") {
      const _0x142226 = {
        image_url: _0x2728a0,
        size: "auto"
      };
      axios.post(_0x242f00(263), _0x142226, {
        headers: {
          "X-Api-Key": Config[_0x242f00(247)]
        },
        responseType: "arraybuffer"
      })[_0x242f00(252)](_0x18f9bd => {
        const _0x382416 = _0x242f00;
        _0x2d78d9 = Buffer[_0x382416(260)](_0x18f9bd[_0x382416(251)], _0x382416(259));
      })[_0x242f00(275)](_0x25d8c1 => {
        _0x2d78d9 = false;
      });
    }
    return _0x2d78d9;
  } catch (_0x4eee67) {
    console[_0x242f00(261)](_0x242f00(255), _0x4eee67);
    return _0x242f00(273);
  }
};
smd({
  pattern: "imagine2",
  alias: ["imagin2"],
  desc: "chat with an AI",
  category: "ai",
  use: "<boy walking on street>",
  filename: __filename
}, async (_0x39716c, _0xe79cfd) => {
  try {
    let _0x5e79d4 = _0xe79cfd || _0x39716c.reply_text;
    if (!_0x5e79d4) {
      return await _0x39716c.reply("*Give Me A Query To Get imagination?*");
    }
    const _0x14515f = "https://gurugpt.cyclic.app/dalle?prompt=" + encodeURIComponent(_0x5e79d4 + " \nNOTE: Make sure to looks like imagination");
    let _0x5d0b6a = false;
    try {
      const _0x37057d = await fetch("https://aemt.me/openai?text=" + (_0x5e79d4 + " \nNOTE: Make sure to looks like imagination, make it short and concise, also in english!"));
      const _0x644785 = await _0x37057d.json();
      _0x5d0b6a = _0x644785 && _0x644785.status && _0x644785.result ? _0x644785.result : "";
    } catch (_0x3ecac9) {
      _0x5d0b6a = false;
    }
    try {
      return await _0x39716c.bot.sendMessage(_0x39716c.chat, {
        image: {
          url: _0x14515f
        },
        caption: "*[IMAGININATION]:* ```" + _0x5e79d4 + " ```" + (_0x5d0b6a ? "\n\n*[RESPONCE]:* ```" + _0x5d0b6a + "``` \n" : "") + "  \n " + Config.caption + " "
      });
    } catch (_0x484392) {
      console.log("ERROR IN IMAGINE RESPONCE FROM API GURUGPT\n", _0x484392);
    }
    if (Config.OPENAI_API_KEY == "" || !Config.OPENAI_API_KEY || !("" + Config.OPENAI_API_KEY).startsWith("sk")) {
      return _0x39716c.reply("```You Dont Have OPENAI API KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys\nAnd Set Key in Heroku OPENAI_API_KEY Var```");
    }
    return await _0x39716c.bot.sendMessage(_0x39716c.chat, {
      image: {
        url: await aiResponce(_0x39716c, "dalle", _0x5e79d4)
      },
      caption: "*---Your DALL-E Result---*\n" + Config.caption
    });
  } catch (_0x110b5d) {
    await _0x39716c.error(_0x110b5d + "\n\ncommand: imagine", _0x110b5d, "*_No responce from Server side, Sorry!!_*");
  }
});
async function Draw(_0x3ab488) {
  const _0x54c8a4 = await fetch("https://api-inference.huggingface.co/models/prompthero/openjourney-v2", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer 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"
    },
    body: JSON.stringify({
      inputs: _0x3ab488
    })
  }).then(_0x5838c2 => _0x5838c2.blob());
  const _0x1c59a6 = await _0x54c8a4.arrayBuffer();
  return Buffer.from(_0x1c59a6);
}