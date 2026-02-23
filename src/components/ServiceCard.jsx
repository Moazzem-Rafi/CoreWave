import React from 'react'
import Container from './Container'
import Images from './Images'
import serviceCard_1 from '/src/assets/serviceImg_1.png'

const ServiceCard = () => {
    return (
        <>
            <div className="bg-[#ddf6ee] py-50">
                <Container>
                    <div className="flex gap-x-3">
                        <div className="bg-white h-[322px] w-[312px]">
                            <Images imgSrc={serviceCard_1} className={'pl-5 pt-10'} />
                            <h4 className='pl-5 pt-4 font-semibold text-[20px] font-Lato'>Web Development</h4>
                            <p className='pl-5 pt-4 text-[16px] font-Lato w-66.25 text-[#7B7B7B]'>Web development is the art of creating engaging and visually appealing websites </p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ServiceCard