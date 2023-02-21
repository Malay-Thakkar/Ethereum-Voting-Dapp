import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="./img/food1.jpg" alt="slide-1" />
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 className="text-left font-weight-bold font-italic">Are you hungry?</h5>
                            <h1 className="text-left font-weight-bold font-italic" >Don't Wait!</h1>
                            <button className='bg-yellow-500 rounded-full text-center d-flex align-items-start px-4'>
                                <Link to="/product"><p className="font-weight-bold font-italic mt-2">Order now!</p></Link></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./img/food3.jpg" alt="slide-2" />
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 className="text-left font-weight-bold font-italic">Are you hungry?</h5>
                            <h1 className="text-left font-weight-bold font-italic" >Don't Wait!</h1>
                            <button className='bg-yellow-500 rounded-full text-center d-flex align-items-start px-4'>
                                <Link to="/product"><p className="font-weight-bold font-italic mt-2">Order now!</p></Link></button> </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./img/food4.jpg" alt="slide-3" />
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 className="text-left font-weight-bold font-italic">Are you hungry?</h5>
                            <h1 className="text-left font-weight-bold font-italic" >Don't Wait!</h1>
                            <button className='bg-yellow-500 rounded-full text-center d-flex align-items-start px-4'>
                                <Link to="/product"><p className="font-weight-bold font-italic mt-2">Order now!</p></Link></button>   </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./img/food2.jpg" alt="slide-4" />
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 className="text-left font-weight-bold font-italic">Are you hungry?</h5>
                            <h1 className="text-left font-weight-bold font-italic" >Don't Wait!</h1>
                            <button className='bg-yellow-500 rounded-full text-center d-flex align-items-start px-4'>
                                <Link to="/product"><p className="font-weight-bold font-italic mt-2">Order now!</p></Link></button>   </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./img/food5.jpg" alt="slide-5" />
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 className="text-left font-weight-bold font-italic">Are you hungry?</h5>
                            <h1 className="text-left font-weight-bold font-italic" >Don't Wait!</h1>
                            <button className='bg-yellow-500 rounded-full text-center d-flex align-items-start px-4'>
                                <Link to="/product"><p className="font-weight-bold font-italic mt-2">Order now!</p></Link></button>   </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./img/food6.jpg" alt="slide-6" />
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 className="text-left font-weight-bold font-italic">Are you hungry?</h5>
                            <h1 className="text-left font-weight-bold font-italic" >Don't Wait!</h1>
                            <button className='bg-yellow-500 rounded-full text-center d-flex align-items-start px-4'>
                                <Link to="/product"><p className="font-weight-bold font-italic mt-2">Order now!</p></Link></button>   </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./img/food7.jpg" alt="slide-7" />
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 className="text-left font-weight-bold font-italic">Are you hungry?</h5>
                            <h1 className="text-left font-weight-bold font-italic" >Don't Wait!</h1>
                            <button className='bg-yellow-500 rounded-full text-center d-flex align-items-start px-4'>
                                <Link to="/product"><p className="font-weight-bold font-italic mt-2">Order now!</p></Link></button>   </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./img/food8.jpg" alt="slide-8" />
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 className="text-left font-weight-bold font-italic">Are you hungry?</h5>
                            <h1 className="text-left font-weight-bold font-italic" >Don't Wait!</h1>
                            <button className='bg-yellow-500 rounded-full text-center d-flex align-items-start px-4'>
                                <Link to="/product"><p className="font-weight-bold font-italic mt-2">Order now!</p></Link></button>   </div>
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
           

        </>
    
    )
}

export default Home;