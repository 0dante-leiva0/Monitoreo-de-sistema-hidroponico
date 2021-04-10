// Instalar //
// npm install -g json-server
// Crear y ejecutar el archivo json
// json-server --watch ./db/db.json

import React from 'react';
// CARD
function Card(propiedad){
  const {nombre, apellido,onClickDelete,onClickEdit}=propiedad;
  function borrar(){
      onClickDelete(propiedad)
  }
  function editar(){
      onClickEdit(propiedad)
  }
  return (
      <article>
          <ul>
              <li>Nombre: {nombre}  </li>
              <li>Apellido: {apellido}</li>
          </ul>
          <button onClick={borrar}>Eliminar</button>
          <button onClick={editar}>Editar</button>
      </article>
  );
}
// FORMULARIO
const INIT_STATE={
  id:"",
  nombre:"",
  apellido:"",
}
class Form extends React.Component{
  constructor(props) {
      super(props);
      this.state = INIT_STATE;
  }
  //
  componentWillReceiveProps(nextProps){
      this.setState(nextProps.userEdit);
  }
  //al hacer click se crea el evento 
  handleChange = (event) => {
      console.log("evento",event.target);
      this.setState({
          //a traves de name obtenemos el valor del 
          //atributo lo asosciamos al estado y lo manipulamos
          [event.target.name]: event.target.value,
      });
  };
  //
  handleSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state);
      this.setState(INIT_STATE);
  };
  render(){
      return(
          <form onSubmit={this.handleSubmit}>  
              <h1>Formulario de usuarios</h1>
              <input 
              name="nombre" 
              onChange={this.handleChange} 
              placeholder="Nombre" 
              value={this.state.nombre} />
              <br/>
              <input 
              name="apellido" 
              onChange={this.handleChange} 
              placeholder="Apellido" 
              value={this.state.apellido} />
              <br/>
              <button>{this.props.textButton}</button>
          </form>
        )
    }  
} 

const Initial_State={
    usuarios:[],
    editUser: null,
}
// GET DELETE POST PUT
class Peticiones extends React.Component{
  constructor(){
    super();
    this.state=Initial_State;
  }
  componentDidMount(){
    this.getUser();
  }
  getUser=()=>{
    fetch("http://localhost:3000/usuarios")
    .then((response) => response.json())
    .then((usuarios)=>this.setState({usuarios}));
  };
  //DELETE
  handleClickDelete = (props) =>{
    fetch(`http://localhost:3000/usuarios/${props.id}`,{
      method: 'DELETE',
      }).then(response => response.json())
      .then((user) => console.log("usuario",user));
      this.setState({
        usuarios: this.state.usuarios.filter(user => user.id !== props.id)
      })
    }
  //POST
  addUser = (user) =>{
  fetch("http://localhost:3000/usuarios",{
    method: "POST",
    body: JSON.stringify(user),
    headers:{"Content-type":"httplication/json; charset=UTF-8",
    },
    })
    .then((response) => response.json())
    .then((user)=>
    this.setState({
                  usuarios: this.state.usuarios.concat(user),
      })
    );
  };
  //PUT
  //Setea el nuevo estado indicando que hay nuevos datos
  handleClickEdit = (props) => {
    console.log("propiedades", props);
    this.setState({
    editUser: props,
    });
  };
  editUser=(user) =>{
    console.log("usuarios",user);
    fetch(`http://localhost:3000/usuarios/${user.id}`,{
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
       "Content-type":"httplication/json; charset=UTF-8",
      },
    })
    .then(response => response.json())
    .then((user) => {
    this.setState({editUser: null});
    this.getUser();
    });
  }
    //
    render(){
      const {usuarios, editUser} =this.state; //restructuramos
      return( 
        <div className="http"> 
          {editUser ? (
          <Form  userEdit={editUser} 
          onSubmit={this.editUser} 
          textButton="Editar"/>):(
          <Form  
            onSubmit={this.addUser} 
            textButton="Crear"/>)}
            {usuarios.length ? usuarios.map((usuario) => (
          <Card 
            key={usuario.id}
            id={usuario.id}
            nombre={usuario.nombre} 
            apellido={usuario.apellido} 
            onClickDelete={this.handleClickDelete}
            onClickEdit={this.handleClickEdit}
          />)):"No hay usuarios"}
        </div>
      )
    }

}
export default Peticiones;//exportamos 



