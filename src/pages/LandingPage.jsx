import Content1 from '../components/Content1'
import Content2 from '../components/Content2'
import Content3 from '../components/Content3'
import Content4 from '../components/Content4'
import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'

export default function LandingPage() {

    return (
        <>
            <div className='theme-root light'>
                <div className="jsx-2566509379 page-wrapper wide-page-wrapper no-bottom-padding">
                    <div className='jsx-2566509379 page-content'>
                        {/* <Navbar /> */}
                        <div className='jsx-3325839890 jsx-4002731451 home-wrapper'>
                            <Content1 />
                            <Content2 />
                            <Content3 />
                            <Content4 />
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}