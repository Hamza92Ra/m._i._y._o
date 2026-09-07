export default function Loader({ hidden }: { hidden: boolean }) {
  return (
    <div className={hidden ? 'loader hidden' : 'loader'} id="loader">
      <div className="loader-content">
        <div className="loader-flame"></div>
        <div className="brand">MIYO</div>
      </div>
    </div>
  );
}
