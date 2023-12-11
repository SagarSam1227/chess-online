function controlStyle(from: string, to: string, keyFrameName: string) {
  const styleSheets: StyleSheetList = document.styleSheets;

  for (let i = 0; i < styleSheets.length; i++) {
    const styleSheet: CSSStyleSheet = styleSheets[i];

    for (let j = 0; j < styleSheet.cssRules.length; j++) {
      const cssRule: CSSRule = styleSheet.cssRules[j];

      // Check if it's a keyframes rule and get its name
      if (cssRule.type === window.CSSRule.KEYFRAMES_RULE && cssRule instanceof window.CSSKeyframesRule) {
        const keyframesRule: CSSKeyframesRule = cssRule;
        if (keyframesRule.name === keyFrameName) {
          // Modify the keyframes by changing its values
          keyframesRule.deleteRule('from');
          keyframesRule.deleteRule('to');
          keyframesRule.appendRule(from);
          keyframesRule.appendRule(to);

          // You can adjust the values as needed
          // keyframesRule.cssRules[0].style.right = '75px';
          // keyframesRule.cssRules[0].style.top = '75px';
        }
      }
    }
  }

}



export function checkBackground(des: number, prev: number) {

  const prevElement: HTMLElement | null = document.getElementById(`${prev}`)
  const desElement: HTMLElement | null = document.getElementById(`${des}`)
  if (prevElement && desElement) {
    const prevBgColor: string = window.getComputedStyle(prevElement).backgroundColor;
    const desBgColor: string = window.getComputedStyle(desElement).backgroundColor;
    if (desBgColor == prevBgColor) {
      return true
    }
  }
  return false
}



export default controlStyle;