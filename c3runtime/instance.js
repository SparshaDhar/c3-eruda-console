"use strict"; {
    const C3 = self.C3;
    const DOM_COMPONENT_ID = "sparsha-erudaconsole";
    C3.Plugins.Sparsha_ErudaConsole.Instance = class ErudaConsoleInstance extends C3.SDKDOMInstanceBase {
        constructor(inst, properties) {
            super(inst, DOM_COMPONENT_ID);


            if (properties) {
                this._settings = {
                    "type": properties[0],
                    "size": properties[1],
                    "transparency": properties[2],
                    "theme": properties[3]
                }
            }

            this._action = "INIT";
            this.CreateElement();
            this.UpdateElementState();
        }
        GetElementState() {
            // Return JSON with the state of the element. This is passed along to both CreateElement()
            // and UpdateState() in domSide.js. It provides a convenient way to send all the DOM element
            // state in one go, ensuring any changes are reflected in the real element.
            return {
                "action": this._action,
                "settings": this._settings,
            };
        }

        Release() {
            super.Release();
        }

        Draw(renderer) {
            // not used - a DOM element is positioned at this instance instead
        }

        SaveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        LoadFromJson(o) {
            // load state for savegames
        }

        GetDebuggerProperties() {
            return [{
                title: "ErudaConsole",
                properties: [
                    //{name: ".current-animation",	value: this._currentAnimation.GetName(),	onedit: v => this.CallAction(Acts.SetAnim, v, 0) },
                ]
            }];
        }

        // timeline support
        GetPropertyValueByIndex(index) {
            return 0;
        }

        SetPropertyValueByIndex(index, value) {
            //set property value here
        }
    };
}