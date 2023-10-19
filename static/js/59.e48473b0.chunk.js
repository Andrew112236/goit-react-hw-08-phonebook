"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[59],{3059:function(e,r,n){n.r(r),n.d(r,{default:function(){return Fe}});var t=n(5861),o=n(4687),a=n.n(o),i=n(2791),l=n(857),c=n(5822),s=n(4289),d=n(9434),u=n(7689),m=n(9164),p=n(4294),h=n(4554),f=n(890),v=n(533),b=n(1889),Z=n(4708),x=n(5354),g=n(7107),k=n(4507),y=n(4942),P=n(3366),j=n(7462),w=n(3733),C=n(4419),S=n(2930),F=n(2466),R=n(1217),I=n(3457),z=n(7078),N=n(8519),M=n(5080),B=n(1184),L=n(5682),q=n(184),A=["component","direction","spacing","divider","children","className","useFlexGap"],E=(0,M.Z)(),O=(0,I.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,r){return r.root}});function T(e){return(0,z.Z)({props:e,name:"MuiStack",defaultTheme:E})}function D(e,r){var n=i.Children.toArray(e).filter(Boolean);return n.reduce((function(e,t,o){return e.push(t),o<n.length-1&&e.push(i.cloneElement(r,{key:"separator-".concat(o)})),e}),[])}var V=function(e){var r=e.ownerState,n=e.theme,t=(0,j.Z)({display:"flex",flexDirection:"column"},(0,B.k9)({theme:n},(0,B.P$)({values:r.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(r.spacing){var o=(0,L.hB)(n),a=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof r.spacing&&null!=r.spacing[n]||"object"===typeof r.direction&&null!=r.direction[n])&&(e[n]=!0),e}),{}),i=(0,B.P$)({values:r.direction,base:a}),l=(0,B.P$)({values:r.spacing,base:a});"object"===typeof i&&Object.keys(i).forEach((function(e,r,n){if(!i[e]){var t=r>0?i[n[r-1]]:"column";i[e]=t}}));t=(0,F.Z)(t,(0,B.k9)({theme:n},l,(function(e,n){return r.useFlexGap?{gap:(0,L.NA)(o,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":(0,y.Z)({},"margin".concat((t=n?i[n]:r.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[t])),(0,L.NA)(o,e))};var t})))}return t=(0,B.dt)(n.breakpoints,t)};var H=n(6934),W=n(1402),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.createStyledComponent,n=void 0===r?O:r,t=e.useThemeProps,o=void 0===t?T:t,a=e.componentName,l=void 0===a?"MuiStack":a,c=function(){return(0,C.Z)({root:["root"]},(function(e){return(0,R.Z)(l,e)}),{})},s=n(V),d=i.forwardRef((function(e,r){var n=o(e),t=(0,N.Z)(n),a=t.component,i=void 0===a?"div":a,l=t.direction,d=void 0===l?"column":l,u=t.spacing,m=void 0===u?0:u,p=t.divider,h=t.children,f=t.className,v=t.useFlexGap,b=void 0!==v&&v,Z=(0,P.Z)(t,A),x={direction:d,spacing:m,useFlexGap:b},g=c();return(0,q.jsx)(s,(0,j.Z)({as:i,ownerState:x,ref:r,className:(0,w.Z)(g.root,f)},Z,{children:p?D(h,p):h}))}));return d}({createStyledComponent:(0,H.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,r){return r.root}}),useThemeProps:function(e){return(0,W.Z)({props:e,name:"MuiStack"})}}),_=G,$=n(4036),U=n(5878);function J(e){return(0,R.Z)("MuiFormControlLabel",e)}var K=(0,U.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Q=n(6147),X=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Y=(0,H.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[(0,y.Z)({},"& .".concat(K.label),r.label),r.root,r["labelPlacement".concat((0,$.Z)(n.labelPlacement))]]}})((function(e){var r=e.theme,n=e.ownerState;return(0,j.Z)((0,y.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(K.disabled),{cursor:"default"}),"start"===n.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===n.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===n.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,y.Z)({},"& .".concat(K.label),(0,y.Z)({},"&.".concat(K.disabled),{color:(r.vars||r).palette.text.disabled})))})),ee=(0,H.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:function(e,r){return r.asterisk}})((function(e){var r=e.theme;return(0,y.Z)({},"&.".concat(K.error),{color:(r.vars||r).palette.error.main})})),re=i.forwardRef((function(e,r){var n,t,o=(0,W.Z)({props:e,name:"MuiFormControlLabel"}),a=o.className,l=o.componentsProps,c=void 0===l?{}:l,s=o.control,d=o.disabled,u=o.disableTypography,m=o.label,p=o.labelPlacement,h=void 0===p?"end":p,v=o.required,b=o.slotProps,Z=void 0===b?{}:b,x=(0,P.Z)(o,X),g=(0,S.Z)(),k=null!=(n=null!=d?d:s.props.disabled)?n:null==g?void 0:g.disabled,y=null!=v?v:s.props.required,F={disabled:k,required:y};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof s.props[e]&&"undefined"!==typeof o[e]&&(F[e]=o[e])}));var R=(0,Q.Z)({props:o,muiFormControl:g,states:["error"]}),I=(0,j.Z)({},o,{disabled:k,labelPlacement:h,required:y,error:R.error}),z=function(e){var r=e.classes,n=e.disabled,t=e.labelPlacement,o=e.error,a=e.required,i={root:["root",n&&"disabled","labelPlacement".concat((0,$.Z)(t)),o&&"error",a&&"required"],label:["label",n&&"disabled"],asterisk:["asterisk",o&&"error"]};return(0,C.Z)(i,J,r)}(I),N=null!=(t=Z.typography)?t:c.typography,M=m;return null==M||M.type===f.Z||u||(M=(0,q.jsx)(f.Z,(0,j.Z)({component:"span"},N,{className:(0,w.Z)(z.label,null==N?void 0:N.className),children:M}))),(0,q.jsxs)(Y,(0,j.Z)({className:(0,w.Z)(z.root,a),ownerState:I,ref:r},x,{children:[i.cloneElement(s,F),y?(0,q.jsxs)(_,{direction:"row",alignItems:"center",children:[M,(0,q.jsxs)(ee,{ownerState:I,"aria-hidden":!0,className:z.asterisk,children:["\u2009","*"]})]}):M]}))})),ne=n(2065),te=n(9439),oe=n(5158),ae=n(7479);function ie(e){return(0,R.Z)("PrivateSwitchBase",e)}(0,U.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var le=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ce=(0,H.ZP)(ae.Z)((function(e){var r=e.ownerState;return(0,j.Z)({padding:9,borderRadius:"50%"},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})})),se=(0,H.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),de=i.forwardRef((function(e,r){var n=e.autoFocus,t=e.checked,o=e.checkedIcon,a=e.className,i=e.defaultChecked,l=e.disabled,c=e.disableFocusRipple,s=void 0!==c&&c,d=e.edge,u=void 0!==d&&d,m=e.icon,p=e.id,h=e.inputProps,f=e.inputRef,v=e.name,b=e.onBlur,Z=e.onChange,x=e.onFocus,g=e.readOnly,k=e.required,y=void 0!==k&&k,F=e.tabIndex,R=e.type,I=e.value,z=(0,P.Z)(e,le),N=(0,oe.Z)({controlled:t,default:Boolean(i),name:"SwitchBase",state:"checked"}),M=(0,te.Z)(N,2),B=M[0],L=M[1],A=(0,S.Z)(),E=l;A&&"undefined"===typeof E&&(E=A.disabled);var O="checkbox"===R||"radio"===R,T=(0,j.Z)({},e,{checked:B,disabled:E,disableFocusRipple:s,edge:u}),D=function(e){var r=e.classes,n=e.checked,t=e.disabled,o=e.edge,a={root:["root",n&&"checked",t&&"disabled",o&&"edge".concat((0,$.Z)(o))],input:["input"]};return(0,C.Z)(a,ie,r)}(T);return(0,q.jsxs)(ce,(0,j.Z)({component:"span",className:(0,w.Z)(D.root,a),centerRipple:!0,focusRipple:!s,disabled:E,tabIndex:null,role:void 0,onFocus:function(e){x&&x(e),A&&A.onFocus&&A.onFocus(e)},onBlur:function(e){b&&b(e),A&&A.onBlur&&A.onBlur(e)},ownerState:T,ref:r},z,{children:[(0,q.jsx)(se,(0,j.Z)({autoFocus:n,checked:t,defaultChecked:i,className:D.input,disabled:E,id:O?p:void 0,name:v,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var r=e.target.checked;L(r),Z&&Z(e,r)}},readOnly:g,ref:f,required:y,ownerState:T,tabIndex:F,type:R},"checkbox"===R&&void 0===I?{}:{value:I},h)),B?o:m]}))})),ue=n(9201),me=(0,ue.Z)((0,q.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),pe=(0,ue.Z)((0,q.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),he=(0,ue.Z)((0,q.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function fe(e){return(0,R.Z)("MuiCheckbox",e)}var ve=(0,U.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),be=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Ze=(0,H.ZP)(de,{shouldForwardProp:function(e){return(0,H.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,n.indeterminate&&r.indeterminate,"default"!==n.color&&r["color".concat((0,$.Z)(n.color))]]}})((function(e){var r,n=e.theme,t=e.ownerState;return(0,j.Z)({color:(n.vars||n).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===t.color?n.vars.palette.action.activeChannel:n.vars.palette[t.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,ne.Fq)("default"===t.color?n.palette.action.active:n.palette[t.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(r={},(0,y.Z)(r,"&.".concat(ve.checked,", &.").concat(ve.indeterminate),{color:(n.vars||n).palette[t.color].main}),(0,y.Z)(r,"&.".concat(ve.disabled),{color:(n.vars||n).palette.action.disabled}),r))})),xe=(0,q.jsx)(pe,{}),ge=(0,q.jsx)(me,{}),ke=(0,q.jsx)(he,{}),ye=i.forwardRef((function(e,r){var n,t,o=(0,W.Z)({props:e,name:"MuiCheckbox"}),a=o.checkedIcon,l=void 0===a?xe:a,c=o.color,s=void 0===c?"primary":c,d=o.icon,u=void 0===d?ge:d,m=o.indeterminate,p=void 0!==m&&m,h=o.indeterminateIcon,f=void 0===h?ke:h,v=o.inputProps,b=o.size,Z=void 0===b?"medium":b,x=o.className,g=(0,P.Z)(o,be),k=p?f:u,y=p?f:l,S=(0,j.Z)({},o,{color:s,indeterminate:p,size:Z}),F=function(e){var r=e.classes,n=e.indeterminate,t=e.color,o=e.size,a={root:["root",n&&"indeterminate","color".concat((0,$.Z)(t)),"size".concat((0,$.Z)(o))]},i=(0,C.Z)(a,fe,r);return(0,j.Z)({},r,i)}(S);return(0,q.jsx)(Ze,(0,j.Z)({type:"checkbox",inputProps:(0,j.Z)({"data-indeterminate":p},v),icon:i.cloneElement(k,{fontSize:null!=(n=k.props.fontSize)?n:Z}),checkedIcon:i.cloneElement(y,{fontSize:null!=(t=y.props.fontSize)?t:Z}),ownerState:S,ref:r,className:(0,w.Z)(F.root,x)},g,{classes:F}))})),Pe=(0,g.Z)({palette:{primary:{main:"#1976d2"},secondary:{main:"#0408d9"}},typography:{button:{fontFamily:"Arial"}},breakpoints:{values:{xs:300,sm:600,md:900,lg:1200,xl:1536}}});var je=function(){var e=(0,d.I0)(),r=(0,u.s0)(),n=(0,d.v9)(s.AV),o=function(){var n=(0,t.Z)(a().mark((function n(t){var o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),o=t.currentTarget,n.prev=2,n.next=5,e((0,c.Ib)({email:o.elements.email.value,password:o.elements.password.value})).unwrap();case 5:o.reset(),r("/"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(2),o.elements.password.setCustomValidity("Login failed. Please enter the correct password!"),o.reportValidity();case 13:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,q.jsx)(k.Z,{theme:Pe,children:(0,q.jsxs)(m.Z,{component:"main",maxWidth:"sm",children:[(0,q.jsx)(Z.ZP,{}),(0,q.jsxs)(h.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,q.jsx)(f.Z,{component:"h1",variant:"h4",sx:{fontFamily:"Arial"},children:"Login - Insert your credentials"}),(0,q.jsxs)(h.Z,{component:"form",autoComplete:"off",onSubmit:o,sx:{mt:2},children:[(0,q.jsxs)(b.ZP,{container:!0,spacing:3,children:[(0,q.jsx)(b.ZP,{item:!0,xs:14,children:(0,q.jsx)(x.Z,{required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email"})}),(0,q.jsxs)(b.ZP,{item:!0,xs:14,children:[(0,q.jsx)(x.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password"}),(0,q.jsx)(re,{control:(0,q.jsx)(ye,{value:"remember",color:"primary"}),label:"Remember me"})]})]}),(0,q.jsx)(p.Z,{type:"submit",fullWidth:!0,variant:"contained",children:"logIn"===n?(0,q.jsx)(l.Z,{}):(0,q.jsx)(q.Fragment,{children:"Sign In"})}),(0,q.jsxs)(b.ZP,{container:!0,children:[(0,q.jsx)(b.ZP,{item:!0,xs:!0,children:(0,q.jsx)(v.Z,{href:"#",variant:"body2",children:"Forgot password?"})}),(0,q.jsx)(b.ZP,{item:!0,children:(0,q.jsx)(v.Z,{href:"#",variant:"body2",onClick:function(){return r("/register")},children:"Don't have a free account yet? Sign Up"})})]})]})]})]})})},we=n(7803),Ce=n.n(we),Se=(0,g.Z)({palette:{primary:{main:"#1976d2"},secondary:{main:"#0408d9"}},typography:{button:{fontFamily:"Arial"}},breakpoints:{values:{xs:300,sm:600,md:900,lg:1200,xl:1536}}}),Fe=function(){return(0,q.jsxs)(k.Z,{theme:Se,children:[(0,q.jsx)(Ce(),{title:"Login"}),(0,q.jsx)(je,{})]})}}}]);
//# sourceMappingURL=59.e48473b0.chunk.js.map