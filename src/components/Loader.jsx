import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader"

const MyLoader = (props) => {
  const [width, setWidth] = useState(window.innerWidth > 800 ? 1000 : 400);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth > 800 ? 1000 : 500);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ContentLoader
      speed={2}
      width={width}
      height={560}
      viewBox="0 0 600 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="30" cy="31" r="24" />
      <rect x="58" y="18" rx="2" ry="2" width="180" height="10" />
      <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <rect x="-2" y="160" rx="2" ry="2" width="600" height="250" />
      <rect x="4" y="100" rx="2" ry="2" width="600" height="9" />
      <rect x="4" y="120" rx="2" ry="2" width="600" height="9" />
      <rect x="4" y="140" rx="2" ry="2" width="600" height="9" />
      <rect x="4" y="70" rx="2" ry="2" width="180" height="20" />
    </ContentLoader>
  );
};

export default MyLoader