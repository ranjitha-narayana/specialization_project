import React from 'react'

const home = () => {
    return (
        <div>
            {/* <div className='embed-responsive embed-resonsive-20by9'>
                <iframe src='../products/video1.mp4' allowFullScreen></iframe>
            </div> */}
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../products/carousel4.jpeg" class="d-block w-100" alt="image2" width="800" height="670px" />

                    </div>
                    <div class="carousel-item">
                        <img src="../products/carousel1.jpeg" class="d-block w-100" alt="image1" width="800" height="670px" />
                    </div>
                    <div class="carousel-item">
                        <img src="../products/img3.jpeg" class="d-block w-100" alt="..." width="800" height="670px" />
                    </div>
                    <div class="carousel-item">
                        <img src="../products/img1.jpeg" class="d-block w-100" alt="..." width="800" height="670px" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className='row'>
                <div className='col-sm-3 '>
                    <div class="card" >
                        <img src="https://www.xbhp.com/wp-content/uploads/2019/08/Rynox-Stealth-Evo-23.jpg" height="316px" class="card-img-top" alt="..." />
                        <div className="img-overlay"><h3>JACKETS</h3></div>

                    </div>
                </div>
                <div className='col-sm-3 '>
                    <div class="card" >
                        <img src="https://pbs.twimg.com/media/Eb7JKZBUYAIAEdf.jpg" class="card-img-top" alt="..." />
                        <div className="img-overlay"><h3>GLOVES</h3></div>

                    </div>

                </div>
                <div className='col-sm-3'>
                    <div class="card" >
                        <img src="https://mi0.rightinthebox.com/images/384x384/201808/axxzbv1535098661838.jpg" class="card-img-top" alt="..." />
                        <div className="img-overlay"><h3>KNEE GUARDS</h3></div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div class="card" >
                        <img src="https://www.xbhp.com/wp-content/uploads/2019/08/Rynox-Stealth-Evo-4.jpg" height="315px" class="card-img-top" alt="..." />
                        <div className="img-overlay"><h3>HELMETS</h3></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default home
