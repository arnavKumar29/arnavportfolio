export default function Footer() {
  return (
    <footer className="bg-black border-t border-line">
      <div className="px-5 md:px-8 lg:px-16 max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[11px] font-body">
          <svg width="10" height="10" viewBox="0 0 10 10" className="text-red"><rect x="2" y="2" width="6" height="6" fill="currentColor" transform="rotate(45 5 5)" /></svg>
          <span className="text-light">Built by Arnav Kumar</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] text-gray uppercase tracking-wider font-mono">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="w-px h-3 bg-border" />
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute h-full w-full rounded-full bg-red opacity-40" /><span className="relative rounded-full h-1.5 w-1.5 bg-red" /></span>
            Systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
