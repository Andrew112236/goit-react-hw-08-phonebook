"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[59],{3059:function(e,n,r){r.r(n),r.d(n,{default:function(){return Re}});var t=r(5861),o=r(4687),a=r.n(o),i=r(2791),l=r(857),c=r(5822),s=r(4289),d=r(9434),u=r(7689),m=r(9164),p=r(4294),h=r(4554),f=r(890),v=r(533),b=r(1889),Z=r(4708),x=r(5354),g=r(7107),k=r(4507),y=r(4942),P=r(3366),j=r(7462),w=r(3733),C=r(4419),S=r(2930),R=r(2466),F=r(1217),I=r(3457),N=r(7078),z=r(8519),M=r(5080),B=r(1184),L=r(5682),q=r(184),E=["component","direction","spacing","divider","children","className","useFlexGap"],O=(0,M.Z)(),T=(0,I.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}});function A(e){return(0,N.Z)({props:e,name:"MuiStack",defaultTheme:O})}function D(e,n){var r=i.Children.toArray(e).filter(Boolean);return r.reduce((function(e,t,o){return e.push(t),o<r.length-1&&e.push(i.cloneElement(n,{key:"separator-".concat(o)})),e}),[])}var V=function(e){var n=e.ownerState,r=e.theme,t=(0,j.Z)({display:"flex",flexDirection:"column"},(0,B.k9)({theme:r},(0,B.P$)({values:n.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var o=(0,L.hB)(r),a=Object.keys(r.breakpoints.values).reduce((function(e,r){return("object"===typeof n.spacing&&null!=n.spacing[r]||"object"===typeof n.direction&&null!=n.direction[r])&&(e[r]=!0),e}),{}),i=(0,B.P$)({values:n.direction,base:a}),l=(0,B.P$)({values:n.spacing,base:a});"object"===typeof i&&Object.keys(i).forEach((function(e,n,r){if(!i[e]){var t=n>0?i[r[n-1]]:"column";i[e]=t}}));t=(0,R.Z)(t,(0,B.k9)({theme:r},l,(function(e,r){return n.useFlexGap?{gap:(0,L.NA)(o,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":(0,y.Z)({},"margin".concat((t=r?i[r]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[t])),(0,L.NA)(o,e))};var t})))}return t=(0,B.dt)(r.breakpoints,t)};var H=r(6934),W=r(1402),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,r=void 0===n?T:n,t=e.useThemeProps,o=void 0===t?A:t,a=e.componentName,l=void 0===a?"MuiStack":a,c=function(){return(0,C.Z)({root:["root"]},(function(e){return(0,F.Z)(l,e)}),{})},s=r(V),d=i.forwardRef((function(e,n){var r=o(e),t=(0,z.Z)(r),a=t.component,i=void 0===a?"div":a,l=t.direction,d=void 0===l?"column":l,u=t.spacing,m=void 0===u?0:u,p=t.divider,h=t.children,f=t.className,v=t.useFlexGap,b=void 0!==v&&v,Z=(0,P.Z)(t,E),x={direction:d,spacing:m,useFlexGap:b},g=c();return(0,q.jsx)(s,(0,j.Z)({as:i,ownerState:x,ref:n,className:(0,w.Z)(g.root,f)},Z,{children:p?D(h,p):h}))}));return d}({createStyledComponent:(0,H.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,W.Z)({props:e,name:"MuiStack"})}}),_=G,$=r(4036),U=r(5878);function J(e){return(0,F.Z)("MuiFormControlLabel",e)}var K=(0,U.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Q=r(6147),X=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Y=(0,H.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[(0,y.Z)({},"& .".concat(K.label),n.label),n.root,n["labelPlacement".concat((0,$.Z)(r.labelPlacement))]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,j.Z)((0,y.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(K.disabled),{cursor:"default"}),"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,y.Z)({},"& .".concat(K.label),(0,y.Z)({},"&.".concat(K.disabled),{color:(n.vars||n).palette.text.disabled})))})),ee=(0,H.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:function(e,n){return n.asterisk}})((function(e){var n=e.theme;return(0,y.Z)({},"&.".concat(K.error),{color:(n.vars||n).palette.error.main})})),ne=i.forwardRef((function(e,n){var r,t,o=(0,W.Z)({props:e,name:"MuiFormControlLabel"}),a=o.className,l=o.componentsProps,c=void 0===l?{}:l,s=o.control,d=o.disabled,u=o.disableTypography,m=o.label,p=o.labelPlacement,h=void 0===p?"end":p,v=o.required,b=o.slotProps,Z=void 0===b?{}:b,x=(0,P.Z)(o,X),g=(0,S.Z)(),k=null!=(r=null!=d?d:s.props.disabled)?r:null==g?void 0:g.disabled,y=null!=v?v:s.props.required,R={disabled:k,required:y};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof s.props[e]&&"undefined"!==typeof o[e]&&(R[e]=o[e])}));var F=(0,Q.Z)({props:o,muiFormControl:g,states:["error"]}),I=(0,j.Z)({},o,{disabled:k,labelPlacement:h,required:y,error:F.error}),N=function(e){var n=e.classes,r=e.disabled,t=e.labelPlacement,o=e.error,a=e.required,i={root:["root",r&&"disabled","labelPlacement".concat((0,$.Z)(t)),o&&"error",a&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",o&&"error"]};return(0,C.Z)(i,J,n)}(I),z=null!=(t=Z.typography)?t:c.typography,M=m;return null==M||M.type===f.Z||u||(M=(0,q.jsx)(f.Z,(0,j.Z)({component:"span"},z,{className:(0,w.Z)(N.label,null==z?void 0:z.className),children:M}))),(0,q.jsxs)(Y,(0,j.Z)({className:(0,w.Z)(N.root,a),ownerState:I,ref:n},x,{children:[i.cloneElement(s,R),y?(0,q.jsxs)(_,{direction:"row",alignItems:"center",children:[M,(0,q.jsxs)(ee,{ownerState:I,"aria-hidden":!0,className:N.asterisk,children:["\u2009","*"]})]}):M]}))})),re=r(2065),te=r(9439),oe=r(5158),ae=r(7479);function ie(e){return(0,F.Z)("PrivateSwitchBase",e)}(0,U.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var le=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ce=(0,H.ZP)(ae.Z)((function(e){var n=e.ownerState;return(0,j.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),se=(0,H.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),de=i.forwardRef((function(e,n){var r=e.autoFocus,t=e.checked,o=e.checkedIcon,a=e.className,i=e.defaultChecked,l=e.disabled,c=e.disableFocusRipple,s=void 0!==c&&c,d=e.edge,u=void 0!==d&&d,m=e.icon,p=e.id,h=e.inputProps,f=e.inputRef,v=e.name,b=e.onBlur,Z=e.onChange,x=e.onFocus,g=e.readOnly,k=e.required,y=void 0!==k&&k,R=e.tabIndex,F=e.type,I=e.value,N=(0,P.Z)(e,le),z=(0,oe.Z)({controlled:t,default:Boolean(i),name:"SwitchBase",state:"checked"}),M=(0,te.Z)(z,2),B=M[0],L=M[1],E=(0,S.Z)(),O=l;E&&"undefined"===typeof O&&(O=E.disabled);var T="checkbox"===F||"radio"===F,A=(0,j.Z)({},e,{checked:B,disabled:O,disableFocusRipple:s,edge:u}),D=function(e){var n=e.classes,r=e.checked,t=e.disabled,o=e.edge,a={root:["root",r&&"checked",t&&"disabled",o&&"edge".concat((0,$.Z)(o))],input:["input"]};return(0,C.Z)(a,ie,n)}(A);return(0,q.jsxs)(ce,(0,j.Z)({component:"span",className:(0,w.Z)(D.root,a),centerRipple:!0,focusRipple:!s,disabled:O,tabIndex:null,role:void 0,onFocus:function(e){x&&x(e),E&&E.onFocus&&E.onFocus(e)},onBlur:function(e){b&&b(e),E&&E.onBlur&&E.onBlur(e)},ownerState:A,ref:n},N,{children:[(0,q.jsx)(se,(0,j.Z)({autoFocus:r,checked:t,defaultChecked:i,className:D.input,disabled:O,id:T?p:void 0,name:v,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;L(n),Z&&Z(e,n)}},readOnly:g,ref:f,required:y,ownerState:A,tabIndex:R,type:F},"checkbox"===F&&void 0===I?{}:{value:I},h)),B?o:m]}))})),ue=r(9201),me=(0,ue.Z)((0,q.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),pe=(0,ue.Z)((0,q.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),he=(0,ue.Z)((0,q.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function fe(e){return(0,F.Z)("MuiCheckbox",e)}var ve=(0,U.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),be=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Ze=(0,H.ZP)(de,{shouldForwardProp:function(e){return(0,H.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,r.indeterminate&&n.indeterminate,"default"!==r.color&&n["color".concat((0,$.Z)(r.color))]]}})((function(e){var n,r=e.theme,t=e.ownerState;return(0,j.Z)({color:(r.vars||r).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:r.vars?"rgba(".concat("default"===t.color?r.vars.palette.action.activeChannel:r.vars.palette[t.color].mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,re.Fq)("default"===t.color?r.palette.action.active:r.palette[t.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(n={},(0,y.Z)(n,"&.".concat(ve.checked,", &.").concat(ve.indeterminate),{color:(r.vars||r).palette[t.color].main}),(0,y.Z)(n,"&.".concat(ve.disabled),{color:(r.vars||r).palette.action.disabled}),n))})),xe=(0,q.jsx)(pe,{}),ge=(0,q.jsx)(me,{}),ke=(0,q.jsx)(he,{}),ye=i.forwardRef((function(e,n){var r,t,o=(0,W.Z)({props:e,name:"MuiCheckbox"}),a=o.checkedIcon,l=void 0===a?xe:a,c=o.color,s=void 0===c?"primary":c,d=o.icon,u=void 0===d?ge:d,m=o.indeterminate,p=void 0!==m&&m,h=o.indeterminateIcon,f=void 0===h?ke:h,v=o.inputProps,b=o.size,Z=void 0===b?"medium":b,x=o.className,g=(0,P.Z)(o,be),k=p?f:u,y=p?f:l,S=(0,j.Z)({},o,{color:s,indeterminate:p,size:Z}),R=function(e){var n=e.classes,r=e.indeterminate,t=e.color,o=e.size,a={root:["root",r&&"indeterminate","color".concat((0,$.Z)(t)),"size".concat((0,$.Z)(o))]},i=(0,C.Z)(a,fe,n);return(0,j.Z)({},n,i)}(S);return(0,q.jsx)(Ze,(0,j.Z)({type:"checkbox",inputProps:(0,j.Z)({"data-indeterminate":p},v),icon:i.cloneElement(k,{fontSize:null!=(r=k.props.fontSize)?r:Z}),checkedIcon:i.cloneElement(y,{fontSize:null!=(t=y.props.fontSize)?t:Z}),ownerState:S,ref:n,className:(0,w.Z)(R.root,x)},g,{classes:R}))})),Pe=(0,g.Z)();var je=function(){var e=(0,d.I0)(),n=(0,u.s0)(),r=(0,d.v9)(s.AV),o=function(){var r=(0,t.Z)(a().mark((function r(t){var o;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),o=t.currentTarget,r.prev=2,r.next=5,e((0,c.Ib)({email:o.elements.email.value,password:o.elements.password.value})).unwrap();case 5:o.reset(),n("/"),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(2),o.elements.password.setCustomValidity("Login failed. Please enter the correct password!"),o.reportValidity();case 13:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}();return(0,q.jsx)(k.Z,{theme:Pe,children:(0,q.jsxs)(m.Z,{component:"main",maxWidth:"sm",children:[(0,q.jsx)(Z.ZP,{}),(0,q.jsxs)(h.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,q.jsx)(f.Z,{component:"h1",variant:"h4",sx:{fontFamily:"Arial"},children:"Login - Insert your credentials"}),(0,q.jsxs)(h.Z,{component:"form",autoComplete:"off",onSubmit:o,sx:{mt:2},children:[(0,q.jsxs)(b.ZP,{container:!0,spacing:6,children:[(0,q.jsx)(b.ZP,{item:!0,xs:20,children:(0,q.jsx)(x.Z,{name:"name",required:!0,fullWidth:!0,id:"name",label:"Name",autoComplete:"email"})}),(0,q.jsx)(b.ZP,{item:!0,xs:14,children:(0,q.jsx)(x.Z,{required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email"})}),(0,q.jsxs)(b.ZP,{item:!0,xs:14,children:[(0,q.jsx)(x.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password"}),(0,q.jsx)(ne,{control:(0,q.jsx)(ye,{value:"remember",color:"primary"}),label:"Remember me"})]})]}),(0,q.jsx)(p.Z,{type:"submit",fullWidth:!0,variant:"contained",children:"logIn"===r?(0,q.jsx)(l.Z,{}):(0,q.jsx)(q.Fragment,{children:"Sign In"})}),(0,q.jsxs)(b.ZP,{container:!0,children:[(0,q.jsx)(b.ZP,{item:!0,xs:!0,children:(0,q.jsx)(v.Z,{href:"#",variant:"body2",children:"Forgot password?"})}),(0,q.jsx)(b.ZP,{item:!0,children:(0,q.jsx)(v.Z,{href:"#",variant:"body2",onClick:function(){return n("/register")},children:"Don't have a free account yet? Sign Up"})})]})]})]})]})})},we=r(7803),Ce=r.n(we),Se=(0,g.Z)({palette:{primary:{main:"#1976d2"},secondary:{main:"#0408d9"}},typography:{button:{fontFamily:"Arial"}},breakpoints:{values:{xs:300,sm:600,md:900,lg:1200,xl:1536}}}),Re=function(){return(0,q.jsxs)(k.Z,{theme:Se,children:[(0,q.jsx)(Ce(),{title:"Login"}),(0,q.jsx)(je,{})]})}}}]);
//# sourceMappingURL=59.c26e9762.chunk.js.map