/** Fixed, decorative aurora blobs + grain texture behind the whole page. */
export function AuroraBackground() {
  return (
    <>
      <div className="aurora-layer" aria-hidden="true">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>
      <div className="noise-layer" aria-hidden="true" />
    </>
  );
}
