export namespace CesiumHeatmap {
  interface Bounds {
    west: number, east: number, south: number, north: number
  }
  interface Options {
		minCanvasSize?: number,          // minimum size (in pixels) for the heatmap canvas
		maxCanvasSize?: number,          // maximum size (in pixels) for the heatmap canvas
		radius?: number,
		radiusFactor?: number,           // data point size factor used if no radius is given (the greater of height and width divided by this number yields the used radius)
		spacingFactor?: number,          // extra space around the borders (point radius multiplied by this number yields the spacing)
		maxOpacity?: number,             // the maximum opacity used if not given in the heatmap options object
		minOpacity?: number,             // the minimum opacity used if not given in the heatmap options object
		blur?: number,                   // the blur used if not given in the heatmap options object
		gradient?: object                // the gradient used if not given in the heatmap options object
	}
	interface DataPoint {
		x: number, y: number, value: number
	}
	interface Instance {
		setWGS84Data<T>(min: number, max: number, data: DataPoint[]): T|undefined
	}
  function create(bb: Bounds, options: Options): Instance
}
