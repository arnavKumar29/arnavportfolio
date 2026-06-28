export default function Cube({ size = 140 }: { size?: number }) {
  const half = size / 2;

  return (
    <div className="cube-scene" style={{ width: size, height: size }}>
      <div className="cube">
        {/* Front */}
        <div
          className="cube-face"
          style={{ transform: `translateZ(${half}px)` }}
        >
          <span>build</span>
        </div>
        {/* Back */}
        <div
          className="cube-face"
          style={{ transform: `rotateY(180deg) translateZ(${half}px)` }}
        >
          <span>ship</span>
        </div>
        {/* Right */}
        <div
          className="cube-face"
          style={{ transform: `rotateY(90deg) translateZ(${half}px)` }}
        >
          <span>learn</span>
        </div>
        {/* Left */}
        <div
          className="cube-face"
          style={{ transform: `rotateY(-90deg) translateZ(${half}px)` }}
        >
          <span>iterate</span>
        </div>
        {/* Top */}
        <div
          className="cube-face"
          style={{ transform: `rotateX(90deg) translateZ(${half}px)` }}
        >
          <span>think</span>
        </div>
        {/* Bottom */}
        <div
          className="cube-face"
          style={{ transform: `rotateX(-90deg) translateZ(${half}px)` }}
        >
          <span>deploy</span>
        </div>
      </div>
    </div>
  );
}
