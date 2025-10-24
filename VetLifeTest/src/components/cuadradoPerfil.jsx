import "../App.css"


export default function CuadradoPerfil(){

return(
    <div>
    {/* <h1>esta es la prueba d eque si se conecta al lalista jsjjss</h1> */}

{submenu === "lista" && (

  <div className="menus-perfiles" style={{textAlign:"center",padding:"20px", backgroundColor:"#0c343d"}}>
  <h3>gmail de usuario</h3>
    <li>
      <img src="./Perfil_icono.jpg" className="menu-perfil" style={{width:"80px", height:"80px"}}/>
    </li>
    <li>
    </li>
    <div style={{display:"flex", alignItems: "center", gap:"1px"}}> 
    <div style={{width:"150px",borderRadius: "100px 10px 10px 100px", backgroundColor:"white",padding:"10px"}}>Iniciar Sesion BB</div>
    <br />
   <div style={{width:"150px",borderRadius: "10px 100px 100px 10px", backgroundColor:"white", padding:"10px"}}>Registrarse</div>
   </div>
  </div>
)}

</div>
);
}