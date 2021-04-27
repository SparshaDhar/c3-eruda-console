"use strict"; {

    eruda.trigErudaInit = 0;
    const DOM_COMPONENT_ID = "sparsha-erudaconsole";

    function StopPropagation(e) {
        e.stopPropagation();


    }
    const HANDLER_CLASS = class MyDOMHandler extends self.DOMElementHandler {

        constructor(iRuntime) {
            super(iRuntime, DOM_COMPONENT_ID);

        }

        CreateElement(elementId, e) {
            const elem = document.createElement("div");
            elem.style.position = "absolute";
            return elem;
        }

        UpdateState(elem, e) {
            if (e["action"] == "INIT" && e["settings"]["type"] != 2) {

                /* 
                NOTE: This section is to be included after this issue gets fixed: https://github.com/liriliri/eruda/issues/195
                -------------------------
                eruda.destroy();
                */

                var isContainer = false;
                if (e["settings"]["type"] == 0) isContainer = true;
                this._InitEruda(elem, isContainer, e)
            }

        }

        _InitEruda(elem, isContainer, e) {

            var _size = e["settings"]["size"];
            var _transparency = e["settings"]["transparency"];
            var _theme = e["settings"]["theme"];

            var Themes = ["Light", "Dark", "Material Oceanic", "Material Darker", "Material Lighter", "Material Palenight", "Material Deep Ocean", "Monokai Pro", "Dracula", "Arc Dark", "Atom One Dark", "Atom One Light", "Solarized Dark", "Solarized Light", "Github", "Night Owl", "Light Owl"];

            localStorage.setItem("eruda-dev-tools", "{\"transparency\":" + _transparency + ",\"displaySize\":" + _size * 100 + ",\"theme\":\"" + Themes[_theme] + "\"}");


            if (isContainer) {
                eruda.init({
                    container: elem,
                    tool: ['console', 'sources', 'resources', 'network', 'info', 'elements'],
                    useShadowDom: false,
                    autoScale: true,
                });
                eruda.position({ x: parseInt(elem.style.width) - 40, y: 0 });

            } else {
                eruda.init({
                    container: elem,
                    tool: ['console', 'sources', 'resources', 'network', 'info', 'elements'],
                    useShadowDom: true,
                    autoScale: true,
                });
                eruda.position({ x: document.body.clientWidth - 40, y: 0 });
            }

            var set0Elem = eruda.get('settings')._$el[0].getElementsByTagName('div')
            set0Elem[0].style.display = "none";
            set0Elem[1].style.display = "none";

            var navbarElem = eruda.get()._$el[0].getElementsByClassName("eruda-nav-bar-item");
            navbarElem[2].style.display = "none";
            navbarElem[3].style.display = "none";
            navbarElem[4].style.display = "none";
            navbarElem[5].style.display = "none";

            window.addErudaOptions();

            var styleBar = document.createElement('style');
            styleBar.innerHTML = `
				::-webkit-scrollbar {
				width: 6px;
				height: 4px;
				}
				::-webkit-scrollbar-track {
				background: transparent;
				}
				::-webkit-scrollbar-thumb {
				background: #888;
				}
				::-webkit-scrollbar-thumb:hover {
				background: #555;
			}`;
            eruda.get()._$el[0].appendChild(styleBar);

            eruda.trigErudaInit = 1;
        }
    };
    self.RuntimeInterface.AddDOMHandlerClass(HANDLER_CLASS);

    /*
	NOTE: This section is to be included after this issue gets fixed: https://github.com/liriliri/eruda/issues/195
	-------------------------
	localStorage.setItem("eruda-dev-tools","{\"transparency\":1,\"displaySize\":"+60+",\"theme\":\"Light\"}");
	eruda.init({
		tool: ['console', 'sources', 'resources', 'network', 'info', 'elements'],
		useShadowDom: true,
		autoScale: true,
	});
	eruda.position({x: document.body.clientWidth-40, y: 0});
	window.addErudaOptions();
	*/
}