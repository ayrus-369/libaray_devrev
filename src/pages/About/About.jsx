import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to the Library Management System, your gateway to a world of knowledge and discovery. Our library is committed to providing exceptional resources and services to support your academic and research needs.

At our library, we strive to create an environment that fosters learning, collaboration, and innovation. With a diverse collection of books, journals, multimedia materials, and digital resources, we aim to empower our users to explore new ideas, expand their horizons, and achieve their educational goals.

Our dedicated team of librarians and staff are here to assist you in navigating our vast collection, accessing online resources, and answering any questions you may have. Whether you're a student, faculty member, or staff, we are committed to providing personalized support to help you succeed.

Through our user-friendly library management system, you can easily search for resources, check availability, and manage your borrowing. Our goal is to streamline the library experience, making it convenient and efficient for you to access the information you need.

We regularly update our collection and stay current with emerging trends in academia to ensure that we meet the evolving needs of our users. We value your feedback and suggestions, so please don't hesitate to reach out to us with any ideas or recommendations for improving our services.

Thank you for choosing our library as your academic partner. We are excited to embark on this knowledge journey with you and look forward to helping you achieve your academic goals.

Happy exploring!
</p>
                   </div>
        </div>
      </div>
    </section>
  )
}

export default About
