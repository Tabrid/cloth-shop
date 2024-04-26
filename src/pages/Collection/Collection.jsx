import { useState } from "react";


function Collection() {
  const [num, setNum] = useState(null);
  const data = ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7', 'Data 8', 'Data 9'];
  const [tabData , setTabData] = useState({});
  // Create an array to group data items into sets of 3
  const groupedData = [];
  for (let i = 0; i < data.length; i++) {
    const groupNumber = Math.floor(i / 3) + 1; // Calculate the group number
    const dataWithSerial = {
      data: data[i],
      serial: groupNumber
    }; // Add serial number to data item
    groupedData.push(dataWithSerial);
  }

  console.log(groupedData);
  const groupedData2 = [];
  for (let i = 0; i < groupedData.length; i += 3) {
    groupedData2.push(groupedData.slice(i, i + 3));
  }

  console.log(groupedData2);
  const [show, setShow] = useState(false);

  return (
    <div>
      {
        groupedData2.length > 0 && groupedData2.map((group, index) => (
          <div key={index} className="grid grid-cols-3">
            {
              group.map((item, index) => (
                <div onClick={() => { setShow(true), setNum(item.serial) , setTabData(item) }} className="w-full bg-blue-600 gap-5 cursor-pointer" key={index}>{item.data}</div>
              ))
            }
            
            {
              show && index + 1 === num ? <div className="grid grid-cols-subgrid gap-4 col-span-3 bg-red-950">
              <div className="col-start-2 cursor-pointer" onClick={()=>setShow(false)}>fuck you {tabData.data} </div>
            </div> : null
            }
          </div>
        ))
      }

    </div>

  );
}





export default Collection;
