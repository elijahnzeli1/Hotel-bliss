/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero jumbotron jumbotron-fluid text-white">
        <div className="container text-center">
          <h1 className="display-4"><strong> Welcome to Hotel Bliss</strong></h1>
          <p className="lead">{["Discover","your","perfect","getaway","at","our","luxury","hotel."].map((word, index) => (<span key={index} className="animated-word">{word} </span>))}</p>
          <Link className="btn btn-primary btn-lg" to="/room">Book Now</Link>
        </div>
      </section>

      {/* Featured Rooms/Deals */}
      <section className="featured-rooms container py-5">
        <h2 className="text-center mb-4">Featured Rooms</h2>
        <div className="row">
          {/* Example of featured room cards - replace with dynamic data */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/Room1.jpg" className="card-img-top" alt="Room" />
              <div className="card-body">
                <h5 className="card-title">Room Title</h5>
                <p className="card-text">Room description...</p>
                <Link to="/room-details" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
          {/* Add more room cards as needed */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/Room2.jpg" className="card-img-top" alt="Room" />
              <div className="card-body">
                <h5 className="card-title">Room Title</h5>
                <p className="card-text">Room description...</p>
                <Link to="/room-details" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/Room3.jpg" className="card-img-top" alt="Room" />
              <div className="card-body">
                <h5 className="card-title">Room Title</h5>
                <p className="card-text">Room description...</p>
                <Link to="/room-details" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/Room4.jpg" className="card-img-top" alt="Room" />
              <div className="card-body">
                <h5 className="card-title">Room Title</h5>
                <p className="card-text">Room description...</p>
                <Link to="/room-details" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/Room5.jpg" className="card-img-top" alt="Room" />
              <div className="card-body">
                <h5 className="card-title">Room Title</h5>
                <p className="card-text">Room description...</p>
                <Link to="/room-details" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/Room6.jpg" className="card-img-top" alt="Room" />
              <div className="card-body">
                <h5 className="card-title">Room Title</h5>
                <p className="card-text">Room description...</p>
                <Link to="/room-details" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/Room7.jpg" className="card-img-top" alt="Room" />
              <div className="card-body">
                <h5 className="card-title">Room Title</h5>
                <p className="card-text">Room description...</p>
                <Link to="/room-details" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/Room8.jpg" className="card-img-top" alt="Room" />
              <div className="card-body">
                <h5 className="card-title">Room Title</h5>
                <p className="card-text">Room description...</p>
                <Link to="/room-details" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/Room9.jpg" className="card-img-top" alt="Room" />
              <div className="card-body">
                <h5 className="card-title">Room Title</h5>
                <p className="card-text">Room description...</p>
                <Link to="/room-details" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/Room10.jpg" className="card-img-top" alt="Room" />
              <div className="card-body">
                <h5 className="card-title">Room Title</h5>
                <p className="card-text">Room description...</p>
                <Link to="/room-details" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/Room13.jpg" className="card-img-top" alt="Room" />
              <div className="card-body">
                <h5 className="card-title">Room Title</h5>
                <p className="card-text">Room description...</p>
                <Link to="/room-details" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/Room12.jpg" className="card-img-top" alt="Room" />
              <div className="card-body">
                <h5 className="card-title">Room Title</h5>
                <p className="card-text">Room description...</p>
                <Link to="/room-details" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities/Highlights */}
      <section className="amenities container py-5">
        <h2 className="text-center mb-4">Amenities & Services</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="fas fa-swimmer fa-3x mb-3"></i>
            <h3>Swimming Pool</h3>
            <p>Enjoy our luxurious pool with a breathtaking view.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-utensils fa-3x mb-3"></i>
            <h3>Restaurant</h3>
            <p>Experience fine dining with exquisite cuisine.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-spa fa-3x mb-3"></i>
            <h3>Spa & Wellness</h3>
            <p>Relax and rejuvenate with our premium spa services.</p>
          </div>
        </div>
      </section>

      {/* Testimonials/Reviews */}
<section className="testimonials container py-5">
  <h2 className="text-center mb-4">What Our Guests Say</h2>
  
  {/* Testimonial Carousel */}
  <div className="carousel slide" data-ride="carousel" id="testimonialCarousel">
    
    {/* Carousel Inner */}
    <div className="carousel-inner">
      
      {/* Testimonial 1 */}
      <div className="carousel-item active">
        <div className="card mx-auto" style={{ maxWidth: '800px' }}>
          <div className="card-body">
            <blockquote className="blockquote">
              <p>"We had an incredible stay at this hotel! The rooms were impeccably clean, the staff was friendly and attentive, and the amenities were top-notch. We especially loved the indoor pool and spa area. Highly recommended!"</p>
              <footer className="blockquote-footer">John D., <cite>New York</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="carousel-item">
        <div className="card mx-auto" style={{ maxWidth: '800px' }}>
          <div className="card-body">
            <blockquote className="blockquote">
              <p>"This hotel exceeded our expectations in every way. The location was perfect for exploring the city, and the on-site restaurant served delicious meals. We can't wait to come back!"</p>
              <footer className="blockquote-footer">Sarah M., <cite>Los Angeles</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="carousel-item">
        <div className="card mx-auto" style={{ maxWidth: '800px' }}>
          <div className="card-body">
            <blockquote className="blockquote">
              <p> "Our family had a wonderful time at this hotel. The kids loved the outdoor pool area, and we appreciated the spacious family suites. The staff went above and beyond to make our stay comfortable and memorable."</p>
              <footer className="blockquote-footer">Mike and Amy S., <cite>Chicago</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>

    </div>

    {/* Carousel Controls */}
    <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>

  </div>
</section>

      {/* Call to Action */}
      <section className="cta text-center py-5 bg-blue">
        <h3>Ready to Book?</h3>
        <Link className="btn btn-secondary btn-lg" to="/room">Browse All Rooms</Link>
      </section>
    </div>
  );
};

export default Home;
