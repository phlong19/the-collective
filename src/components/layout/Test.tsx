export default function Test({
  size,
  className,
}: {
  size: number;
  className: string;
}) {
  return (
    <svg
      className={className}
      style={{ height: size, width: size }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={"0 0 75 75"}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            style={{ stopColor: "#f9ce34", stopOpacity: 0.8 }}
          />
          <stop
            offset="40%"
            style={{ stopColor: "#ee2a7b", stopOpacity: 0.8 }}
          />
          <stop
            offset="80%"
            style={{ stopColor: "#6228d7", stopOpacity: 0.8 }}
          />
        </linearGradient>
      </defs>
      <path
        d="M51.9713 62H12.0288C6.50924 62 2 57.4908 2 51.9713V12.0287C2 6.50924 6.50924 2 12.0288 2H51.9713C57.4908 2 62 6.50924 62 12.0287V51.9713C62 57.5154 57.5154 62 51.9713 62Z"
        fill="url(#gradient)"
        stroke="url(#gradient)"
        strokeWidth={2}
      />
      <path
        d="M21.1212 42.9039C24.0288 45.8115 27.8974 47.4131 32.0123 47.4131C36.1273 47.4131 39.9713 45.8115 42.9035 42.9039C45.8111 39.9963 47.4128 36.1277 47.4128 32.0127C47.4128 27.8977 45.8111 24.0291 42.9035 21.1215C39.9959 18.2139 36.1273 16.6123 32.0123 16.6123C27.8974 16.6123 24.0288 18.2139 21.1212 21.1215C18.2136 24.0291 16.6119 27.8977 16.6119 32.0127C16.6119 36.1277 18.2136 39.9963 21.1212 42.9039Z"
        fill="url(#gradient)"
        stroke="white"
        strokeWidth={5}
      />
      <path
        d="M50.4146 16.1063C52.0477 16.1063 53.3715 14.7824 53.3715 13.1493C53.3715 11.5163 52.0477 10.1924 50.4146 10.1924C48.7815 10.1924 47.4576 11.5163 47.4576 13.1493C47.4576 14.7824 48.7815 16.1063 50.4146 16.1063Z"
        fill="url(#gradient)"
        stroke="white"
        strokeWidth={3}
      />
    </svg>
  );
}
