const HIGHLIGHTED_ICON = 'images/marker-icon-2x.png';

export class Marker {
  constructor(googleMarker, object) {
    this._marker = googleMarker;
    this._object = object;
  }

  on(eventName, listenerFn) {
    this._marker.addListener(eventName, () => {
      listenerFn.call(this._marker, this._object, this);
    });
  }

  toggleHighlight(isHighlighted) {
    this._marker.setIcon(isHighlighted ? HIGHLIGHTED_ICON : null);
  }

  matches(object) {
    return this._object === object;
  }
}
