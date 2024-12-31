import React, { useState } from 'react';  
import ReactECharts from "echarts-for-react";  
import './Dashboard.css';  
import Pagination from './Pagination';


const Dashboard = () => {  
  const data3 = Array.from({ length: 15 }, (_, index) => `Item ${index + 1}`);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // Number of items per page
  const totalPages = Math.ceil(data3.length / itemsPerPage);

  // Get items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data3.slice(startIndex, startIndex + itemsPerPage);
  const [timePeriod, setTimePeriod] = useState("Last 7 days");
  const [timePeriod1, setTimePeriod1] = useState("Last 30 days");
  const [timePeriod2, setTimePeriod2] = useState("Last Month");
  const handleTimePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimePeriod(event.target.value);
  };
  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getChartData = () => {
    switch (timePeriod) {
      case "Last 7 days":
        return [2500, 6500, 3500, 7500, 5000, 10000, 4000];
      case "Last 30 days":
        return Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000));
      case "Last Month":
        return Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000));
      default:
        return [];
    }
  };

  const option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#fff',
      borderColor: '#ddd',
      borderWidth: 1,
      padding: 10,
      textStyle: {
        color: '#333',
      },
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#00C0DA',
          width: 2,
          type: 'solid'
        },
        label: {
          show: false,
        },
      },
      formatter: '{b}<br/>{a}: {c}',
    },
    grid: {
      left: '1%',
      right: '3%',
      bottom: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: timePeriod === "Last 7 days" 
        ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        : Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      axisLabel: {
        color: '#8a8a8a',
      },
      axisLine: {
        lineStyle: {
          color: '#f0f0f0',
         
        },
      },
      axisTick: {
        show: true,
      },
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 10000,
      interval: 2000,
      axisLabel: {
        color: '#8a8a8a',
        formatter: (value: number) => `${value / 1000}k`,
      },
      axisLine: {
        lineStyle: {
          color: '#f0f0f0',
       
        },
      },
      splitLine: {
        show: true,
      },
    },
    series: [
      {
        name: 'Engagement',
        type: 'line',
        data: getChartData(),
        color: '#4ac2f1',
        lineStyle: {
          width: 3,
        
        },
        areaStyle: {
          color: 'rgba(74, 194, 241, 0.3)',
        },
        smooth: true,
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: {
          color: '#4ac2f1',
          borderColor: '#fff',
          borderWidth: 2,
        },
        emphasis: {
          focus: 'series',
          itemStyle: {
            color: '#00C0DA',
            borderColor: '#fff',
            borderWidth: 3,
          },
        },
      },
    ],
  };
  
  
  

  const options = {
    series: [
      {
        type: "pie",
        radius: ["77%", "90%"], // Doughnut thickness
        startAngle: 200, // Start from left (180 degrees)
        endAngle: 340, // End at right (360 degrees)
        data: [
          { value: 750, name: "Green", itemStyle: { color: "#99db74", borderRadius: "50%" } },
          { value: 10, name: "", itemStyle: { color: "transparent" } }, // Empty space
          { value: 900, name: "Purple", itemStyle: { color: "#b18fcf", borderRadius: "50%" } },
          { value: 10, name: "", itemStyle: { color: "transparent" } }, // Empty space
          { value: 1600, name: "Red", itemStyle: { color: "#d98b9d", borderRadius: "50%" } },
          { value: 10, name: "", itemStyle: { color: "transparent" } }, // Empty space
        ],
        labelLine: {
          show: false, // Hide labels and lines
        },
        label: {
          show: false, // Hide labels inside the chart
        },
      },
    ],
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}", // Show name and value in tooltip
    },
    legend: {
      show: false, // Hide legend
    },
  };
  
  const data = [  
    100, 220, 150, 100, 180, 120,   
    130, 120, 220, 110, 140, 230,   
    250, 120, 200, 110, 250, 260  
];  

const data1 = [  
  100, 320, 350, 700, 480, 120,   
  530, 420, 320, 610, 440, 630,   
  250, 620, 200, 410, 150, 860  
];  

  const option1 = {  
    tooltip: {  
        show: false, // Hide tooltip  
    },  
    xAxis: {  
        show: false, // Hide X-Axis  
        type: 'category',  
    },  
    yAxis: {  
        show: false, // Hide Y-Axis  
        type: 'value',  
    },  
    series: [  
        {  
            type: 'line',  
            smooth: false, // No smooth for jagged look  
            data: data,  
            lineStyle: {  
              color: '#ED2259', // Light version of #ED2259
              width: 2, // Line width  
            },  
            areaStyle: {  
                color: 'rgba(255, 76, 76, 0.3)', // Light area color  
            },  
            symbol: 'none', 
        },  
    ],  
    grid: {  
        left: '0%',  
        right: '0%',  
        top: '0%',  
        bottom: '0%',  
        containLabel: true,  
    },  
};  


const option2 = {  
  tooltip: {  
      show: false, // Hide tooltip  
  },  
  xAxis: {  
      show: false, // Hide X-Axis  
      type: 'category',  
  },  
  yAxis: {  
      show: false, // Hide Y-Axis  
      type: 'value',  
  },  
  series: [  
      {  
          type: 'line',  
          smooth: false, // No smooth for jagged look  
          data: data,  
          lineStyle: {  
            color: '#ED2259', // Light version of #ED2259
            width: 2, // Line width  
          },  
          areaStyle: {  
              color: 'rgba(255, 76, 76, 0.3)', // Light area color  
          },  
          symbol: 'none', 
      },  
  ],  
  grid: {  
      left: '0%',  
      right: '0%',  
      top: '0%',  
      bottom: '0%',  
      containLabel: true,  
  },  
};  

const option3 = {  
  tooltip: {  
      show: false, // Hide tooltip  
  },  
  xAxis: {  
      show: false, // Hide X-Axis  
      type: 'category',  
  },  
  yAxis: {  
      show: false, // Hide Y-Axis  
      type: 'value',  
  },  
  series: [  
      {  
          type: 'line',  
          smooth: false, // No smooth for jagged look  
          data: data1,  
          lineStyle: {  
            color: '#00A288', // Light version of #ED2259
            width: 2, // Line width  
          },  
          areaStyle: {  
            color: 'rgba(0, 162, 136, 0.3)', // Light green area color
        }, 
          symbol: 'none', 
      },  
  ],  
  grid: {  
      left: '0%',  
      right: '0%',  
      top: '0%',  
      bottom: '0%',  
      containLabel: true,  
  },  
};  

  return (  
    <>  
      <header className="header">  
        <div className="header_logo">  
          <img   
            src="./assets/vector.svg"   
            alt="User Avatar"   
            className="header_avatar"   
          />  
          <h1 className="header_title">Story World</h1>  
        </div>  
        <div className="header_actions">  
          <img   
            src="./assets/Notifications.svg"   
            alt="Notifications"   
            className="header_icon"   
          />  
           <h2 className="icon_titles">Notifications</h2>  
          <img   
            src="./assets/Settings.svg"   
            alt="Settings"   
            className="header_icons"   
          />  
          <h2 className="icon_title">Settings</h2>  
        </div>  
      </header> 
      <div className="dashboard-heading">  
        <h1>Dashboard</h1>  
      </div>  
      <div className="dashboard-title">  
        <h2>User Engagement Over Time</h2>  
      </div>  
      <div className="dropdowns">  
          <select className="dropdown" >  
            <option>Read</option>  
            <option>Write</option>  
            <option>Share</option>  
          </select>  
          <select className="dropdown" onChange={handleTimePeriodChange}>  
            <option>Last 7 days</option>  
            <option>Last 30 days</option>  
            <option>Last Month</option>  
          </select>  
        </div>  
    
      <div className="engagement-metrics">  
        <div className="metric1">  
          <h3>Reading</h3>  
          <p className='metric-paragraph'>1231.10 <span className="percent">+25%</span></p>  
        </div>  
        <div className="metric2">  
          <h3>Listing</h3>  
          <p className='metric-paragraph'>1912 <span className="percent">+32%</span></p>  
        </div>  
        <div className="metric3">  
          <h3>Share</h3>  
          <p className='metric-paragraph'>120 <span className="percent">+13%</span></p>  
        </div>  
      </div>  
      <div className="chart-container" style={{ width: '98%', height: '700px', backgroundColor: 'white', borderRadius: '10px' }}>  
        <ReactECharts option={option} />  
      </div>  
      <div className="week-item1">  
          <span className="dot blue-dot"></span>  
          <span>This Week: 1,234</span>  
      </div>
      <div className="week-item2">  
          <span className="dot teal-dot"></span>  
          <span>Last Week: 7,654</span>  
        </div> 

 
    <div className="metrics-container">  
      <h2 className='key-title'>Key Metrics</h2>  
      <div className="metrics">  
        <div className="metric-card">  
          <div className="metric-title">Downloads (Android)</div>  
          <div className="metric-value">120K</div>  
          <div className="metric-change green">+85%</div>  
        </div>  
        <div className="metric-card">  
          <div className="metric-title">Downloads (iOS)</div>  
          <div className="metric-value">95K</div>  
          <div className="metric-change red">-3%</div>  
        </div>  
        <div className="metric-card">  
          <div className="metric-title">Firebase Cost</div>  
          <div className="metric-value">$1,200</div>  
          <div className="metric-change green">+2%</div>  
        </div>  
        <div className="metric-card">  
          <div className="metric-title">EAS Cost</div>  
          <div className="metric-value">$900</div>  
          <div className="metric-change green">+1%</div>  
        </div>  
      </div>  
    </div>  
     <div className="half-doughnut-container">
          <h3 className="top-title">Top Genres</h3>
          <div className="chart-wrapper" style={{ width: "100%", height: "400px" }}>
            <ReactECharts option={options} />
          </div>
          <div className="chart-text">
        <p className="chart-description">All genres</p>
        <h2 className="chart-number">156K</h2>
        <p className="chart-percentage">↑ 8%</p>
      </div>
      <div className="genre-list">  
      <div className="genre-item">  
        <div className="genre-color" style={{ backgroundColor: '#BF6D83' }}></div>  
        <span className="genre-name">Adventure</span>  
      </div>  
      <div className="genre-item">  
        <div className="genre-color" style={{ backgroundColor: '#BF6D83' }}></div>  
        <span className="genre-name">Fantasy</span>  
      </div>  
      <div className="genre-item">  
        <div className="genre-color" style={{ backgroundColor: '#86BB68' }}></div>  
        <span className="genre-name">Science Fiction</span>  
      </div>  
      <div className="genre-item">  
        <div className="genre-color" style={{ backgroundColor: '#B8B8B8' }}></div>  
        <span className="genre-name">Mystery</span>  
      </div>  
      <div className="genre-item">  
        <div className="genre-color" style={{ backgroundColor: '#B8B8B8' }}></div>  
        <span className="genre-name">Comedy</span>  
      </div>  
    </div>  
        </div>
        <div className="dashboard">  
            <h2 className="title">User Engagement</h2>  
            <p className="subtitle">User downloads and ratings info</p>  
            <div className="time-range">  
                <span className="active">7 Days</span>  
                <span>1 Month</span>  
                <span>3 Months</span>  
            </div>  
            <div className="table-container">  
      <table className="info-table">  
        <thead>  
          <tr>  
            <th>Details</th>  
            <th >Information</th>  
            <h2 className='progress'>Progress</h2>  
          </tr>  
        </thead>  
        <tbody>  
          <tr>  
            <td className="detail">  
            <img className="icon" src="./assets/Group 4.svg">  
              </img>  
              Rating 
               
            </td>  
            <td>  
              <span className='value'>234,566 </span> 
              <span className="date">23 January 2022</span> <br></br>
              <div className="chart-container1" style={{ width: '40%', height: '40px', backgroundColor: 'white', borderRadius: '10px' }}>  
            <ReactECharts option={option1} style={{ width: '100%', height: '100%' }} />  
        </div> 
        <div className="progress-indicator1" style={{ display: 'flex', alignItems: 'center', marginTop: '-50px' }}>  
            <div style={{ backgroundColor: '#ED2259', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>  
              55%  
            </div>  
            <img className="arrow-icon" src="./assets/arrow.svg">  
              
            </img>  
          </div> 
       
            </td>  
          </tr>  
          <tr>  
            <td className="detail">  
              <img className="icon" src="./assets/Group 5.svg">  
                
              </img>  
              Downloads  
            </td>  
            <td>  
            <span className='value'>4,566</span>   
              <span className="date1">23 January 2022</span> <br></br>
              <div className="chart-container3" style={{ width: '40%', height: '40px', backgroundColor: 'white', borderRadius: '10px' }}>  
            <ReactECharts option={option3} style={{ width: '100%', height: '100%' }} />  
        </div> <br></br>
        <div className="progress-indicator2" style={{ display: 'flex', alignItems: 'center', marginTop: '-60px' }}>  
            <div style={{ backgroundColor: '#00BFAE', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>  
              55%  
            </div>  
            <img className="arrow-icon" src="./assets/arrow (1).svg">  
              
              </img>   
          </div>  
            </td>  
          </tr>  
          <tr>  
            <td className="detail">  
            <img className="icon" src="./assets/Group 6.svg">  
                
              </img>  
             <span> Firebase Costs </span> 
            </td>  
            <td>  
            <span className='value'> $150 </span>
              <span className="date2">23 January 2022</span> <br></br>
              <div className="chart-container2" style={{ width: '40%', height: '40px', backgroundColor: 'white', borderRadius: '10px' }}>  
            <ReactECharts option={option2} style={{ width: '100%', height: '100%' }} />  
        </div> 
        <div className="progress-indicator3" style={{ display: 'flex', alignItems: 'center', marginTop: '-50px' }}>  
            <div style={{ backgroundColor: ' #ED2259', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>  
              55%  
            </div>  
            <img className="arrow-icon" src="./assets/arrow.svg">  
              
              </img>  
          </div> 
            </td>  
          </tr>  
        </tbody>  
      </table>  
    </div>  
  

      {/* Pagination Component */}
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
  

        </div>  
       
    

    </>  
  );  
};  

export default Dashboard;