import React from 'react'
import ServiceCard from '../ServiceCard'
import Container from '../Container'

const Service = () => {
  return (
    <>
      <div className="bg-[#ddf6ee] py-50 rounded-tl-[350px] rounded-br-[350px]">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex gap-x-3">
              <ServiceCard />
              <ServiceCard />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Service