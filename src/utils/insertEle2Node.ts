const insertEle2Node = (origin: HTMLElement, target: Element) => {
  const originNextEle = origin.nextElementSibling;
  originNextEle
    ? origin.parentElement?.insertBefore(target, originNextEle)
    : origin.parentElement?.appendChild(target);
};

export default insertEle2Node;
