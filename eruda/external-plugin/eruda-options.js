window.addErudaOptions = function() {
    eruda.add({
        name: 'options',
        init($el) {



            $el.html(`
<div id="eruda-settings" class="eruda-settings eruda-tool" style="display: block;
">
  <div class="eruda-text">Inbuilt Developer Tools</div>
  <div id="def1" class="eruda-switch"> Console
    <label class="eruda-checkbox">
      <input type="checkbox" class="eruda-input" data-id="def1" checked>
      <span class="eruda-label"></span>
      <span class="eruda-handle"></span>
    </label>
  </div>
  <div id="def2" class="eruda-switch"> Sources
    <label class="eruda-checkbox">
      <input type="checkbox" class="eruda-input" data-id="def2" checked>
      <span class="eruda-label"></span>
      <span class="eruda-handle"></span>
    </label>
  </div>
  <div id="def3" class="eruda-switch"> Resources
    <label class="eruda-checkbox">
      <input type="checkbox" class="eruda-input" data-id="def3">
      <span class="eruda-label"></span>
      <span class="eruda-handle"></span>
    </label>
  </div>
  <div id="def4" class="eruda-switch"> Network
    <label class="eruda-checkbox">
      <input type="checkbox" class="eruda-input" data-id="def4">
      <span class="eruda-label"></span>
      <span class="eruda-handle"></span>
    </label>
  </div>
  <div id="def5" class="eruda-switch"> Info
    <label class="eruda-checkbox">
      <input type="checkbox" class="eruda-input" data-id="def5">
      <span class="eruda-label"></span>
      <span class="eruda-handle"></span>
    </label>
  </div>
  <div id="def6" class="eruda-switch"> Elements
    <label class="eruda-checkbox">
      <input type="checkbox" class="eruda-input" data-id="def6">
      <span class="eruda-label"></span>
      <span class="eruda-handle"></span>
    </label>
  </div>
  
  <div class="eruda-text">More Developer Tools</div>
  <div id="more1" class="eruda-switch"> Fps
    <label class="eruda-checkbox">
      <input type="checkbox" class="eruda-input" data-id="more1">
      <span class="eruda-label"></span>
      <span class="eruda-handle"></span>
    </label>
  </div>
  <div id="more2" class="eruda-switch"> Memory
    <label class="eruda-checkbox">
      <input type="checkbox" class="eruda-input" data-id="more2">
      <span class="eruda-label"></span>
      <span class="eruda-handle"></span>
    </label>
  </div>
  <div id="more3" class="eruda-switch"> Orientation
    <label class="eruda-checkbox">
      <input type="checkbox" class="eruda-input" data-id="more3">
      <span class="eruda-label"></span>
      <span class="eruda-handle"></span>
    </label>
  </div>
  <div id="more4" class="eruda-switch"> Code
    <label class="eruda-checkbox">
      <input type="checkbox" class="eruda-input" data-id="more4">
      <span class="eruda-label"></span>
      <span class="eruda-handle"></span>
    </label>
  </div>
  <div id="more5" class="eruda-switch"> Touches (works only on Mobile)
    <label class="eruda-checkbox">
      <input type="checkbox" class="eruda-input" data-id="more5">
      <span class="eruda-label"></span>
      <span class="eruda-handle"></span>
    </label>
  </div>
  <div id="more6" class="eruda-switch"> Browser Features- Check HTML5 Support
    <label class="eruda-checkbox">
      <input type="checkbox" class="eruda-input" data-id="more6">
      <span class="eruda-label"></span>
      <span class="eruda-handle"></span>
    </label>
  </div>
</div>
`);





            this._$el = $el;


            var elem = $el[0].children[0].getElementsByClassName("eruda-input");


            var elemTool = eruda.get()._$el[0].getElementsByClassName("eruda-nav-bar-item");

            function clickHandler0() {
                changeDefaultTools(0);

            }

            function clickHandler1() {
                changeDefaultTools(1);

            }

            function clickHandler2() {
                changeDefaultTools(2);

            }

            function clickHandler3() {
                changeDefaultTools(3);

            }

            function clickHandler4() {
                changeDefaultTools(4);

            }

            function clickHandler5() {
                changeDefaultTools(5);

            }

            function changeDefaultTools(n) {
                if (elem[n].checked) elemTool[n].style.display = "";

                else elemTool[n].style.display = "none";

                var activetab = eruda.get()._$el[0].getElementsByClassName("eruda-nav-bar-item eruda-active")[0];

                var bar = eruda.get()._$el[0].getElementsByClassName("eruda-bottom-bar")[0];

                bar.style.left = activetab.offsetLeft + "px";

            }



            function clickHandler6() {
                if (elem[6].checked) eruda.add(erudaFps);

                else eruda.remove('fps');

            }

            function clickHandler7() {
                if (elem[7].checked) eruda.add(erudaMemory);

                else eruda.remove('memory');

            }

            function clickHandler8() {
                if (elem[8].checked) eruda.add(erudaOrientation);

                else eruda.remove('orientation');

            }

            function clickHandler9() {
                if (elem[9].checked) eruda.add(erudaCode);

                else eruda.remove('code');

            }

            function clickHandler10() {
                if (elem[10].checked) eruda.add(erudaTouches);

                else eruda.remove('touches');

            }

            function clickHandler11() {
                if (elem[11].checked) eruda.add(erudaFeatures);

                else eruda.remove('features');

            }
            elem[0].addEventListener("click", clickHandler0);

            elem[1].addEventListener("click", clickHandler1);

            elem[2].addEventListener("click", clickHandler2);

            elem[3].addEventListener("click", clickHandler3);

            elem[4].addEventListener("click", clickHandler4);

            elem[5].addEventListener("click", clickHandler5);

            elem[6].addEventListener("click", clickHandler6);

            elem[7].addEventListener("click", clickHandler7);

            elem[8].addEventListener("click", clickHandler8);

            elem[9].addEventListener("click", clickHandler9);

            elem[10].addEventListener("click", clickHandler10);

            elem[11].addEventListener("click", clickHandler11);

        },
        show() {
            this._$el.show();

        },
        hide() {
            this._$el.hide();

        },
        destroy() {}
    });

}