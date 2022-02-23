import React from 'react'




export default function About(props) {
  let mystyle = {
    backgroundColor: props.mode === 'light' ? 'white' : '#285c44',
    color: props.mode === 'light' ? 'black' : 'white'
  }
  return (
    <div className='container' >
      <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>About TextUtils</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={mystyle}>Free software utility which allows you to find the most frequent phrases and frequencies of words. Non-English language texts are supported. It also counts number of words, characters, sentences and syllables. Also calculates lexical density.</div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={mystyle}> TextUtils is a project to provide as many online computer utilities (tools) to all users around the world as possible. The use of utilities is and will be free of charge. These utilities can be considered as accessories to Online Operating Systems (such as Chrome OS).</div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={mystyle}> Browser compatibility is the capability or flexibility of a website, web application, script or HTML design to function on different web browsers available in the market.The benefit of creating a website with browser computability is that it improves a website's reach and cuts down on loss in performance. Browser compatibility also can be described as the potential of a web browser to efficiently display the HTML code and carry out the scripts on web pages.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
