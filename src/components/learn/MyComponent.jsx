//component = html + css + js
//fragment
//JSX: 1 parent

import './style.css';

const MyComponent = () => {
  return (
    <>
        <div className="">Gia phu nek update</div> 
        <div className="child" 
            style={{borderRadius: "10px"}}
        >Child</div>
    </>
  );
}

export default MyComponent;