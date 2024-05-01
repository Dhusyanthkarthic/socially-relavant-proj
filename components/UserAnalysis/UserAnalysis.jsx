import React from "react";
import { useState, useEffect } from "react";
import Header from "../UserHeader/Userheader";
import ReactApexChart from "react-apexcharts";
import { Cookies } from "react-cookie";
import axios from "axios";
import Footer from "../Footer/Footer";

function AboutUs() {
    const [service, setService] = useState([]);
    const [analysisType, setAnalysisType] = useState("Overall");

    const [state2, setState2] = useState({
        series: [{
          data: [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              borderRadiusApplication: 'end',
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: [],
          }
        }
      });

    const [state3, setState3] = useState({
        series: [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Solved', 'UnSolved'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
      });
    
    
      const [state4, setState4] = useState({
        series: [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1,Math.floor(Math.random() * 100) + 1],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Not Allocated', 'On Going', 'Completed'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
      });
    
      useEffect(() => {
        HostServices();
      }, []);
    
      useEffect(() => {
        setState2(prevState => ({
          ...prevState,
          options: {
            ...prevState.options,
            xaxis: {
              ...prevState.options.xaxis,
              categories: service.slice(0, 6), // Use first 6 elements of service array
            }
          }
        }));
      }, [service]);
    
      const HostServices = async () => {
        try {
          const cookie = new Cookies();
          const NGOName = cookie.get("NGOName");
          const response = await axios.get("http://localhost:3001/getServices", {
            params: { NGOName }
          });
          if (response.data.success) {
            setService(response.data.services);
            console.log(response.data.services);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      const handleDistrictChange = async (event) => {
        try {
          setState3({
            series: [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1],
            options: state3.options
          });
          setState4({
            series: [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1,Math.floor(Math.random() * 100) + 1],
            options: state4.options
          });
        }catch(err){
            console.log(err);
        }
      };
    
      const handleAnalysisTypeChange = (type) => {
        setAnalysisType(type);
      };
  return (
    <div>
      <div><Header /></div>
      <div>
        <div style={{display : "block", marginTop :"3%", margin : "3% auto 0 auto"}}>
          <div style={{display : "flex", gap : "30px", flexwrap : "wrap", justifyContent : "center", alignItems : "center"}}>
            <div className="HostAnalysis">
              <div><h1>Overall Analysis</h1></div>
              <div style={{display : "flex", gap : "10%", justifyContent : "center", alignItems : "center", flexWrap : "wrap"}}>
                <ReactApexChart options={state3.options} series={state3.series} type="pie" width={380} />
                <ReactApexChart options={state4.options} series={state4.series} type="pie" width={380} />
                <div style={{marginBottom : "20px"}}>
                  <select name="Area" id="Area6" style={{width : "100%", padding : "10px 10px 10px 10px", borderRadius : "10px", backgroundColor : "trans" }} onChange={handleDistrictChange}>
                    <option value="Ariyalur">Ariyalur</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Cuddalore">Cuddalore</option>
                    <option value="Dharmapuri">Dharmapuri</option>
                    <option value="Dindigul">Dindigul</option>
                    <option value="Erode">Erode</option>
                    <option value="Kallakurichi">Kallakurichi</option>
                    <option value="Kancheepuram">Kancheepuram</option>
                    <option value="Kanyakumari">Kanyakumari</option>
                    <option value="Karur">Karur</option>
                    <option value="Krishnagiri">Krishnagiri</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Nagapattinam">Nagapattinam</option>
                    <option value="Namakkal">Namakkal</option>
                    <option value="Nilgiris">Nilgiris</option>
                    <option value="Perambalur">Perambalur</option>
                    <option value="Pudukkottai">Pudukkottai</option>
                    <option value="Ramanathapuram">Ramanathapuram</option>
                    <option value="Ranipet">Ranipet</option>
                    <option value="Salem">Salem</option>
                    <option value="Sivaganga">Sivaganga</option>
                    <option value="Tenkasi">Tenkasi</option>
                    <option value="Thanjavur">Thanjavur</option>
                    <option value="Theni">Theni</option>
                    <option value="Thoothukudi">Thoothukudi (Tuticorin)</option>
                    <option value="Tiruchirappalli">Tiruchirappalli (Trichy)</option>
                    <option value="Tirunelveli">Tirunelveli</option>
                    <option value="Tirupathur">Tirupathur</option>
                    <option value="Tiruppur">Tiruppur</option>
                    <option value="Tiruvallur">Tiruvallur</option>
                    <option value="Tiruvannamalai">Tiruvannamalai</option>
                    <option value="Tiruvarur">Tiruvarur</option>
                    <option value="Vellore">Vellore</option>
                    <option value="Viluppuram">Viluppuram</option>
                    <option value="Virudhunagar">Virudhunagar</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="container">
              <ul class="responsive-table">
                <li class="table-header">
                  <div class="col col-1">S.No</div>
                  <div class="col col-2">Service</div>
                  <div class="col col-3">Percentage</div>
                </li>
                <li class="table-row">
                    <div class="col col-1" data-label="Job Id">1</div>
                    <div class="col col-2" data-label="Customer Name">Humanitarian</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 100) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">2</div>
                    <div class="col col-2" data-label="Customer Name">Healthcare</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 100) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">3</div>
                    <div class="col col-2" data-label="Customer Name">Education</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 100) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">4</div>
                    <div class="col col-2" data-label="Customer Name">Environmental</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 100) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">5</div>
                    <div class="col col-2" data-label="Customer Name">Community</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 100) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">6</div>
                    <div class="col col-2" data-label="Customer Name">Human Rights</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 100) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">7</div>
                    <div class="col col-2" data-label="Customer Name">Empowerment Programs</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 100) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">8</div>
                    <div class="col col-2" data-label="Customer Name">Disaster Preparedness </div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 100) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">9</div>
                    <div class="col col-2" data-label="Customer Name">Research and Policy Advocacy</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 100) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">10</div>
                    <div class="col col-2" data-label="Customer Name">Crisis Intervention</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 100) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">11</div>
                    <div class="col col-2" data-label="Customer Name">Awareness Campaigns </div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 100) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">12</div>
                    <div class="col col-2" data-label="Customer Name">Conflict Resolution</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 100) + 1}</div>
                    
                    </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div><Footer /></div>
    </div>
  );
}

export default AboutUs;
