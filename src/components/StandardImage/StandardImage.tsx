import React from "react";

type StandardImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
  wrapperClassName: string;
  title: string;
  style: React.CSSProperties;
};

const StandardImage = React.forwardRef(function StandardImage(
  {
    src,
    alt,
    width,
    height,
    wrapperClassName,
    title,
    style,
  }: StandardImageType,
  ref: React.ForwardedRef<HTMLImageElement>
) {
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      title={title}
      style={style}
      className={wrapperClassName}
    />
  );
});

export default StandardImage;
