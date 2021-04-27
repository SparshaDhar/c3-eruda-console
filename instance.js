"use strict";
{
    const SDK = self.SDK;

    const PLUGIN_CLASS = SDK.Plugins.Sparsha_ErudaConsole;

    PLUGIN_CLASS.Instance = class ErudaConsoleInstance extends SDK.IWorldInstanceBase
    {
        constructor(sdkType, inst)
        {
            super(sdkType, inst);
            this._webglText = null;
        }

        Release()
        {
            if (this._webglText)
            {
                this._webglText.Release();
                this._webglText = null;
            }
        }

        OnCreate()
        {
            // Default to top-left origin
            this._inst.SetOrigin(0, 0);
        }

        OnPlacedInLayout()
        {
            // Set default size
            this._inst.SetSize(400, 300);
        }


        _UpdateWebGLText(iRenderer, iLayoutView)
        {
            if (!this._webglText) // lazy-create
            {
                this._webglText = iRenderer.CreateWebGLText();
                this._webglText.SetFontSize(14);
                this._webglText.SetTextureUpdateCallback(() => iLayoutView.Refresh());
                this._webglText.SetHorizontalAlignment("center");
                this._webglText.SetVerticalAlignment("center");
            }

            const textZoom = iLayoutView.GetZoomFactor();
            this._webglText.SetSize(this._inst.GetWidth(), this._inst.GetHeight(), textZoom);

            this._webglText.SetText("Eruda Console 🛠");
        }


        Draw(iRenderer, iDrawParams)
        {
            const iLayoutView = iDrawParams.GetLayoutView();
            this._UpdateWebGLText(iRenderer, iLayoutView);

            this._inst.ApplyBlendMode(iRenderer);
            iRenderer.SetColorFillMode();

            const quad = this._inst.GetQuad();
            iRenderer.SetColorRgba(0.94, 0.75, 0.94, 1);
            iRenderer.Quad(quad);

            iRenderer.SetColorRgba(0, 0, 0, 1);
            iRenderer.LineQuad(quad);

            const texture = this._webglText.GetTexture();
            if (!texture) return; // not yet loaded WebGLText - just ignore and skip rendering text, it'll appear momentarily

            iRenderer.SetTextureFillMode();
            iRenderer.SetTexture(texture);
            iRenderer.ResetColor();
            iRenderer.Quad3(quad, this._webglText.GetTexRect());
        }

        OnPropertyChanged(id, value)
        {}

        LoadC2Property(name, valueString)
        {
            return false; // not handled
        }
    };
}