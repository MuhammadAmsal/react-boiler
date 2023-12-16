import './loader.css'
export function Loader(props) {
  return (
    <div>
      <div className='overlay' ></div>
      <div style={{    
    backgroundColor:"#f0f2f5",
    position:"absolute",
    width:170,
    textAlign:"center",
    height:130,
    marginLeft:340,
    marginTop:110,

    }} >
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div  style={{marginTop:35, }} >Loading</div>
      </div>
      
    </div>
  );
}
