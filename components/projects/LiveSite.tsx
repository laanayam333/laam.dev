interface IProps {
  siteURL: string;
}

const LiveSite = ({ siteURL }: IProps) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <span className="relative flex h-2 w-2 lg:h-3 lg:w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500 lg:h-3 lg:w-3"></span>
      </span>
      <a
        href={siteURL}
        target="_blank"
        rel="noopener noreferrer"
        className="tw-transition text-lg font-medium uppercase tracking-widest hover:text-yellow-600 lg:space-x-3 lg:text-xl"
      >
        Live Site
      </a>
    </div>
  );
};

export default LiveSite;
