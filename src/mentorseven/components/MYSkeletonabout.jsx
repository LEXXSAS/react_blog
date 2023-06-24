import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {Card, Row, Col, Button} from 'react-bootstrap';
import React from 'react'

const MYSkeletonabout = () => {
  return (
    <>
      {/* <SkeletonTheme color='#202020' highlightColor="#FFF"> */}
      <SkeletonTheme color='#202020'>
                    <Skeleton style={{maxWidth: '100%'}} height={375}/>
                    {/* <h4 className="faketitle"><Skeleton height={36} width={`33%`} /></h4> */}
                    {/* <Skeleton style={{maxWidth: '100%'}} height={330} width={400} /> */}
      </SkeletonTheme>
    </>
  )
}

export default MYSkeletonabout
