export default function ProgressBar({ title, progress }) {
  
  return (
    <div className="progress-bar grid grid-cols-[auto_1.2fr_auto] items-center gap-5 md:gap-2">
      <div className="title w-[6.25rem] md:w-[5.9rem] lg:w-[7.8rem] text-wrap">
        {title}
      </div>
      <div className="progress-line grow w-full h-0.5 relative bg-quaternaryLight">
        <div className="filler h-[inherit] absolute inset-0 bg-primaryOrange" style={{ width: progress }}></div>
      </div>
      <div className="progress">
        {progress}
      </div>
    </div>
  );
}
