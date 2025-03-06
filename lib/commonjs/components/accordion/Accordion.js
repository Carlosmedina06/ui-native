"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _vectorIcons = require("@expo/vector-icons");
var _clsx = require("clsx");
var _react = require("react");
var _reactNative = require("react-native");
var _reactNativeCssInterop = require("react-native-css-interop");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _tailwindMerge = require("tailwind-merge");
var _Text = _interopRequireDefault(require("../text/Text"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function cn() {
  for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {
    inputs[_key] = arguments[_key];
  }
  return (0, _tailwindMerge.twMerge)((0, _clsx.clsx)(inputs));
}
var duration = 300;
var StyledAccordion = (0, _reactNativeCssInterop.cssInterop)(_reactNative.TouchableOpacity, {
  className: 'style'
});
var StyledAccordionContent = (0, _reactNativeCssInterop.cssInterop)(_reactNative.View, {
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
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    measuredHeight = _useState2[0],
    setMeasuredHeight = _useState2[1];
  var height = (0, _reactNativeReanimated.useSharedValue)(0);
  var rotation = (0, _reactNativeReanimated.useSharedValue)(0);
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpen = _useState4[0],
    setIsOpen = _useState4[1];
  var toggleAccordion = (0, _react.useCallback)(function () {
    var isOpening = rotation.value === 0;
    setIsOpen(isOpening);
    rotation.value = (0, _reactNativeReanimated.withTiming)(isOpening ? 180 : 0, {
      duration: duration
    });
    height.value = (0, _reactNativeReanimated.withTiming)(isOpening ? measuredHeight : 0, {
      duration: duration
    });
  }, [measuredHeight]);
  (0, _react.useEffect)(function () {
    if (isOpen) {
      height.value = (0, _reactNativeReanimated.withTiming)(measuredHeight, {
        duration: duration
      });
    }
  }, [measuredHeight]);
  var iconStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        rotate: "".concat(rotation.value, "deg")
      }]
    };
  });
  var bodyStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      height: height.value,
      overflow: 'hidden'
    };
  });
  return <StyledAccordionContent className={cn('min-w-[300px] max-w-[350px] justify-center border-b border-gray-200', className)}>
      <StyledAccordion accessibilityRole="button" accessibilityState={{
      expanded: rotation.value === 180
    }} className="flex-row items-center justify-start py-4" onPress={toggleAccordion}>
        <_Text.default className="text-left" color={textColor} variant="muted">
          {title}
        </_Text.default>
        <_reactNativeReanimated.default.View className="ml-auto" style={[iconStyle]}>
          <_vectorIcons.Ionicons color={textColor} name="chevron-down" size={20} />
        </_reactNativeReanimated.default.View>
      </StyledAccordion>

      <_reactNative.TouchableOpacity className="absolute left-0 right-0 opacity-0" onLayout={function (e) {
      return setMeasuredHeight(e.nativeEvent.layout.height);
    }} onPress={toggleAccordion}>
        <_Text.default className="pb-4 text-left" color={textColor} variant="small">
          {children}
        </_Text.default>
      </_reactNative.TouchableOpacity>

      <_reactNativeReanimated.default.View key={"accordionItem_".concat(viewKey)} className="self-start" style={[bodyStyle]} onTouchEnd={function () {
      if (isOpen) {
        toggleAccordion();
        onPress();
      }
    }}>
        <_Text.default className="pb-4 text-left" color={textColor} variant="small">
          {children}
        </_Text.default>
      </_reactNativeReanimated.default.View>
    </StyledAccordionContent>;
};
var _default = exports["default"] = Accordion;
//# sourceMappingURL=Accordion.js.map