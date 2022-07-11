L.Control.Home = L.Control.Zoom.extend({
  options: {
    position: "topright",
    zoomInText: "+",
    zoomInTitle: "Zoom in",
    zoomOutText: "-",
    zoomOutTitle: "Zoom out",
    zoomResetText: "Zoom min",
    zoomResetTitle: "Reset",

  },

  onAdd: function (map) {
    var zoomName = "leaflet-control-zoom"
      , container = L.DomUtil.create("div", zoomName + " leaflet-bar")
      , options = this.options

    this._map = map

    this._zoomInButton = this._createButton(options.zoomInText, options.zoomInTitle,
     zoomName + '-in', container, this._zoomIn, this)

    this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
     zoomName + '-out', container, this._zoomOut, this)

    this._zoomResetButton = this._createButton(options.zoomResetText, options.zoomResetTitle,
     zoomName + '-reset', container, this._zoomReset, this)

    this._updateDisabled()
    map.on('zoomend zoomlevelschange', this._updateDisabled, this)

    return container
  },

  _zoomReset: function (e) {
    map.setView([30,79.25],7);
  },

  _updateDisabled: function () {
    var map = this._map
      , className = "leaflet-disabled"

    L.DomUtil.removeClass(this._zoomInButton, className)
    L.DomUtil.removeClass(this._zoomOutButton, className)


    if (map._zoom === map.getMinZoom()) {
      L.DomUtil.addClass(this._zoomOutButton, className)
    }

    if (map._zoom === map.getMaxZoom()) {
      L.DomUtil.addClass(this._zoomInButton, className)
    }
  }
})
