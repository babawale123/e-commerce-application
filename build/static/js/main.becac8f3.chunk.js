(this["webpackJsonpe-shop"]=this["webpackJsonpe-shop"]||[]).push([[0],{134:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),s=n(7),o=n.n(s),u=n(12),l=n(10),j=n(20),d=n(16),b=n(73),p=new(n.n(b).a)("pk_test_27554e4eb027098324c2b9cae568a56ebd79b632aaf01",!0),m=n(168),h=n(170),O=n(53),x=n(171),f=n(172),g=n.p+"static/media/commerce.457bea4f.png",v=n(9),y=n(165),k=n(18),w=Object(y.a)((function(e){return{appBar:Object(v.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(v.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(v.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(k.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(v.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),C=n(173),S=n(2),_=function(e){var t=e.total_items,n=w(),a=Object(d.f)();return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(m.a,{position:"fixed",className:n.appBar,color:"inherit",children:Object(S.jsxs)(h.a,{children:[Object(S.jsxs)(O.a,{component:j.b,to:"/ ",variant:"h6",className:n.title,color:"inherit",children:[Object(S.jsx)("img",{src:g,alt:"Grace World",height:"25px",className:n.image}),"Grace World"]}),Object(S.jsx)("div",{className:n.grow}),"/"===a.pathname&&Object(S.jsx)("div",{className:n.button,children:Object(S.jsx)(x.a,{component:j.b,to:"/cart","aria-label":"Show cart item",color:"inherit",children:Object(S.jsx)(f.a,{badgeContent:t,color:"secondary",children:Object(S.jsx)(C.a,{})})})})]})})})},N=n(179),T=n(174),B=n(175),E=n(176),q=n(177),F=n(178),R=Object(y.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),A=function(e){var t=e.product,n=e.onAddToCart,a=R();return Object(S.jsxs)(T.a,{className:a.root,children:[Object(S.jsx)(B.a,{className:a.media,image:t.media.source,title:t.name}),Object(S.jsxs)(E.a,{children:[Object(S.jsxs)("div",{className:a.cardContent,children:[Object(S.jsx)(O.a,{variant:"h5",gutterBottom:!0,children:t.name}),Object(S.jsx)(O.a,{variant:"h5",children:t.price.formatted_with_symbol})]}),Object(S.jsx)(O.a,{variant:"body2",dangerouslySetInnerHTML:{__html:t.description},color:"textSecondary"})]}),Object(S.jsx)(q.a,{disableSpacing:!0,className:a.cardActions,children:Object(S.jsx)(x.a,{"arial-label":"Add to cart",onClick:function(){return n(t.id,1)},children:Object(S.jsx)(F.a,{})})})]})},L=Object(y.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},root:{flexGrow:1}}})),P=function(e){var t=e.products,n=e.onAddToCart,a=L();return Object(S.jsxs)("main",{className:a.content,children:[Object(S.jsx)("div",{className:a.toolbar}),Object(S.jsx)(N.a,{container:!0,justify:"center",spacing:4,children:t.map((function(e){return Object(S.jsx)(N.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(S.jsx)(A,{product:e,onAddToCart:n})},e.id)}))})]})},W=n(180),z=n(181),D=Object(y.a)((function(e){var t;return{toolbar:e.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(t={minWidth:"150px"},Object(v.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(v.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),I=Object(y.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),Q=function(e){var t=e.item,n=e.onUpdateCartQty,a=e.onRemoveFromCart,r=I();return Object(S.jsxs)(T.a,{children:[Object(S.jsx)(B.a,{image:t.media.source,alt:t.name,className:r.media}),Object(S.jsxs)(E.a,{className:r.cardContent,children:[Object(S.jsx)(O.a,{variant:"h4",children:t.name}),Object(S.jsx)(O.a,{variant:"h5",children:t.line_total.formatted_with_symbol})]}),Object(S.jsxs)(q.a,{className:r.CardActions,children:[Object(S.jsxs)("div",{className:r.buttons,children:[Object(S.jsx)(W.a,{type:"button",size:"small",onClick:function(){return n(t.id,t.quantity-1)},children:"-"}),Object(S.jsx)(O.a,{children:t.quantity}),Object(S.jsx)(W.a,{type:"button",size:"small",onClick:function(){return n(t.id,t.quantity+1)},children:"+"})]}),Object(S.jsx)(W.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return a(t.id)},children:"Remove"})]})]})},G=function(e){var t=e.cart,n=e.handleUpdateCartQty,a=e.handleRemoveFromCart,r=e.handleEmptyCart,c=D(),i=function(){return Object(S.jsxs)(O.a,{varient:"subtitle1",children:["You have no items in your shopping",Object(S.jsx)(j.b,{to:"/",className:c.link,children:"Start adding some items"})]})},s=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(N.a,{container:!0,spacing:3,children:t.line_items.map((function(e){return Object(S.jsx)(N.a,{item:!0,xs:12,sm:4,children:Object(S.jsx)(Q,{item:e,onUpdateCartQty:n,onRemoveFromCart:a})},e.id)}))}),Object(S.jsxs)("div",{className:c.cardDetails,children:[Object(S.jsxs)(O.a,{variant:"h4",children:["Subtotal: ",t.subtotal.formatted_with_symbol]}),Object(S.jsxs)("div",{children:[Object(S.jsx)(W.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:r,children:"Empty Cart "}),Object(S.jsx)(W.a,{className:c.checkoutButton,component:j.b,to:"/checkout",size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})};return t.line_items?Object(S.jsxs)(z.a,{children:[Object(S.jsx)("div",{className:c.toolbar}),Object(S.jsx)(O.a,{className:c.title,variant:"h3",gutterBottom:!0,children:" Your Shopping Cart "}),t.line_items.length?Object(S.jsx)(s,{}):Object(S.jsx)(i,{})]}):"Loading...."},M=n(187),V=n(188),U=n(189),H=n(77),J=n(196),Y=n(190),Z=n(192),K=Object(y.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(v.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(v.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(v.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),X=n(33),$=n(195),ee=n(191),te=n(185),ne=n(43),ae=n(193),re=function(e){var t=e.name,n=e.label,a=e.required,r=Object(ne.d)().control;return Object(S.jsx)(N.a,{item:!0,xs:12,sm:6,children:Object(S.jsx)(ne.a,{name:t,control:r,render:function(e){var t=e.fields;return Object(S.jsx)(ae.a,Object(X.a)(Object(X.a)({},t),{},{fullWidth:!0,label:n,required:a,defaultValue:""}))}})})},ce=function(e){var t=e.checkoutToken,n=e.next,r=Object(a.useState)([]),c=Object(l.a)(r,2),i=c[0],s=c[1],d=Object(a.useState)(""),b=Object(l.a)(d,2),m=b[0],h=b[1],x=Object(a.useState)([]),f=Object(l.a)(x,2),g=f[0],v=f[1],y=Object(a.useState)(""),k=Object(l.a)(y,2),w=k[0],C=k[1],_=Object(a.useState)([]),T=Object(l.a)(_,2),B=T[0],E=T[1],q=Object(a.useState)(""),F=Object(l.a)(q,2),R=F[0],A=F[1],L=Object(ne.c)(),P=Object.entries(i).map((function(e){var t=Object(l.a)(e,2);return{id:t[0],label:t[1]}})),z=Object.entries(g).map((function(e){var t=Object(l.a)(e,2);return{id:t[0],label:t[1]}})),D=B.map((function(e){return{id:e.id,label:"".concat(e.description," -(").concat(e.price.formatted_with_symbol,")")}})),I=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.services.localeListShippingCountries(t);case 2:n=e.sent,a=n.countries,console.log(a),s(a),h(Object.keys(a)[0]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.services.localeListSubdivisions(t);case 2:n=e.sent,a=n.subdivisions,v(a),C(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r,c=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:null,e.next=3,p.checkout.getShippingOptions(t,{country:n,region:a});case 3:r=e.sent,E(r),A(r[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){I(t.id)}),[]),Object(a.useEffect)((function(){m&&Q(m)}),[m]),Object(a.useEffect)((function(){w&&G(t.id,m,w)}),[w]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(O.a,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(S.jsx)(ne.b,Object(X.a)(Object(X.a)({},L),{},{children:Object(S.jsxs)("form",{onSubmit:L.handleSubmit((function(e){return n(Object(X.a)(Object(X.a)({},e),{},{shippingCountry:m,shippingSubdivision:w,shippingOption:R}))})),children:[Object(S.jsxs)(N.a,{container:!0,spacing:3,children:[Object(S.jsx)(re,{required:!0,name:"firstName",label:"First name"}),Object(S.jsx)(re,{required:!0,name:"lastName",label:"Last name"}),Object(S.jsx)(re,{required:!0,name:"address1",label:"Address"}),Object(S.jsx)(re,{required:!0,name:"email",label:"Email"}),Object(S.jsx)(re,{required:!0,name:"city",label:"City"}),Object(S.jsx)(re,{required:!0,name:"zip",label:"Zip / Postal Code"}),Object(S.jsxs)(N.a,{item:!0,xs:12,sm:6,children:[Object(S.jsx)($.a,{children:"Shipping Country"}),Object(S.jsx)(ee.a,{value:m,fullWidth:!0,onChange:function(e){return m(e.target.value)},children:P.map((function(e){return Object(S.jsx)(te.a,{value:e.id,children:e.label},e.id)}))})]}),Object(S.jsxs)(N.a,{item:!0,xs:12,sm:6,children:[Object(S.jsx)($.a,{children:"Shipping Subdivision"}),Object(S.jsx)(ee.a,{value:w,fullWidth:!0,onChange:function(e){return C(e.target.value)},children:z.map((function(e){return Object(S.jsx)(te.a,{value:e.id,children:e.label},e.id)}))})]}),Object(S.jsxs)(N.a,{item:!0,xs:12,sm:6,children:[Object(S.jsx)($.a,{children:"Shipping Options"}),Object(S.jsx)(ee.a,{value:R,fullWidth:!0,onChange:function(e){return A(e.target.value)},children:D.map((function(e){return Object(S.jsx)(te.a,{value:e.id,children:e.label},e.id)}))})]})]}),Object(S.jsx)("br",{}),Object(S.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(S.jsx)(W.a,{component:j.b,variant:"outlined",to:"/cart",children:"Back to Cart"}),Object(S.jsx)(W.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})}))]})},ie=n(47),se=n(75),oe=n(184),ue=n(135),le=n(186),je=function(e){var t=e.checkoutToken;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(O.a,{variant:"h6",gutterBottom:!0,children:"Order Summary"}),Object(S.jsxs)(oe.a,{disablePadding:!0,children:[t.live.line_items.map((function(e){return Object(S.jsxs)(ue.a,{style:{padding:"10px 0"},children:[Object(S.jsx)(le.a,{primary:e.name,secondary:"Qauntity: ".concat(e.quantity)}),Object(S.jsx)(O.a,{variant:"body2",children:e.line_total.formatted_with_symbol})]},e.name)})),Object(S.jsxs)(ue.a,{style:{padding:"10px 0"},children:[Object(S.jsx)(le.a,{primary:"Total"}),Object(S.jsx)(O.a,{variant:"subtitle1",style:{fontWeight:700},children:t.live.subtotal.formatted_with_symbol})]})]})]})},de=Object(se.a)("pk_test_51IcxZFLtkWVcnPKeZVDgMEOPbCnASw1Vizfwqo5fQQ7D3VY8qxLkuJq9jFzkdSPyANejwmobehkiCbBSFwfOS30R00EWywqu2E"),be=function(e){var t=e.checkoutToken,n=e.shippingData,a=e.backStep,r=e.onCaptureCheckout,c=e.nextStep,i=e.timeout,s=function(){var e=Object(u.a)(o.a.mark((function e(a,s,u){var l,j,d,b,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),u&&s){e.next=3;break}return e.abrupt("return");case 3:return l=s.getElement(ie.CardElement),e.next=6,u.createPaymentMethod({type:"card",card:l});case 6:j=e.sent,d=j.error,b=j.paymentMethod,d?console.log(d):(p={line_items:t.live.line_items,customer:{firstname:n.firstName,lastname:n.lastName,email:n.email},shipping:{name:"Primary",street:n.address1,town_city:n.city,county_state:n.shippingSubdivision,postal_zip_code:n.zip,country:n.shippingCountry},fulfillment:{shipping_method:n.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:b.id}}},r(t.id,p),i(),c());case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(je,{checkoutToken:t}),Object(S.jsx)(M.a,{}),Object(S.jsx)(O.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(S.jsx)(ie.Elements,{stripe:de,children:Object(S.jsx)(ie.ElementsConsumer,{children:function(e){var n=e.elements,r=e.stripe;return Object(S.jsxs)("form",{onSubmit:function(e){return s(e,n,r)},children:[Object(S.jsx)(ie.CardElement,{}),Object(S.jsx)("br",{})," ",Object(S.jsx)("br",{}),Object(S.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(S.jsx)(W.a,{variant:"outlined",onClick:a,children:"Back"}),Object(S.jsxs)(W.a,{type:"submit",variant:"contained",disabled:!r,color:"primary",children:["Pay ",t.live.subtotal.formatted_with_symbol]})]})]})}})})]})},pe=["Shipping address","Payment details"],me=function(e){var t=e.cart,n=e.order,r=e.onCaptureCheckout,c=e.error,i=K(),s=Object(a.useState)(null),d=Object(l.a)(s,2),b=d[0],m=d[1],h=Object(a.useState)({}),x=Object(l.a)(h,2),f=x[0],g=x[1],v=Object(a.useState)(!1),y=Object(l.a)(v,2),k=y[0],w=y[1],C=Object(a.useState)(0),_=Object(l.a)(C,2),N=_[0],T=_[1];Object(a.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.checkout.generateToken(t.id,{type:"cart"});case 3:n=e.sent,m(n),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);var B=function(){return T((function(e){return e+1}))},E=function(){return T((function(e){return e-1}))},q=function(e){g(e),B()},F=function(){setTimeout((function(){w(!0)}),3e3)},R=function(){return n.customer?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{children:[Object(S.jsxs)(O.a,{variant:"h5",children:["Thank you for your Purchase, ",n.customer.firstname," ",n.customer.lastname]}),Object(S.jsx)(M.a,{className:i.divider}),Object(S.jsxs)(O.a,{variant:"subtitle1",children:["Order ref: ",n.customer_reference]})]}),Object(S.jsx)("br",{}),Object(S.jsx)(W.a,{component:j.b,to:"/",variant:"outlined",type:"button",children:"Back to Home"})]}):k?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{children:[Object(S.jsx)(O.a,{variant:"h5",children:"Thank you for your Purchase"}),Object(S.jsx)(M.a,{className:i.divider}),Object(S.jsx)(O.a,{variant:"subtitle1",children:"Order ref:"})]}),Object(S.jsx)("br",{}),Object(S.jsx)(W.a,{component:j.b,to:"/",variant:"outlined",type:"button",children:"Back to Home"})]}):Object(S.jsx)("div",{className:i.spinner,children:Object(S.jsx)(V.a,{})})};c&&(S.Fragment,O.a,W.a,j.b);var A=function(){return 0===N?Object(S.jsx)(ce,{checkoutToken:b,next:q}):Object(S.jsx)(be,{shippingData:f,onCaptureCheckout:r,nextStep:B,checkoutToken:b,backStep:E,timeout:F})};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(U.a,{}),Object(S.jsx)("div",{className:i.toolbar}),Object(S.jsx)("main",{className:i.layout,children:Object(S.jsxs)(H.a,{className:i.paper,children:[Object(S.jsx)(O.a,{variant:"h4",align:"center",children:"Checkout"}),Object(S.jsx)(J.a,{activeStep:N,className:i.stepper,children:pe.map((function(e){return Object(S.jsx)(Y.a,{children:Object(S.jsx)(Z.a,{children:e})},e)}))}),N===pe.length?Object(S.jsx)(R,{}):b&&Object(S.jsx)(A,{})]})})]})},he=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),i=Object(l.a)(c,2),s=i[0],b=i[1],m=Object(a.useState)({}),h=Object(l.a)(m,2),O=h[0],x=h[1],f=Object(a.useState)(""),g=Object(l.a)(f,2),v=g[0],y=g[1],k=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.products.list();case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.retrieve();case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.add(t,n);case 2:a=e.sent,r=a.cart,b(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.update(t,{quantity:n});case 2:a=e.sent,r=a.cart,b(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.remove(t);case 2:n=e.sent,a=n.cart,b(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.empty();case 2:t=e.sent,n=t.cart,b(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.refresh();case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.checkout.capture(t,n);case 3:a=e.sent,x(a),E(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y(e.t0.data.error.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){k(),w()}),[]),Object(S.jsx)(j.a,{children:Object(S.jsxs)("div",{children:[Object(S.jsx)(_,{total_items:s.total_items}),Object(S.jsxs)(d.c,{children:[Object(S.jsx)(d.a,{exact:!0,path:"/",children:Object(S.jsx)(P,{products:n,onAddToCart:C})}),Object(S.jsx)(d.a,{exact:!0,path:"/cart",children:Object(S.jsx)(G,{cart:s,handleUpdateCartQty:N,handleRemoveFromCart:T,handleEmptyCart:B})}),Object(S.jsx)(d.a,{exact:!0,path:"/checkout",children:Object(S.jsx)(me,{cart:s,order:O,onCaptureCheckout:q,error:v})})]})]})})};i.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(he,{})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.becac8f3.chunk.js.map