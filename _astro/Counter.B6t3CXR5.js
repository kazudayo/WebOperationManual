import{r as u}from"./index.NEDEFKed.js";var p={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=u,_=Symbol.for("react.element"),x=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,a=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function d(t,e,c){var r,o={},i=null,l=null;c!==void 0&&(i=""+c),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)m.call(e,r)&&!j.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:_,type:t,key:i,ref:l,props:o,_owner:a.current}}s.Fragment=x;s.jsx=d;s.jsxs=d;p.exports=s;var n=p.exports;const y=()=>{const[t,e]=u.useState(0);return n.jsxs(n.Fragment,{children:[n.jsx("h1",{children:"React Counter"}),n.jsx("div",{children:t}),n.jsxs("div",{children:[n.jsx("button",{onClick:()=>e(t+1),children:"increment"}),n.jsx("button",{onClick:()=>e(t-1),children:"decrement"})]})]})};export{y as default};
