"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _clsx = require("clsx");
var _react = require("react");
var _reactNative = require("react-native");
var _reactNativeCssInterop = require("react-native-css-interop");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _tailwindMerge = require("tailwind-merge");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var getWP = function getWP(percent) {
  return percent / 100 * _reactNative.Dimensions.get('window').width;
};
var _Dimensions$get = _reactNative.Dimensions.get('screen'),
  width = _Dimensions$get.width;
var GAP = getWP(12);
var ITEM_WIDTH = width * 0.8;
var TOTAL_WIDTH = ITEM_WIDTH + GAP;
var StyledView = (0, _reactNativeCssInterop.cssInterop)(_reactNative.View, {
  className: 'style'
});
var Carousel = function Carousel(_ref) {
  var data = _ref.data,
    renderItem = _ref.renderItem,
    _ref$autoPlay = _ref.autoPlay,
    autoPlay = _ref$autoPlay === void 0 ? true : _ref$autoPlay,
    _ref$variants = _ref.variants,
    variants = _ref$variants === void 0 ? 'default' : _ref$variants,
    className = _ref.className;
  var scrollX = (0, _reactNativeReanimated.useSharedValue)(0);
  var offset = (0, _reactNativeReanimated.useSharedValue)(0);
  var ref = (0, _reactNativeReanimated.useAnimatedRef)();
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isAutoPlay = _useState2[0],
    setIsAutoPlay = _useState2[1];
  var onScrollHandler = (0, _reactNativeReanimated.useAnimatedScrollHandler)({
    onScroll: function onScroll(event) {
      scrollX.value = event.contentOffset.x;
    },
    onMomentumEnd: function onMomentumEnd(event) {
      offset.value = Math.round(event.contentOffset.x / TOTAL_WIDTH);
    }
  });
  (0, _reactNativeReanimated.useDerivedValue)(function () {
    (0, _reactNativeReanimated.scrollTo)(ref, offset.value * TOTAL_WIDTH, 0, true);
  });
  (0, _react.useEffect)(function () {
    var intervalId;
    if (isAutoPlay && autoPlay) {
      intervalId = setInterval(function () {
        offset.value = (offset.value + 1) % data.length;
      }, 3000);
    }
    return function () {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlay, offset, data, autoPlay]);
  return <_reactNative.View className="align-center ml-[-15px] flex max-h-[150] justify-center">
      <_reactNativeReanimated.default.FlatList ref={ref} horizontal contentContainerStyle={{
      gap: GAP
    }} data={data} decelerationRate="fast" keyExtractor={function (_, index) {
      return index.toString();
    }} renderItem={function (_ref2) {
      var item = _ref2.item,
        index = _ref2.index;
      return <CarouselItem className={className} data={data} index={index} scrollX={scrollX} variants={variants}>
            {renderItem(item, index)}
          </CarouselItem>;
    }} scrollEventThrottle={16} showsHorizontalScrollIndicator={false} snapToInterval={TOTAL_WIDTH} onScroll={onScrollHandler} onScrollBeginDrag={function () {
      return setIsAutoPlay(false);
    }} onScrollEndDrag={function () {
      return setIsAutoPlay(true);
    }} />
    </_reactNative.View>;
};
var variantStyles = {
  "default": 'flex-1 border border-gray-200',
  rounded: 'rounded-md flex-1 border border-gray-200'
};
var CarouselItem = function CarouselItem(_ref3) {
  var index = _ref3.index,
    scrollX = _ref3.scrollX,
    data = _ref3.data,
    children = _ref3.children,
    _ref3$variants = _ref3.variants,
    variants = _ref3$variants === void 0 ? 'default' : _ref3$variants,
    className = _ref3.className;
  var rnAnimatedStyles = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    var inputRange = [(index - 1) * TOTAL_WIDTH, index * TOTAL_WIDTH, (index + 1) * TOTAL_WIDTH];
    return {
      transform: [{
        translateX: (0, _reactNativeReanimated.interpolate)(scrollX.value, inputRange, [-TOTAL_WIDTH * 0.1, 0, TOTAL_WIDTH * 0.1], _reactNativeReanimated.Extrapolation.CLAMP)
      }]
    };
  });
  var getItemMargin = function getItemMargin(index, data) {
    if (!(data !== null && data !== void 0 && data.length)) return {};
    if (index === 0) {
      return {
        marginStart: 15
      };
    } else if (index === (data === null || data === void 0 ? void 0 : data.length) - 1) {
      return {
        marginEnd: 15
      };
    }
    return {};
  };
  return <_reactNative.TouchableOpacity>
      <_reactNativeReanimated.default.View style={[rnAnimatedStyles, _objectSpread({
      height: 150,
      maxHeight: 150,
      justifyContent: 'center',
      width: ITEM_WIDTH,
      borderRadius: 10,
      paddingRight: 16,
      flexDirection: 'row',
      alignItems: 'center'
    }, getItemMargin(index, data))]}>
        <StyledView className={cn(variantStyles[variants], className)}>{children}</StyledView>
      </_reactNativeReanimated.default.View>
    </_reactNative.TouchableOpacity>;
};
var _default = exports["default"] = Carousel;
//# sourceMappingURL=Carousel.js.map