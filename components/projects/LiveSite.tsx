interface IProps {
  siteURL: string;
}

const LiveSite = ({ siteURL }: IProps) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <span className="relative flex h-2 w-2 lg:h-3 lg:w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400 lg:h-3 lg:w-3"></span>
      </span>
      <a
        href={siteURL}
        target="_blank"
        rel="noopener noreferrer"
        className="tw-transition text-lg font-medium uppercase tracking-widest text-stone-700 hover:text-amber-300 lg:space-x-3 lg:text-xl"
      >
        Live Site
      </a>
    </div>
  );
};

export default LiveSite;
