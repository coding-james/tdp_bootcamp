function AboutMe() {

    const details = {
      address1: "Aperture Science Laboratories",
      name: "GLaDOS",
      state: "Michigan",
      country: "United States"
    }
  
    return (
      
          <div>
            <h2>{details.name}</h2>
            <h4>{details.address1}</h4>
            <h4>{details.state}</h4>
            <h4>{details.country}</h4>
          </div>
    )
  }
  
  export default AboutMe;