import Images from "../Images"
import Logo from "../../assets/Logo.png"
import Container from "../Container"
import Button from "../Button"


const Header = () => {
    return (
        <>
            <header className="py-[35px] fixed w-full ">
                <Container>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-[416px]">
                            {/* logo */}
                            <div className="logo cursor-pointer">
                                <Images imgSrc={Logo} />
                            </div>
                            {/* navbar */}
                            <nav>
                                <ul className="flex gap-x-5 cursor-pointer">
                                    <li className="hover:text-[#06C279] duration-300">Home</li>
                                    <li className="hover:text-[#06C279] duration-300">About</li>
                                    <li className="hover:text-[#06C279] duration-300">Portfolio</li>
                                    <li className="hover:text-[#06C279] duration-300">Service</li>
                                    <li className="hover:text-[#06C279] duration-300">Blog</li>
                                    <li className="hover:text-[#06C279] duration-300">Testimonial</li>
                                </ul>
                            </nav>
                        </div>
                        {/* btn */}
                        <div className="btn">
                            <Button btnText={'Register'} className={'px-[25px] py-[14.5px]'} />
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header