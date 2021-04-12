const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi;

export default htmlSerializer = (type, element, content, children) => {
  if (type === "paragraph") {
    const urlsReplaced = content.replaceAll(regex, match => {
      const anchor = match.slice(0, 19);
      return `<a href="${match}">${anchor}</a>`;
    });
    return `<p>${urlsReplaced}</p>`;
  }
  return null;
};
