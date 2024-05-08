const { smd } = require("../lib");

smd(
  {
    cmdname: "cat",
    desc: "Send random Images of Cats!",
    type: "misc",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send(
        "https://cataas.com/cat",
        { caption: "*🐹*" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: cat`, e, false);
    }
  }
);
