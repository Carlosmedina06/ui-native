"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _react = require("react");
var _Text = _interopRequireDefault(require("../text/Text"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
var getWP = function getWP(percent) {
  return percent / 100 * _reactNative.Dimensions.get('window').width;
};
var _Dimensions$get = _reactNative.Dimensions.get('screen'),
  width = _Dimensions$get.width;
var GAP = getWP(12);
var ITEM_WIDTH = width * 0.8;
var TOTAL_WIDTH = ITEM_WIDTH + GAP;
var cards = [{
  title: 'Preguntas frecuentes',
  description: 'Aprendé cómo cargar una receta',
  backgroundColor: '#FFFAEB',
  borderColor: '#FEF0C7'
}, {
  title: 'Nuevo',
  description: 'Consultá recetas disponibles con la credencial',
  backgroundColor: '#d1fadf',
  borderColor: '#d1fadf'
}];
var PromoCarousel = function PromoCarousel() {
  var scrollX = (0, _reactNativeReanimated.useSharedValue)(0);
  var offset = (0, _reactNativeReanimated.useSharedValue)(0);
  var ref = (0, _reactNativeReanimated.useAnimatedRef)(); // eslint-disable-line @typescript-eslint/no-explicit-any
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
    if (isAutoPlay) {
      intervalId = setInterval(function () {
        offset.value = (offset.value + 1) % cards.length;
      }, 3000);
    }
    return function () {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlay, offset]);
  return <_reactNative.View className="align-center ml-[-15px] flex justify-center">
      <_reactNativeReanimated.default.FlatList ref={ref} horizontal contentContainerStyle={{
      gap: GAP
    }} data={cards} decelerationRate="fast" keyExtractor={function (item) {
      return item.title;
    }} renderItem={function (_ref) {
      var item = _ref.item,
        index = _ref.index;
      return <CarruselItem index={index} item={item} scrollX={scrollX} />;
    }} scrollEventThrottle={16} showsHorizontalScrollIndicator={false} snapToInterval={TOTAL_WIDTH} onScroll={onScrollHandler} onScrollBeginDrag={function () {
      return setIsAutoPlay(false);
    }} onScrollEndDrag={function () {
      return setIsAutoPlay(true);
    }} />
    </_reactNative.View>;
};
var CarruselItem = function CarruselItem(_ref2) {
  var item = _ref2.item,
    index = _ref2.index,
    scrollX = _ref2.scrollX;
  var rnAnimatedStyles = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    var inputRange = [(index - 1) * TOTAL_WIDTH, index * TOTAL_WIDTH, (index + 1) * TOTAL_WIDTH];
    return {
      transform: [{
        translateX: (0, _reactNativeReanimated.interpolate)(scrollX.value, inputRange, [-TOTAL_WIDTH * 0.1, 0, TOTAL_WIDTH * 0.1], _reactNativeReanimated.Extrapolation.CLAMP)
      }]
    };
  });

  // Condicional para el margen en el primer y último ítem
  var getItemMargin = function getItemMargin(index) {
    if (index === 0) {
      return {
        marginStart: 15
      }; // Primer ítem
    } else if (index === cards.length - 1) {
      return {
        marginEnd: 15
      }; // Último ítem
    }
    return {}; // Para otros ítems, sin márgenes
  };
  return <_reactNative.TouchableOpacity>
      <_reactNativeReanimated.default.View style={[rnAnimatedStyles, _objectSpread({
      height: 150,
      backgroundColor: item.backgroundColor,
      borderColor: item.borderColor,
      justifyContent: 'center',
      width: ITEM_WIDTH,
      borderRadius: 10,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center'
    }, getItemMargin(index))]}>
        <_reactNative.View className="flex-1 pr-[15px]">
          <_Text.default variant="semibold">{item.title}</_Text.default>\{' '}
          <_Text.default variant="semibold">{item.description}</_Text.default>
        </_reactNative.View>
      </_reactNativeReanimated.default.View>
    </_reactNative.TouchableOpacity>;
};
var _default = exports["default"] = PromoCarousel;
//# sourceMappingURL=Carousel.js.map