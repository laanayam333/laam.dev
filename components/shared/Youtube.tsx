const Youtube = ({ id }: { id: string }) => {
  return (
    <div className="relative hidden h-0 max-w-full pb-[56.25%]">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay: encrypted-media"
        title="Embedded Youtuve video"
        className="absolute top-0 left-0 h-full w-full border-0"
      />
    </div>
  );
};

export default Youtube;
