"use strict"; {
    const SDK = self.SDK;

    const PLUGIN_ID = "Sparsha_ErudaConsole";
    const PLUGIN_VERSION = "1.0.1";
    const PLUGIN_CATEGORY = "general";

    const PLUGIN_CLASS = SDK.Plugins.Sparsha_ErudaConsole = class ErudaConsolePlugin extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(lang(".name"));
            this._info.SetDescription(lang(".description"));
            this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("Sparsha");
            this._info.SetHelpUrl(lang(".help-url"));
            this._info.SetPluginType("world");
            this._info.SetIsResizable(true);
            this._info.SetCanBeBundled(true);
            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");

            this._info.SetProperties([
                new SDK.PluginProperty("combo", "type", {
                    "items": ["item1", "item2"],
                    "initialValue": "item1",
                    "interpolatable": false
                }),
                new SDK.PluginProperty("percent", "height", 1, {
                    "interpolatable": false
                }),
                new SDK.PluginProperty("percent", "transparency", 1, {
                    "interpolatable": false
                }),
                new SDK.PluginProperty("combo", "theme", {
                    "items": ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10", "item11", "item12", "item13", "item14", "item15", "item16", "item17", ],
                    "initialValue": "item1",
                    "interpolatable": false
                }),
            ]);



            this._info.AddFileDependency({
                filename: "eruda/core/eruda.js",
                type: "external-dom-script"
            });
            this._info.AddFileDependency({
                filename: "eruda/external-plugin/eruda-options.js",
                type: "external-dom-script"
            });
            this._info.AddFileDependency({
                filename: "eruda/core/eruda-fps.js",
                type: "external-dom-script"
            });
            this._info.AddFileDependency({
                filename: "eruda/core/eruda-memory.js",
                type: "external-dom-script"
            });
            this._info.AddFileDependency({
                filename: "eruda/core/eruda-orientation.js",
                type: "external-dom-script"
            });
            this._info.AddFileDependency({
                filename: "eruda/core/eruda-code.js",
                type: "external-dom-script"
            });
            this._info.AddFileDependency({
                filename: "eruda/core/eruda-touches.js",
                type: "external-dom-script"
            });
            this._info.AddFileDependency({
                filename: "eruda/core/eruda-features.js",
                type: "external-dom-script"
            });
            this._info.SetDOMSideScripts(["c3runtime/init.js"]);


            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}