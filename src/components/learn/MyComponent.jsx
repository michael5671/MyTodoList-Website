//component = html + css + js
//fragment
//JSX: 1 parent

import './style.css';

const MyComponent = () => {
  // const giaphu = "phu 1"; //string
  // const giaphu = 25;
  // const giaphu = true;
  // const giaphu = undefined;
  // const giaphu = null;

  const giaphu = [1, 2, 3]
  // const giaphu = {
  //   name : "giaphu",
  //   age: 25
  // }


  return (
    <>
        <div className="">{JSON.stringify(giaphu)} & Gia phu nek update</div> 
        <div>{console.log("gia phu")}</div>
        <div className="child" 
            style={
              {borderRadius: "10px"}
            }
        >Child</div>
    </>
  );
}

export default MyComponent;