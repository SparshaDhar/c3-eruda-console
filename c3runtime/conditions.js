"use strict";
{
    self.C3.Plugins.Sparsha_ErudaConsole.Cnds = {
        OnInit()
        {
            if (eruda.trigErudaInit == 1)
            {
                eruda.trigErudaInit = 0;
                return true;
            }
            else return false;
        }
    };
}