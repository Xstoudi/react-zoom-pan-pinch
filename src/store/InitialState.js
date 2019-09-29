export const initialState = {
  // components
  wrapperComponent: null,
  contentComponent: null,
  // settings
  limitToBounds: true,
  disabled: false,
  // position
  isCentered: true,
  transformEnabled: true,
  positionX: 0,
  positionY: 0,
  maxPositionX: null,
  minPositionX: null,
  maxPositionY: null,
  minPositionY: null,
  // scale
  zoomingEnabled: true,
  scale: 1,
  maxScale: 8,
  minScale: 1,
  previousScale: 1,
  // padding
  limitToWrapperOnWheel: true,
  enablePaddingAnimation: true,
  zoomPadding: 0.45,
  // wheel
  wheelStep: 6.5,
  enableWheel: true,
  enableTouchPadPinch: true,
  // pinch
  pinchEnabled: true,
  pinchSensitivity: 1,
  startPinchDistance: null,
  //panning
  panningEnabled: true,
  limitToWrapperBounds: false,
  startPanningCoords: null,
  lockAxisX: false,
  lockAxisY: false,
  // velocity
  velocityTimeBasedOnMove: true,
  minVelocity: 1.8,
  enableVelocity: true,
  minVelocityScale: 1,
  // animations
  velocityAnimationSpeed: 1800,
  zoomAnimationSpeed: 200,
  velocitySensitivity: 1,
  // controls
  dbClickEnabled: true,
  dbClickMode: "zoomIn",
  zoomInStep: 40,
  zoomOutStep: 40,
  dbClickStep: 40,
  zoomInAnimationSpeed: 200,
  zoomOutAnimationSpeed: 200,
  dbClickAnimationSpeed: 200,
  resetAnimationSpeed: 200,
  scalePaddingAnimationSpeed: 200,
};
