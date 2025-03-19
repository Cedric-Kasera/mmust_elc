import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1000}
    height={460}
    viewBox="0 0 600 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="30" cy="31" r="24" /> 
    <rect x="58" y="18" rx="2" ry="2" width="180" height="10" /> 
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
    <rect x="-2" y="160" rx="2" ry="2" width="600" height="304" /> 
    <rect x="4" y="100" rx="2" ry="2" width="600" height="9" /> 
    <rect x="4" y="120" rx="2" ry="2" width="600" height="9" /> 
    <rect x="4" y="140" rx="2" ry="2" width="600" height="9" /> 
    <rect x="4" y="70" rx="2" ry="2" width="180" height="20" />
  </ContentLoader>
)

export default MyLoader