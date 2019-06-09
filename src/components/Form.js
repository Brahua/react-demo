import React, { Component } from "react";
import data from "./data.json";

function ModalCredenciales(props) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-dark">Credenciales enviadas</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-dark">
            <p>Email: {props.email}</p>
            <p>Contraseña: {props.contrasenia}</p>
            <p>Cargo: {props.cargo}</p>
            <p>Mensaje: {props.mensaje}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      contrasenia: "",
      mensaje: "",
      cargo: "",
      cargos: data.cargos
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    alert(
      "Correo: " + this.state.email + "\nContraseña: " + this.state.contrasenia
    );
    e.preventDefault();
  }
  componentDidMount() {
    console.log(this.state.cargos);
  }
  
  
  render() {
    const itemCargo = this.state.cargos.map((cargo)=>{
        return(
            <option key={cargo.id} value={cargo.nombre}>{cargo.nombre}</option>
        )
    })
    return (
      <>
        <form className="col-md-6" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingrese su correo"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Contraseña"
              name="contrasenia"
              value={this.state.contrasenia}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputState">Cargo</label>
            <select id="inputState" className="form-control" name="cargo" onChange={this.handleChange}>
              <option value="">Seleccionar</option>
              {itemCargo}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Mensaje</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="mensaje"
              value={this.state.mensaje}
              onChange={this.handleChange}
            />
          </div>
          {/* <button type="submit" className="btn btn-primary">
                    Enviar
                  </button> */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Enviar
          </button>
        </form>
        <ModalCredenciales
          email={this.state.email}
          contrasenia={this.state.contrasenia}
          mensaje={this.state.mensaje}
          cargo={this.state.cargo}
        />
      </>
    );
  }
}

export default Form;