const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7808949639:AAH49skb_w3cQBpFWwhcy-peENf207nCJxs',
  id: isNaN(parsedId) ? 6623712290 : parsedId // replace 12345.. with your telegram chat id
};
