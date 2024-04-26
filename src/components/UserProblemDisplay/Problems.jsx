import React, { useEffect, useState } from "react";
import "./Problems.css";
import Location from "../../img/location.svg";
import Services from "../../img/service.svg";
import UserProfile from "../../img/userProfile.svg";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function Problems() {
  const [pendingProblems, setPendingProblems] = useState([]);
  const [cookies, setCookie] = useCookies(["ProblemHeading"]);

  useEffect(() => {
    fetchPendingProblems();
  }, []);

  const fetchPendingProblems = async () => {
    try {
      const response = await fetch("http://localhost:3001/getPendingProblems");
      if (response.ok) {
        const data = await response.json();
        setPendingProblems(data);
      } else {
        console.error("Failed to fetch pending problems");
      }
    } catch (error) {
      console.error("Error fetching pending problems:", error);
    }
  };

  const handleClick = (heading) => {
    // Set the cookie with the problem heading
    setCookie("ProblemHeading", heading);
  };

  return (
    <div>
      <div className="PendingProblems">
        <div className="Problems">
          <div className="PendingProblemHeading">
            <h1>Pending Problems :</h1>
          </div>
          <div className="ProblemContainers">
            {pendingProblems.map((problem, index) => (
              <Link
                to={{
                  pathname: "/problemdescription",
                }}
                className="problem-container"
                style={{ textDecoration: "none", color: "black" }}
                key={index}
              >
                <div key={index}>
                  <div style={{ lineHeight: "0.8" }}>
                    <div className="Pending">
                      <h2>{problem.ProblemHeading}</h2>
                    </div>
                    {/* <div className="problemDescription">
                    <p>{problem.description}</p>
                    </div> */}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <div className="problemLocation">
                      <div>
                        <img
                          src={Location}
                          alt="Location"
                          style={{ height: "23px", width: "23px" }}
                        />
                      </div>
                      <div>{problem.area}</div>
                    </div>
                    <div className="problemServices">
                      <div>
                        <img
                          src={Services}
                          alt="Location"
                          style={{ height: "23px", width: "23px" }}
                        />
                      </div>
                      <div>{problem.service}</div>
                    </div>
                  </div>
                  <div className="user-info">
                    <div className="UserInfo">
                      <div>
                        <img
                          src={UserProfile}
                          alt="Location"
                          style={{ height: "23px", width: "23px" }}
                        />
                      </div>
                      <div style={{ fontSize: "24px" }}>{problem.user}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="Problems">
          <div className="PendingProblemHeading">
            <h1>Ongoing Problems :</h1>
          </div>
          <div className="ProblemContainers">
            {pendingProblems.map((problem, index) => (
              <Link
                to={{
                  pathname: "/problemdescription",
                }}
                className="problem-container"
                style={{ textDecoration: "none", color: "black" }}
                key={index}
                onClick={() => handleClick(problem.ProblemHeading)} // Pass the problem heading to the handleClick function
              >
                <div key={index}>
                  <div style={{ lineHeight: "0.8" }}>
                    <div className="Pending">
                      <h2>{problem.ProblemHeading}</h2>
                    </div>
                    {/* <div className="problemDescription">
                    <p>{problem.description}</p>
                    </div> */}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <div className="problemLocation">
                      <div>
                        <img
                          src={Location}
                          alt="Location"
                          style={{ height: "23px", width: "23px" }}
                        />
                      </div>
                      <div>{problem.area}</div>
                    </div>
                    <div className="problemServices">
                      <div>
                        <img
                          src={Services}
                          alt="Location"
                          style={{ height: "23px", width: "23px" }}
                        />
                      </div>
                      <div>{problem.service}</div>
                    </div>
                  </div>
                  <div className="user-info">
                    <div className="UserInfo">
                      <div>
                        <img
                          src={UserProfile}
                          alt="Location"
                          style={{ height: "23px", width: "23px" }}
                        />
                      </div>
                      <div style={{ fontSize: "24px" }}>{problem.user}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="Problems">
          <div className="PendingProblemHeading">
            <h1>Resolved Problems :</h1>
          </div>
          <div className="ProblemContainers">
            {pendingProblems.map((problem, index) => (
              <Link
                to={{
                  pathname: "/problemdescription",
                }}
                className="problem-container"
                style={{ textDecoration: "none", color: "black" }}
                key={index}
                onClick={() => handleClick(problem.ProblemHeading)} // Pass the problem heading to the handleClick function
              >
                <div key={index}>
                  <div style={{ lineHeight: "0.8" }}>
                    <div className="Pending">
                      <h2>{problem.ProblemHeading}</h2>
                    </div>
                    {/* <div className="problemDescription">
                    <p>{problem.description}</p>
                    </div> */}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <div className="problemLocation">
                      <div>
                        <img
                          src={Location}
                          alt="Location"
                          style={{ height: "23px", width: "23px" }}
                        />
                      </div>
                      <div>{problem.area}</div>
                    </div>
                    <div className="problemServices">
                      <div>
                        <img
                          src={Services}
                          alt="Location"
                          style={{ height: "23px", width: "23px" }}
                        />
                      </div>
                      <div>{problem.service}</div>
                    </div>
                  </div>
                  <div className="user-info">
                    <div className="UserInfo">
                      <div>
                        <img
                          src={UserProfile}
                          alt="Location"
                          style={{ height: "23px", width: "23px" }}
                        />
                      </div>
                      <div style={{ fontSize: "24px" }}>{problem.user}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Problems;
