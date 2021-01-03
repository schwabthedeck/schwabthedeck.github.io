import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/JaneSchwabResume.pdf"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <p>Hi, I'm Jane, a web and SharePoint developer.</p>
    <p>I have a passion for user-centered solutions and specialize in listening to customer pain points and trying to create solutions that address them. Sometimes the simplest solution is the best one.</p>
    <p>My education is in mechanical engineering and has resulted in me being a proactive problem-solver and seeking the most efficient solution for my clients. It also means I'm a bit of a math nerd.</p>

    <h2>Skills</h2>
    <Row className="mx-2">
      <Col className="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100px" height="100px"><circle cx="78" cy="14" r="1" fill="#f1bc19" /><circle cx="50" cy="50" r="38" fill="#f9dbd2" /><circle cx="84" cy="16" r="4" fill="#f1bc19" /><circle cx="14" cy="26" r="2" fill="#ee3e54" /><circle cx="78" cy="77" r="2" fill="#fbcd59" /><circle cx="17" cy="78" r="4" fill="#fbcd59" /><circle cx="24" cy="83" r="2" fill="#ee3e54" /><circle cx="66.5" cy="78.5" r="2.5" fill="#fff" /><circle cx="16" cy="48" r="1" fill="#fff" /><circle cx="86" cy="31" r="1" fill="#f1bc19" /><circle cx="80" cy="66" r="2" fill="#fff" /><path fill="#77cbd2" d="M50,63c-16,0-28-5.6-28-13s12-13,28-13c16,0,28,5.6,28,13S66,63,50,63z M50,40.9c-14.3,0-24.3,4.8-24.3,9.1 s10,9.1,24.3,9.1s24.3-4.8,24.3-9.1S64.3,40.9,50,40.9z" /><path fill="#472b29" d="M50,63.7c-16.4,0-28.7-5.9-28.7-13.7S33.6,36.3,50,36.3c16.4,0,28.7,5.9,28.7,13.7S66.4,63.7,50,63.7z M50,37.7C34.4,37.7,22.7,43,22.7,50S34.4,62.3,50,62.3S77.3,57,77.3,50S65.6,37.7,50,37.7z M50,59.8c-14.9,0-25-5.1-25-9.8 s10-9.8,25-9.8s25,5.1,25,9.8S64.9,59.8,50,59.8z M50,41.6c-14.6,0-23.6,4.9-23.6,8.4s9,8.4,23.6,8.4s23.6-4.9,23.6-8.4 S64.6,41.6,50,41.6z" /><path fill="#77cbd2" d="M39.5,75.2c-1.3,0-2.4-0.3-3.4-0.9c-6.1-3.6-4.8-16.7,3.1-30.6c5.5-9.7,12.9-17,18.9-18.6 c2.2-0.6,4.2-0.4,5.8,0.5c6.1,3.6,4.8,16.7-3.1,30.6c-5.5,9.7-12.9,17-18.9,18.6C41.1,75.1,40.3,75.2,39.5,75.2z M60.5,28.5 c-0.4,0-0.9,0.1-1.5,0.2c-4.9,1.3-11.6,8.1-16.6,16.8c-6.9,12.1-8,23.4-4.5,25.5c0.7,0.4,1.7,0.5,3,0.2c4.9-1.3,11.6-8.1,16.6-16.8 c6.9-12.1,8-23.4,4.5-25.5C61.6,28.7,61.1,28.5,60.5,28.5z" /><path fill="#472b29" d="M39.5,75.9c-1.4,0-2.7-0.3-3.8-1c-6.5-3.8-5.3-17.4,2.8-31.6c5.6-9.9,13.2-17.3,19.3-18.9 c2.4-0.6,4.6-0.4,6.4,0.6c6.5,3.8,5.3,17.4-2.8,31.6c-5.6,9.9-13.2,17.3-19.3,18.9C41.2,75.8,40.4,75.9,39.5,75.9z M60.5,25.5 c-0.7,0-1.5,0.1-2.2,0.3c-5.8,1.5-13,8.7-18.4,18.2c-7.6,13.3-9,26.3-3.3,29.7c1.4,0.8,3.3,1,5.3,0.5c5.8-1.5,13-8.7,18.4-18.2 c7.6-13.3,9.1-26.3,3.3-29.6C62.6,25.8,61.6,25.5,60.5,25.5z M39.5,72.2c-0.7,0-1.3-0.2-1.9-0.5c-4.4-2.5-2.4-14.9,4.2-26.5 c5.1-8.9,11.9-15.8,17-17.1c1.4-0.4,2.6-0.3,3.5,0.2c4.4,2.5,2.4,14.9-4.2,26.5c-5.1,8.9-11.9,15.8-17,17.1 C40.6,72.1,40,72.2,39.5,72.2z M60.5,29.2c-0.4,0-0.8,0.1-1.3,0.2c-4.8,1.3-11.3,7.9-16.2,16.5c-7.1,12.5-7.6,22.9-4.7,24.6 c0.6,0.3,1.4,0.4,2.4,0.1c4.8-1.3,11.3-7.9,16.2-16.5c7.1-12.5,7.6-22.9,4.7-24.6C61.3,29.3,60.9,29.2,60.5,29.2z" /><path fill="#77cbd2" d="M60.5,75.2c-0.8,0-1.6-0.1-2.4-0.3c-5.9-1.6-13.3-8.9-18.9-18.6c-7.9-13.9-9.2-27-3.1-30.6	c1.6-0.9,3.6-1.1,5.8-0.5c5.9,1.6,13.3,8.9,18.9,18.6c7.9,13.9,9.2,27,3.1,30.6C62.9,74.9,61.7,75.2,60.5,75.2z M39.5,28.5	c-0.6,0-1.1,0.1-1.5,0.4c-3.6,2.1-2.4,13.5,4.5,25.5c5,8.7,11.6,15.5,16.6,16.8c1.2,0.3,2.2,0.3,3-0.2c3.6-2.1,2.4-13.5-4.5-25.5	c-5-8.7-11.6-15.5-16.6-16.8C40.4,28.6,40,28.5,39.5,28.5z" /><path fill="#472b29" d="M60.5,75.9c-0.8,0-1.7-0.1-2.6-0.4c-6.1-1.6-13.7-9.1-19.3-18.9c-8.1-14.2-9.3-27.8-2.8-31.6	c1.8-1,4-1.3,6.4-0.6c6.1,1.6,13.7,9.1,19.3,18.9c8.1,14.2,9.3,27.8,2.8,31.6C63.1,75.6,61.9,75.9,60.5,75.9z M39.5,25.5	c-1.1,0-2.2,0.3-3.1,0.8c-5.7,3.3-4.2,16.4,3.3,29.6c5.4,9.5,12.7,16.7,18.4,18.2c2,0.5,3.8,0.4,5.3-0.5c5.7-3.3,4.2-16.4-3.3-29.7	c-5.4-9.5-12.7-16.7-18.4-18.2C41,25.6,40.2,25.5,39.5,25.5z M60.5,72.2c-0.5,0-1-0.1-1.6-0.2c-5.1-1.4-11.9-8.3-17-17.1	c-6.6-11.6-8.6-23.9-4.2-26.5c0.9-0.5,2.1-0.6,3.5-0.2c5.1,1.4,11.9,8.3,17,17.1c6.6,11.6,8.6,23.9,4.2,26.5	C61.8,72,61.2,72.2,60.5,72.2z M39.5,29.2c-0.5,0-0.9,0.1-1.2,0.3c-2.8,1.7-2.4,12.1,4.7,24.6c4.9,8.6,11.4,15.2,16.2,16.5	c1,0.3,1.9,0.2,2.4-0.1c2.8-1.7,2.4-12.1-4.7-24.6C52,37.3,45.6,30.7,40.8,29.4C40.3,29.3,39.9,29.2,39.5,29.2z" /><g><circle cx="50" cy="50" r="5.5" fill="#77cbd2" /><path fill="#472b29" d="M50,56c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S53.3,56,50,56z M50,45c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5 S52.8,45,50,45z" /></g><g><path fill="#472b29" d="M50,53.8c-0.1,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3c0.4,0,0.7-0.1,1.1-0.2c0.5-0.2,0.9-0.5,1.3-0.8 c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.3,0,0.4c-0.4,0.4-0.9,0.8-1.5,1C50.9,53.7,50.4,53.8,50,53.8z" /></g><g><path fill="#472b29" d="M53.1,51.8c0,0-0.1,0-0.1,0c-0.1-0.1-0.2-0.2-0.1-0.3c0.2-0.4,0.3-0.9,0.3-1.4c0-1.3-0.7-2.4-1.8-2.9 c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1c1.3,0.6,2.1,1.9,2.1,3.4c0,0.6-0.1,1.1-0.4,1.7C53.3,51.7,53.2,51.8,53.1,51.8z" /></g><g><path fill="#472b29" d="M48.1,47.3c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1,0-0.3,0.1-0.3c0.6-0.4,1.3-0.6,2-0.6c0.1,0,0.3,0.1,0.3,0.3 s-0.1,0.3-0.3,0.3c-0.6,0-1.2,0.2-1.8,0.5C48.2,47.3,48.2,47.3,48.1,47.3z" /></g><g><path fill="#472b29" d="M53.5,36.8c-0.1,0-0.1,0-0.2-0.1c-3.7-4.6-7.2-7.6-10.4-8.9c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1 c3.3,1.4,6.8,4.5,10.6,9.1c0.1,0.1,0.1,0.3,0,0.4C53.6,36.7,53.6,36.8,53.5,36.8z" /></g><g><path fill="#472b29" d="M36.5,27.8c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c0.3-0.2,1.9-1.3,4.8-0.7c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.2,0.2-0.3,0.2c-2.7-0.6-4.1,0.4-4.3,0.6C36.6,27.7,36.6,27.8,36.5,27.8z" /></g><g><path fill="#472b29" d="M73.3,55.5c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c2.3-1.9,3.2-4.1,2.7-6.6c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.6,2.6-0.4,5.1-2.9,7.1C73.4,55.5,73.3,55.5,73.3,55.5z" /></g><g><path fill="#472b29" d="M69,57.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.3,0.2-0.3c0,0,1.4-0.5,2.9-1.4c0.1-0.1,0.3,0,0.3,0.1 c0.1,0.1,0,0.3-0.1,0.3C70.5,57.4,69.1,57.8,69,57.9C69,57.9,69,57.9,69,57.9z" /></g><g><path fill="#472b29" d="M39.1,73.6C39.1,73.6,39.1,73.6,39.1,73.6c-2.7-0.1-4.4-2.1-5-5.7c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.6,3.4,2.1,5.2,4.5,5.3c0.1,0,0.2,0.1,0.2,0.3C39.4,73.5,39.3,73.6,39.1,73.6z" /></g><g><path fill="#472b29" d="M34.1,65.7c-0.1,0-0.2-0.1-0.3-0.2c-0.1-2.3,0.2-4.3,0.3-4.6c0-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.4,2.1-0.3,4.4C34.4,65.6,34.3,65.7,34.1,65.7C34.1,65.7,34.1,65.7,34.1,65.7z" /></g></svg>
        <h6>Languages and Framworks</h6>
        <p>JavaScript, React, Gatsby, HTML, CSS, C#, Python</p>
      </Col>
      <Col className="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100px" height="100px"><path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z" /><path fill="#e4e4f9" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z" /><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z" /><path fill="#8889b9" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z" /><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z" /><path fill="#8889b9" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z" /><path fill="#fff" d="M18.5 49A2.5 2.5 0 1 0 18.5 54 2.5 2.5 0 1 0 18.5 49zM79.5 32A1.5 1.5 0 1 0 79.5 35 1.5 1.5 0 1 0 79.5 32z" /><g><path fill="#a3a3cd" d="M50 25.625A24.25 24.25 0 1 0 50 74.125A24.25 24.25 0 1 0 50 25.625Z" /><path fill="#472b29" d="M50,74.825c-13.757,0-24.95-11.192-24.95-24.95S36.243,24.925,50,24.925s24.95,11.192,24.95,24.95 S63.757,74.825,50,74.825z M50,26.325c-12.985,0-23.55,10.564-23.55,23.55S37.015,73.425,50,73.425s23.55-10.564,23.55-23.55 S62.985,26.325,50,26.325z" /></g><g><path fill="#565fa1" d="M50 29.167A20.5 20.5 0 1 0 50 70.167A20.5 20.5 0 1 0 50 29.167Z" /></g><g><path fill="#472b29" d="M69.424,44.625c-0.214,0-0.412-0.139-0.478-0.354c-0.088-0.287-0.183-0.571-0.284-0.853 c-0.392-1.094-0.886-2.159-1.47-3.169c-0.139-0.238-0.057-0.545,0.182-0.683c0.239-0.141,0.545-0.057,0.683,0.183 c0.614,1.061,1.134,2.182,1.546,3.331c0.106,0.297,0.206,0.595,0.298,0.897c0.081,0.264-0.067,0.544-0.332,0.625 C69.521,44.618,69.472,44.625,69.424,44.625z" /></g><g><path fill="#472b29" d="M50,70.75c-11.511,0-20.875-9.337-20.875-20.813S38.489,29.125,50,29.125 c5.975,0,11.674,2.56,15.636,7.023c0.299,0.337,0.588,0.685,0.865,1.041c0.169,0.218,0.13,0.531-0.087,0.701 c-0.218,0.171-0.532,0.131-0.702-0.088c-0.264-0.339-0.54-0.669-0.824-0.99c-3.772-4.25-9.199-6.688-14.888-6.688 c-10.959,0-19.875,8.888-19.875,19.813S39.041,69.75,50,69.75s19.875-8.888,19.875-19.813c0-0.995-0.075-1.996-0.222-2.973 c-0.041-0.272,0.147-0.527,0.42-0.568c0.278-0.045,0.528,0.147,0.569,0.42c0.154,1.025,0.233,2.076,0.233,3.121 C70.875,61.413,61.511,70.75,50,70.75z" /></g><g><path fill="#fefdef" d="M61.496,42.088c0.365-1.671,0.206-3.743-0.486-5.818c-3.622,0-6.339,2.716-6.339,2.716 s0.016,0.018,0.02,0.023C54.627,39.008,54.565,39,54.5,39h-9c-0.043,0-0.085,0.006-0.128,0.006c0.003-0.004,0.017-0.02,0.017-0.02 s-2.717-2.716-6.339-2.716c-0.684,2.053-0.85,4.104-0.5,5.767C36.973,43.732,36,46,36,48.5c0,5.247,4.253,9.5,9.5,9.5h1.073 c-1.304,0.709-2.246,1.979-2.493,3.498c-1.72,0.232-3.979,0.18-5.028-1.394c-1.811-2.717-2.717-2.717-3.622-2.717 s-0.906,0.906,0,1.811c0.906,0.906,0.906,0.906,1.811,2.717c0.772,1.543,2.812,3.298,6.76,2.663v3.523 c0,0.447,0.079,0.871,0.191,1.282c2.425,0.577,6.502,1.061,11.665-0.151C55.943,68.868,56,68.493,56,68.102v-5.816 c0-1.858-1.047-3.456-2.573-4.286H54.5c5.247,0,9.5-4.253,9.5-9.5C64,46.025,63.046,43.779,61.496,42.088z" /><path fill="#472b29" d="M49.532,70.486c-2.23,0-4.075-0.287-5.457-0.616c-0.178-0.042-0.319-0.179-0.367-0.355 c-0.142-0.522-0.208-0.972-0.208-1.413V65.15c-4.563,0.514-6.279-2.154-6.707-3.011c-0.87-1.739-0.87-1.739-1.717-2.587 c-0.701-0.701-0.979-1.458-0.745-2.023c0.169-0.408,0.569-0.642,1.098-0.642c1.217,0,2.219,0.211,4.038,2.939 c0.839,1.258,2.676,1.379,4.193,1.218c0.23-0.978,0.724-1.855,1.423-2.554C39.762,58.272,35.5,53.875,35.5,48.5 c0-2.442,0.891-4.78,2.513-6.613c-0.306-1.722-0.108-3.761,0.564-5.775c0.068-0.204,0.259-0.342,0.474-0.342 c3.357,0,5.931,2.16,6.552,2.73h8.854c0.621-0.57,3.195-2.73,6.552-2.73c0.215,0,0.406,0.138,0.474,0.342 c0.679,2.037,0.872,4.096,0.551,5.83c1.591,1.826,2.465,4.146,2.465,6.559c0,5.375-4.263,9.773-9.585,9.991 c1.001,0.997,1.585,2.354,1.585,3.794v5.816c0,0.392-0.052,0.8-0.158,1.246c-0.043,0.185-0.188,0.328-0.372,0.371 C53.582,70.28,51.419,70.486,49.532,70.486z M44.602,68.965c2.412,0.537,6.153,0.9,10.83-0.148 c0.045-0.253,0.068-0.489,0.068-0.715v-5.816c0-1.597-0.886-3.07-2.312-3.846c-0.201-0.109-0.302-0.341-0.246-0.563 c0.056-0.222,0.256-0.377,0.484-0.377H54.5c4.962,0,9-4.037,9-9c0-2.247-0.843-4.404-2.373-6.074 c-0.11-0.12-0.154-0.286-0.12-0.444c0.331-1.517,0.202-3.352-0.36-5.202c-2.87,0.153-5.098,2.074-5.542,2.484 c-0.091,0.151-0.245,0.246-0.429,0.246c-0.007,0-0.096-0.006-0.103-0.006L45.5,39.5c-0.152,0-0.332-0.067-0.442-0.181l-0.021,0.021 c-0.025-0.024-2.438-2.39-5.623-2.561c-0.557,1.831-0.69,3.649-0.373,5.154c0.034,0.159-0.013,0.325-0.124,0.444 C37.358,44.052,36.5,46.227,36.5,48.5c0,4.963,4.038,9,9,9h1.073c0.229,0,0.428,0.155,0.484,0.377 c0.057,0.222-0.044,0.453-0.246,0.563c-1.205,0.654-2.021,1.799-2.238,3.139c-0.036,0.218-0.208,0.386-0.427,0.415 c-2.664,0.358-4.568-0.198-5.511-1.611c-1.663-2.494-2.412-2.494-3.206-2.494c-0.137,0-0.18,0.032-0.181,0.032 c-0.025,0.064,0.043,0.435,0.534,0.926c0.963,0.963,0.998,1.033,1.905,2.847c0.369,0.736,1.911,3.093,6.233,2.392 c0.147-0.021,0.292,0.019,0.404,0.113c0.111,0.096,0.176,0.234,0.176,0.381v3.523C44.5,68.372,44.533,68.651,44.602,68.965z" /></g><g><path fill="#fefdef" d="M60.437,51.362c-0.9,1.994-2.876,3.652-6.354,3.93" /><path fill="#472b29" d="M54.083,55.542c-0.129,0-0.238-0.1-0.249-0.23c-0.011-0.138,0.091-0.258,0.229-0.269 c3.805-0.305,5.442-2.227,6.146-3.784c0.058-0.127,0.205-0.183,0.331-0.125c0.125,0.057,0.182,0.204,0.125,0.33 c-1.073,2.377-3.403,3.824-6.562,4.077C54.097,55.542,54.09,55.542,54.083,55.542z" /></g><g><path fill="#fefdef" d="M60.959,47.41c0.111,0.753,0.109,1.552-0.03,2.342" /><path fill="#472b29" d="M60.93,50.002c-0.015,0-0.029-0.001-0.044-0.004c-0.136-0.023-0.227-0.153-0.203-0.289 c0.129-0.734,0.139-1.517,0.029-2.263c-0.021-0.136,0.074-0.264,0.21-0.283c0.137-0.02,0.264,0.073,0.284,0.211 c0.12,0.809,0.109,1.624-0.031,2.421C61.155,49.917,61.049,50.002,60.93,50.002z" /></g><g><path fill="#fefdef" d="M59.083,43.875c0.633,0.451,1.146,1.179,1.488,2.055" /><path fill="#472b29" d="M60.571,46.181c-0.1,0-0.194-0.061-0.233-0.159c-0.334-0.856-0.818-1.528-1.4-1.942 c-0.112-0.08-0.139-0.236-0.059-0.349c0.081-0.113,0.236-0.138,0.349-0.06c0.662,0.472,1.207,1.222,1.576,2.169 c0.05,0.129-0.014,0.273-0.142,0.324C60.632,46.175,60.602,46.181,60.571,46.181z" /></g></svg>
        <h6>Tools</h6>
        <p>Powershell, Git, TFS/Azure DevOps, Visual Studio</p>
      </Col>
      <Col className="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100px" height="100px"><path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z" /><path fill="#e6edb7" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z" /><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z" /><path fill="#88ae45" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z" /><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z" /><path fill="#88ae45" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z" /><path fill="#fff" d="M18.5 49A2.5 2.5 0 1 0 18.5 54 2.5 2.5 0 1 0 18.5 49zM79.5 32A1.5 1.5 0 1 0 79.5 35 1.5 1.5 0 1 0 79.5 32z" /><g><path fill="#84a7d7" d="M35,72.3c-4.025,0-7.3-3.274-7.3-7.3V35c0-4.025,3.274-7.3,7.3-7.3h30c4.025,0,7.3,3.274,7.3,7.3 v30c0,4.025-3.274,7.3-7.3,7.3H35z" /><path fill="#472b29" d="M65,28.4c3.639,0,6.6,2.961,6.6,6.6v30c0,3.639-2.961,6.6-6.6,6.6H35c-3.639,0-6.6-2.961-6.6-6.6 V35c0-3.639,2.961-6.6,6.6-6.6H65 M65,27H35c-4.4,0-8,3.6-8,8v30c0,4.4,3.6,8,8,8h30c4.4,0,8-3.6,8-8V35C73,30.6,69.4,27,65,27 L65,27z" /></g><g><path fill="#fffef4" d="M62.391,69H37.609C33.974,69,31,66.026,31,62.391V37.609C31,33.974,33.974,31,37.609,31h24.783 C66.026,31,69,33.974,69,37.609v24.783C69,66.026,66.026,69,62.391,69z" /></g><g><path fill="#472b29" d="M68.5,47.375c-0.276,0-0.5-0.224-0.5-0.5V43c0-0.276,0.224-0.5,0.5-0.5S69,42.724,69,43v3.875 C69,47.151,68.776,47.375,68.5,47.375z" /></g><g><path fill="#472b29" d="M68.5,40.5c-0.276,0-0.5-0.224-0.5-0.5v-2c0-0.276,0.224-0.5,0.5-0.5S69,37.724,69,38v2 C69,40.276,68.776,40.5,68.5,40.5z" /></g><g><path fill="#472b29" d="M64,69H36c-2.757,0-5-2.243-5-5V36c0-2.757,2.243-5,5-5h25.375c0.276,0,0.5,0.224,0.5,0.5 s-0.224,0.5-0.5,0.5H36c-2.206,0-4,1.794-4,4v28c0,2.206,1.794,4,4,4h28c2.206,0,4-1.794,4-4V49.625c0-0.276,0.224-0.5,0.5-0.5 s0.5,0.224,0.5,0.5V64C69,66.757,66.757,69,64,69z" /></g><g><path fill="#78a0cf" d="M63.379 41.5L57.968 58.5 53.477 58.5 50.391 48.649 47.149 58.5 42.67 58.5 37.621 41.5 42.222 41.5 45.164 52.485 48.748 41.5 52.247 41.5 55.586 52.485 58.786 41.5 63 41.5" /><path fill="#472b29" d="M58.334,59h-5.225l-2.729-8.716L47.511,59h-5.214l-5.346-18h5.655l2.604,9.729L48.385,41h4.233 l2.958,9.732L58.411,41H63v0.38l0.855,0.271L58.334,59z M53.844,58h3.76l5.092-16h-3.534l-3.565,12.238L51.876,42h-2.765 l-3.994,12.242L41.839,42h-3.548l4.752,16h3.745l3.615-10.985L53.844,58z" /></g></svg>
        <h6>Platforms</h6>
        <p>Microsoft SharePoint 2013, 2016, Online; Microsoft O365</p>
      </Col>
    </Row>
    <br/>
    <br/>
    <h2>
      Work Experience
      {` `}
      <Link href={Resume}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z" fill="currentColor" /><path d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z" fill="currentColor" /></svg>
      </Link>
    </h2>
    <section>
      <h3>Perkins Eastman</h3>
      <h5>June 2019 - Current</h5>
      <p>On a day to day basis, I help create and maintain the customizations in SharePoint. I've helped design and develop specific add-ins, forms, page layouts, and display templates. Maintenance also includes fixing bugs and updating previously implemented customizations. I also maintain communication with various teams to ensure all their requirements are met for their teams' sites.</p>
      <h3>Gimmal</h3>
      <h5>November 2014 - May 2019</h5>
      <p>As a Technical Consultant on the Professional Services team, my responsibilities varied from project to project. I helped develop custom code solutions for clients, primarily based in and around SharePoint technologies. We also collaborated with project manages and clients to understand needs and requirements, incorporate regular feedback, and created desired outcomes. I also assisted the support team in triage, research, and resolution of support tickets</p>
      <p>I also participated in training aspects. I helped train other consultants within Gimmal in product installation and configuration. Additionally, I trained clients on how to install and configure any custom solutions that were implemented.</p>
      <h3>University of New Haven</h3>
      <h5>June 2011 - May 2012</h5>
      <p>I conducted research on a space vehicle re-entering the atmosphere while working closely with my advisor, Dr. Maria-Isabel Carnasciali. I conducted Computational Fluid Dynamics (CFD) analysis to determine drag and lift forces of various objects ejected from a space vehicle during re-entry; parameters were used to establish flight trajectory and determine risk of collision with space vehicle. We also analyzed materials using geometry generation, set up simulations using ANSYS/Fluent, and processed and post-processed results. </p>
      <p>I also prepared and presented reports at research meetings with faculty, graduate researcher, and our industry sponsor.I presented our work at the Annual Meeting of the American Physical Society, Division of Fluid Dynamics in Baltimore, MD, November 2011. The project sponsor was Pioneer Aerospace. </p>
    </section>
    <h2>Education</h2>
    <section>
      <h3>M.S.E., Mechanical Engineering</h3>
      <h4>Johns Hopkins University</h4>
      <p>Concentration in Fluid Dynamics</p>
      <h3>B.S., Mechanical Engineering</h3>
      <h4>University of New Haven</h4>
      <p>Minor in Mathematics</p>
    </section>
  </Layout>
)

export default AboutPage
