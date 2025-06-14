export default async (req, res) => {
  // Vercel 会自动解析 JSON
  const body = req.body;
  const msg = body.content || "";
  let reply = "";

  // 下面这段根据你的业务自定义
  if (msg.includes("在线人数")) {
    // 这里模拟调用木桶API
    reply = "当前在线人数：42";
  } else if (msg.includes("重启")) {
    // 这里模拟投票逻辑
    reply = "收到重启请求，已投票1/3";
  } else if (msg.includes("服务器状态")) {
    reply = "服务器运行正常";
  }

  res.status(200).json(reply ? { reply } : {});
};
