function controlStyle(from: string, to: string, keyFrameName: string) {
  const styleSheets = document.styleSheets;

  for (let i = 0; i < styleSheets.length; i++) {
    const styleSheet = styleSheets[i];

    for (let j = 0; j < styleSheet.cssRules.length; j++) {
      const cssRule = styleSheet.cssRules[j];

      // Check if it's a keyframes rule and get its name
      if (cssRule.type === window.CSSRule.KEYFRAMES_RULE && cssRule instanceof window.CSSKeyframesRule) {
        const keyframesRule = cssRule;
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

  const prevElement = document.getElementById(`${prev}`)
  const desElement = document.getElementById(`${des}`)
  if (prevElement && desElement) {
    const prevBgColor = window.getComputedStyle(prevElement).backgroundColor;
    const desBgColor = window.getComputedStyle(desElement).backgroundColor;
    if (desBgColor == prevBgColor) {
      return true
    }
  }
  return false
}



export default controlStyle;