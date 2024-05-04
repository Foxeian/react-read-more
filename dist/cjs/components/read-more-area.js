"use strict";
'use client';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ReadMoreContent = function (_a) {
    var children = _a.children, textClassName = _a.textClassName, textStyle = _a.textStyle;
    return (React.createElement("p", { className: textClassName, style: __assign({ display: 'inline' }, textStyle) }, children));
};
var ReadMoreArea = function (_a) {
    var children = _a.children, className = _a.className, style = _a.style, _b = _a.expandLabel, expandLabel = _b === void 0 ? 'Read more' : _b, _c = _a.collapseLabel, collapseLabel = _c === void 0 ? 'Read less' : _c, textClassName = _a.textClassName, textStyle = _a.textStyle, buttonClassName = _a.buttonClassName, buttonStyle = _a.buttonStyle, _d = _a.lettersLimit, lettersLimit = _d === void 0 ? 500 : _d;
    var _e = React.useState(false), expanded = _e[0], setExpanded = _e[1];
    var onShowMore = React.useCallback(function () { return setExpanded(true); }, []);
    var onShowLess = React.useCallback(function () { return setExpanded(false); }, []);
    var text = new String(children);
    var textExpander = expanded ? children : text.substring(0, lettersLimit) + '...';
    return (React.createElement("div", { className: className, style: __assign({ display: 'black' }, style) },
        React.createElement(ReadMoreContent, { textClassName: textClassName, textStyle: textStyle }, textExpander),
        text.length > lettersLimit && (React.createElement("button", { className: buttonClassName, style: __assign({ display: 'inline', color: 'unset', backgroundColor: 'unset', border: 'unset', textDecoration: 'underline', cursor: 'pointer', paddingLeft: '8px', paddingRight: '8px' }, buttonStyle), onClick: expanded ? onShowLess : onShowMore }, expanded ? collapseLabel : expandLabel))));
};
exports.default = ReadMoreArea;
//# sourceMappingURL=read-more-area.js.map