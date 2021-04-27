"use strict";
{
    const C3 = self.C3;
    const DOM_COMPONENT_ID = "sparsha-erudaconsole";
    C3.Plugins.Sparsha_ErudaConsole = class ErudaConsolePlugin extends C3.SDKDOMPluginBase
    {
        constructor(opts)
        {
            super(opts, DOM_COMPONENT_ID);
        }

        Release()
        {
            super.Release();
        }
    };
}