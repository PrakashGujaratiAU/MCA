import React, {useState, useEffect} from 'react';
import './homepage.css'
import Avtar from './Avtar';
import Stat from './Stat';
import Highlight from './Highlight';
import Story from './Story';
import Post from './Post';
import logo from './logo.png'
import { AiFillHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import NavBarItem from './NavBarItem';
import { GrMultimedia } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";


function Homepage(props) {

    const [statsdata, setStatsData] = useState([
        {
            "title":"Posts",
            "numeric":"472",
            "border":true
        },
        {
            "title":"Posts",
            "numeric":"472",
            "border":true
        },
        {
            "title":"Posts",
            "numeric":"472",
            "border":false
        }
    ]);

    useEffect(() => {
        //Runs on every render
        //console.log("Jay Khunt - MCA")
        const statApidata = [
            {
                "title":"Posts",
                "numeric":"1",
                "border":true
            },
            {
                "title":"Followings",
                "numeric":"20",
                "border":true
            },
            {
                "title":"Followers",
                "numeric":"33",
                "border":false
            }
        ]
        setStatsData(statApidata)
      }, []);




    /*const statsdata = [
        {
            "title":"Posts",
            "numeric":"472",
            "border":true
        },
        {
            "title":"Posts",
            "numeric":"472",
            "border":true
        },
        {
            "title":"Posts",
            "numeric":"472",
            "border":false
        }
    ]*/

    const hobbies = [
        {
            "title":"UI Designer",
            "border":true
        },
        {
            "title":"Full Stack Developer",            
            "border":true
        },
        {
            "title":"Professor",            
            "border":false
        }
    ]

    const highlightsdata = [
        {
            "name":"Dhara",
            "image":"https://cms.atmiya.edu.in/images/Stud_Photo/15618223002.JPG"
        },
        {
            "name":"Rushita",            
            "image":"https://cms.atmiya.edu.in/images/Stud_Photo/15618223002.JPG"
        },
        {
            "name":"Risha",            
            "image":"https://cms.atmiya.edu.in/images/Stud_Photo/15618223002.JPG"
        },
        {
            "name":"Jay",            
            "image":"https://cms.atmiya.edu.in/images/Stud_Photo/15618223012.JPG"
        }
    ]

    const itemJson = [
        {
          icon: <AiFillHome />,
          text: 'Feed'
        },
        {
          icon: <CiSearch />,
          text: 'Explore'
        },
        {
          icon: <GrMultimedia />,
          text: 'Reels'
        },
        {
          icon: <IoSettingsOutline />,
          text: 'Settings'
        },
      ];

    //   function profile(){
    //     return "Meet Sanghani"
    //   }
    const profile = {
        "name" : "Meet",
        "id":"meetinstagram"
    }

  return (
    <>
    <div style={{"width":"20%","float":"left","padding":"20px", backgroundColor:"white"}}>
        <img src={logo} width="200px" />

        <div style={{"padding":"20px"}}>
            <Avtar profile={profile} />
        </div>

        <div className="flex-container">
        {
            statsdata.map(function(stat){
                return <Stat title={stat.title} numeric={stat.numeric} border={stat.border} />
            })
        }
        </div>

        <h3 style={{"padding":"0px","margin":"0px"}}>{profile.name}</h3>
        <div className="flex-container">
        {
            hobbies.map(function(stat){
                return <Stat title={stat.title} border={stat.border} />
            })
        }
        </div>
        
        <div className="flex-container">
        {
            highlightsdata.map(function(highlight){
                return <Highlight name={highlight.name} image={highlight.image} />
            })
        }
        </div>
        <div style={{"padding":"20px"}}>
            {
            itemJson.map((item, index) => (
            <NavBarItem key={index} icon={item.icon} text={item.text} />
            )
            )}
        </div>
    </div>
    <div style={{"width":"75%","float":"right"}}>
        <h1 style={{"padding":"0px","margin":"0px"}}>Story</h1>
        <div className="flex-container">
        {
            highlightsdata.map(function(highlight){
                return <Story name={highlight.name} image={highlight.image} />
            })
        }
        </div>

        <h1 style={{"padding":"0px","margin":"0px"}}>Feeds</h1>
        <div className="flex-container-post">
            <Post />
            <Post />
        </div>
    </div>
    
    </>
  );
}

export default Homepage;
