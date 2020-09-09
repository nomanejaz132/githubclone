import React from 'react'
import Data from './Data';

function BoxData() {
  const bData = [{first: "Datastore", middle: "Added datstore example", last: "5 days ago", icon:"folder"}, {first: "Events", middle: "Exapmles are updated.", last: "last month", icon:"folder"}, {first: "Hello World", middle: "Added slack app example", last: "last month", icon:"folder"}, {first: "Internet Switch", middle: "Updated all examples as per latest sdk", last: "3 months ago", icon:"folder"}, {first: "Slack App", middle: "Added slack app example", last: "last mmonth", icon:"folder"}, {first: ".DS_Store", middle: "Added datstore example", last: "5 days ago", icon:"file"}, {first: "LICENSE", middle: "Initial commit", last: "4 months ago", icon:"file"}, {first: "README.md", middle: "Initial commit", last: "4 months ago", icon:"file"}];

    return (
        <div>
        {
            bData.map(data => <Data ft={data.first} mt={data.middle} lt={data.last} icon={data.icon} />)
          }
        </div>
    )
}


export default BoxData