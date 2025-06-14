export default async (req, res) => {
  const body = req.body;
  const msg = body.content || "";
  let reply = "";

  if (msg.includes("在线人数")) {
    reply = "当前在线人数：42"; // 这里可以改成你木桶API的返回内容
  } else if (msg.includes("重启")) {
    reply = "收到重启请求，已投票1/3";
  } else if (msg.includes("服务器状态")) {
    reply = "服务器运行正常";
  }

  res.status(200).json(reply ? { reply } : {});
};
