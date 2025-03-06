function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { Ionicons } from '@expo/vector-icons';
import { clsx } from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { twMerge } from 'tailwind-merge';
import Text from '../text/Text';
function cn() {
  for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {
    inputs[_key] = arguments[_key];
  }
  return twMerge(clsx(inputs));
}
var duration = 300;
var StyledAccordion = cssInterop(TouchableOpacity, {
  className: 'style'
});
var StyledAccordionContent = cssInterop(View, {
  className: 'style'
});
var Accordion = function Accordion(_ref) {
  var viewKey = _ref.viewKey,
    title = _ref.title,
    children = _ref.children,
    _ref$textColor = _ref.textColor,
    textColor = _ref$textColor === void 0 ? 'black' : _ref$textColor,
    className = _ref.className,
    _ref$onPress = _ref.onPress,
    onPress = _ref$onPress === void 0 ? function () {} : _ref$onPress;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    measuredHeight = _useState2[0],
    setMeasuredHeight = _useState2[1];
  var height = useSharedValue(0);
  var rotation = useSharedValue(0);
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpen = _useState4[0],
    setIsOpen = _useState4[1];
  var toggleAccordion = useCallback(function () {
    var isOpening = rotation.value === 0;
    setIsOpen(isOpening);
    rotation.value = withTiming(isOpening ? 180 : 0, {
      duration: duration
    });
    height.value = withTiming(isOpening ? measuredHeight : 0, {
      duration: duration
    });
  }, [measuredHeight]);
  useEffect(function () {
    if (isOpen) {
      height.value = withTiming(measuredHeight, {
        duration: duration
      });
    }
  }, [measuredHeight]);
  var iconStyle = useAnimatedStyle(function () {
    return {
      transform: [{
        rotate: "".concat(rotation.value, "deg")
      }]
    };
  });
  var bodyStyle = useAnimatedStyle(function () {
    return {
      height: height.value,
      overflow: 'hidden'
    };
  });
  return <StyledAccordionContent className={cn('min-w-[300px] max-w-[350px] justify-center border-b border-gray-200', className)}>
      <StyledAccordion accessibilityRole="button" accessibilityState={{
      expanded: rotation.value === 180
    }} className="flex-row items-center justify-start py-4" onPress={toggleAccordion}>
        <Text className="text-left" color={textColor} variant="muted">
          {title}
        </Text>
        <Animated.View className="ml-auto" style={[iconStyle]}>
          <Ionicons color={textColor} name="chevron-down" size={20} />
        </Animated.View>
      </StyledAccordion>

      <TouchableOpacity className="absolute left-0 right-0 opacity-0" onLayout={function (e) {
      return setMeasuredHeight(e.nativeEvent.layout.height);
    }} onPress={toggleAccordion}>
        <Text className="pb-4 text-left" color={textColor} variant="small">
          {children}
        </Text>
      </TouchableOpacity>

      <Animated.View key={"accordionItem_".concat(viewKey)} className="self-start" style={[bodyStyle]} onTouchEnd={function () {
      if (isOpen) {
        toggleAccordion();
        onPress();
      }
    }}>
        <Text className="pb-4 text-left" color={textColor} variant="small">
          {children}
        </Text>
      </Animated.View>
    </StyledAccordionContent>;
};
export default Accordion;
//# sourceMappingURL=Accordion.js.map