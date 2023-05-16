import React from 'react'
import ContentLoader from 'react-content-loader'

const Placeholder = () => (
  <ContentLoader
  speed={2}
  width={460}
  height={250}
  viewBox="0 0 460 438.1"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
>
  <rect x="2" y="2" rx="0" ry="0" width="460" height="250" />
</ContentLoader>
  // <ContentLoader viewBox="0 0 460 438.1" speed={2} width={460} height={438.1}
  //   backgroundColor="#f3f3f3"
  //   foregroundColor="#ecebeb"
  // >
  //   <rect x="0" y="258" rx="8" ry="8" width="460" height="17" /> 
  //   <rect x="0" y="0" rx="10" ry="10" width="460" height="250" /> 
  //   <rect x="0" y="282" rx="8" ry="8" width="460" height="17" />
  // </ContentLoader>
)

export default Placeholder
