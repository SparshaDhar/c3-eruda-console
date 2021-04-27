"use strict";
{
    self.C3.Plugins.Sparsha_ErudaConsole.Acts = {
        ButtonHide()
        {
            eruda.get().$container[0].getElementsByClassName("eruda-entry-btn")[0].style.display = "none";
        },

        DestroyGlobal()
        {
            eruda.destroy();
        },

        ButtonShow()
        {
            eruda.get().$container[0].getElementsByClassName("eruda-entry-btn")[0].style.display = "";
        },

        PanelShow()
        {
            eruda.show();
        },

        PanelHide()
        {
            eruda.hide();
        },

        SetScale(scale)
        {
            eruda.scale(scale);
        }
    };
}