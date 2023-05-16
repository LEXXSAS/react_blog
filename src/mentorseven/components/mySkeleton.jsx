import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {Card, Row, Col, Button} from 'react-bootstrap';
import React from 'react'

const MYSkeleton = () => {
  return (
    <>
      {/* <SkeletonTheme color='#202020' highlightColor="#FFF"> */}
      <SkeletonTheme color='#202020'>
            <Col>
                <Card>
                    <div className="fakeimage">
                    <Skeleton height={250} width={`100%`} />
                    </div>
                    <div className='fakecardbody'>
                    <h4 className="faketitle"><Skeleton height={36} width={`80%`} /></h4>
                    <p className="faketext"><Skeleton width={`60%`} /></p>
                    <div className='fakebutton'>
                    <Skeleton height={40} width={65} />
                    </div>
                    </div>
                </Card>
            </Col>
      </SkeletonTheme>
    </>
  )
}

export default MYSkeleton
