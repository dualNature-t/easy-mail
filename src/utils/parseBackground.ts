const parseBackground = (backgroundValue: string) => {
  if (!backgroundValue) return { color: "", url: "" };
  const colorRegex = /#\b[0-9a-fA-F]{6}\b/g; // 匹配6位十六进制颜色
  const urlRegex = /url\(['"]?([^'")]+?)['"]?\)/g; // 匹配URL，支持单双引号或无引号

  let colorMatch = backgroundValue.match(colorRegex);
  let urlMatch = backgroundValue.match(urlRegex);
  let url = "";
  let color = "";

  if (colorMatch) {
    color = colorMatch[0];
  }

  if (urlMatch) {
    urlMatch.forEach((match) => {
      const urlRes = match.replace(/url\(['"]?|(['"])?\)/g, ""); // 清理字符串以获取URL
      url = urlRes;
    });
  }

  return { color, url };
};

export default parseBackground;
