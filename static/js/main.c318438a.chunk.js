(this["webpackJsonprsoi-project"]=this["webpackJsonprsoi-project"]||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),o=a(2),c=a.n(o),l=a(3),i=a(4),r=a(6),u=a(5),d=(a(12),function(t){Object(r.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={belts:[{id:1,status:"inactive",selected:!1,text:"\u0432\u0438\u043c\u043a\u043d\u0435\u043d\u0430"},{id:2,status:"inactive",selected:!1,text:"\u0432\u0438\u043c\u043a\u043d\u0435\u043d\u0430"},{id:3,status:"inactive",selected:!1,text:"\u0432\u0438\u043c\u043a\u043d\u0435\u043d\u0430"},{id:4,status:"inactive",selected:!1,text:"\u0432\u0438\u043c\u043a\u043d\u0435\u043d\u0430"}]},n.handleClick=function(t,e,a,s){var o={id:t,status:e,selected:!a,text:s},c=n.state.belts;c[t-1]=o,n.setState({belts:c})},n.prepareForWork=function(){var t=n.state.belts;t.forEach((function(t){if(!0===t.selected){t.status="stoped",t.text="\u0433\u043e\u0442\u043e\u0432\u0430 \u0434\u043e \u0440\u043e\u0431\u043e\u0442\u0438";var e=localStorage.getItem("log"),a=new Date;e+="\u0441\u0442\u0440\u0456\u0447\u043a\u0430 \u043d\u043e\u043c\u0435\u0440 ".concat(t.id," \u0433\u043e\u0442\u043e\u0432\u0430 \u0434\u043e \u0440\u043e\u0431\u043e\u0442\u0438, ").concat(a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+","+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),"; \n"),localStorage.setItem("log",e)}})),n.setState({belts:t})},n.handleKeyPress=function(t){"p"===t.key&&n.prepareForWork(),"s"===t.key&&n.stop(),"Enter"===t.key&&n.start(),"Escape"===t.key&&n.off(),"f"===t.key&&n.fire(),"o"===t.key&&n.overweight()},n.stop=function(){var t=n.state.belts;t.forEach((function(t){if(!0===t.selected){t.status="stoped",t.text="\u043f\u0440\u0438\u0437\u0443\u043f\u0438\u043d\u0435\u043d\u0430";var e=localStorage.getItem("log"),a=new Date;e+="\u0441\u0442\u0440\u0456\u0447\u043a\u0430 \u043d\u043e\u043c\u0435\u0440 ".concat(t.id," \u043f\u0440\u0438\u0437\u0443\u043f\u0438\u043d\u0435\u043d\u0430, ").concat(a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+","+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()," ; \n"),localStorage.setItem("log",e)}})),n.setState({belts:t})},n.start=function(){var t=n.state.belts;t.forEach((function(t){if(!0===t.selected)if("\u0443\u0432\u0456\u043c\u043a\u043d\u0435\u043d\u0430"===t.text)window.alert("\u0412\u0436\u0435 \u043f\u0440\u0430\u0446\u044e\u0454");else if("\u0433\u043e\u0442\u043e\u0432\u0430 \u0434\u043e \u0440\u043e\u0431\u043e\u0442\u0438"!==t.text)window.alert("\u0412\u0438\u0431\u0440\u0430\u043d\u0456 \u0441\u0442\u0440\u0456\u0447\u043a\u0438 \u0449\u0435 \u043d\u0435 \u0433\u043e\u0442\u043e\u0432\u0456 \u0434\u043e \u0440\u043e\u0431\u043e\u0442\u0438");else{t.status="active",t.text="\u0443\u0432\u0456\u043c\u043a\u043d\u0435\u043d\u0430";var e=localStorage.getItem("log"),a=new Date;e+="\u0441\u0442\u0440\u0456\u0447\u043a\u0430 \u043d\u043e\u043c\u0435\u0440 ".concat(t.id," \u0443\u0432\u0456\u043c\u043a\u043d\u0435\u043d\u0430, ").concat(a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+","+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),"; \n"),localStorage.setItem("log",e)}})),n.setState({belts:t})},n.off=function(){var t=n.state.belts;t.forEach((function(t){if(!0===t.selected)if("inactive"===t.status)window.alert("\u0421\u0442\u0440\u0456\u0447\u043a\u0430 \u0432\u0436\u0435 \u0432\u0438\u043c\u043a\u043d\u0435\u043d\u0430");else{t.status="inactive",t.text="\u0432\u0438\u043c\u043a\u043d\u0435\u043d\u0430";var e=localStorage.getItem("log"),a=new Date;e+="\u0441\u0442\u0440\u0456\u0447\u043a\u0430 \u043d\u043e\u043c\u0435\u0440 ".concat(t.id," \u0432\u0438\u043c\u043a\u043d\u0435\u043d\u0430, ").concat(a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+","+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),"; \n"),localStorage.setItem("log",e)}})),n.setState({belts:t})},n.fire=function(){window.alert("fire!");var t=n.state.belts;t.forEach((function(t){t.status="inactive",t.text="\u0432\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u0436\u0435\u0436\u0430, \u0432\u0438\u043c\u043a\u043d\u0435\u043d\u0430";var e=localStorage.getItem("log"),a=new Date;e+="\u0441\u0442\u0440\u0456\u0447\u043a\u0430 \u043d\u043e\u043c\u0435\u0440 ".concat(t.id," \u0430\u0432\u0430\u0440\u0456\u0439\u043d\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0430 \u0440\u043e\u0431\u043e\u0442\u0443, ").concat(a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+","+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),"; \n"),localStorage.setItem("log",e)})),n.setState({belts:t})},n.overweight=function(){window.alert("\u043f\u0435\u0440\u0435\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f ".concat((10*Math.random()).toFixed(1),"\u043a\u0433!"));var t=n.state.belts;t.forEach((function(t){if(!0===t.selected){t.status="inactive",t.text="\u043f\u0435\u0440\u0435\u043d\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f, \u0432\u0438\u043c\u043a\u043d\u0435\u043d\u0430";var e=localStorage.getItem("log"),a=new Date;e+="\u0441\u0442\u0440\u0456\u0447\u043a\u0430 \u043d\u043e\u043c\u0435\u0440 ".concat(t.id," \u0430\u0432\u0430\u0440\u0456\u0439\u043d\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0430 \u0440\u043e\u0431\u043e\u0442\u0443, ").concat(a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+","+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),"; \n"),localStorage.setItem("log",e)}})),n.setState({belts:t})},n.download=function(){var t=localStorage.getItem("log"),e=new Blob([t],{type:"text/txt"}),a=window.URL.createObjectURL(e),n=document.createElement("a");n.href=a,n.setAttribute("download","log.txt"),n.click()},n.mainRef=s.a.createRef(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.mainRef.current.focus(),localStorage.setItem("log","")}},{key:"render",value:function(){var t=this,e=this.state.belts;return s.a.createElement("div",{ref:this.mainRef,tabIndex:"0",onKeyDown:function(e){return t.handleKeyPress(e)},className:"app"},s.a.createElement("h1",{className:"app_title"},"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0442\u0440\u0456\u0447\u043a\u0438 \u0434\u043b\u044f \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u0457"),s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"belt_main"},e&&e.map((function(e){return s.a.createElement("div",{key:e.id,className:"belt_block"},"active"===e.status&&s.a.createElement("div",{onClick:function(){return t.handleClick(e.id,e.status,e.selected,e.text)},className:!0===e.selected?"belt_active selected":"belt_active"}),"inactive"===e.status&&s.a.createElement("div",{onClick:function(){return t.handleClick(e.id,e.status,e.selected,e.text)},className:!0===e.selected?"belt_inactive selected":"belt_inactive"}),"stoped"===e.status&&s.a.createElement("div",{onClick:function(){return t.handleClick(e.id,e.status,e.selected,e.text)},className:!0===e.selected?"belt_stoped selected":"belt_stoped"}),s.a.createElement("span",{className:"belt_title"},"\u0441\u0442\u0440\u0456\u0447\u043a\u0430 \u043d\u043e\u043c\u0435\u0440 ".concat(e.id,": ").concat(e.text)))})),s.a.createElement("button",{className:"button_log",onClick:this.download},"\u0421\u043a\u0430\u0447\u0430\u0442\u0438 log \u0444\u0430\u0439\u043b")),s.a.createElement("div",{className:"buttons_container"},s.a.createElement("button",{className:"buttons_button",onClick:this.prepareForWork},"\u041f\u0440\u0438\u0433\u043e\u0442\u0443\u0432\u0430\u0442\u0438 \u0441\u0442\u0440\u0456\u0447\u043a\u0438 \u0434\u043e \u0440\u043e\u0431\u043e\u0442\u0438   (p)"),s.a.createElement("button",{className:"buttons_button",onClick:this.stop},"\u041f\u0440\u0438\u0437\u0443\u043f\u0438\u043d\u0438\u0442\u0438   (s)"),s.a.createElement("button",{className:"buttons_button",onClick:this.start},"\u0423\u0432\u0456\u043c\u043a\u043d\u0443\u0442\u0438  (Enter)"),s.a.createElement("button",{className:"buttons_button",onClick:this.off},"\u0412\u0438\u043c\u043a\u043d\u0443\u0442\u0438   (Esc)"),s.a.createElement("button",{className:"buttons_button",onClick:this.fire},"\u0421\u0433\u0435\u043d\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u043f\u043e\u0436\u0435\u0436\u0443   (f)"),s.a.createElement("button",{className:"buttons_button",onClick:this.overweight},"\u0421\u0433\u0435\u043d\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u043f\u0435\u0440\u0435\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f   (o)"))))}}]),a}(n.Component));c.a.render(s.a.createElement(d,null),document.getElementById("root"))},7:function(t,e,a){t.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.c318438a.chunk.js.map