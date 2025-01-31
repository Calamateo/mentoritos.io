import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import meteoro from '../global/assets/images/meteorite2.jpg'
import { cerrarSesionAccion } from '../Redux/mentoritoDucks'
import { withRouter } from "react-router-dom";
import { useDispatch } from 'react-redux'
//import { auth } from '../firebase';
import { useSelector } from 'react-redux'



function Navbar(props) {
    const dispatch = useDispatch()

    const cerrar = () => {
        dispatch(cerrarSesionAccion())
        setTimeout(() => {
            window.location.reload()
        }, 500);
        props.history.push('/')

    }



    const usuario = useSelector(store => store.usuario.user)
    return (
        <div>
            {
                props.firebaseUser !== null ?
                    (
                        <nav className="navbar navbar-expand-lg bg-white fixed-top">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="/"><img src={meteoro} alt=""
                                    width="50" className="d-inline-block align-text-middle" />
                                    Mentoritos</Link>
                                <div className="collapse navbar-collapse justify-content-lg-end justify-content-sm-start align-items-center"
                                    id="navbarNavAltMarkup">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/mentorsMenu">mentores</Link>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/aboutUs">sobre nosotros</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/mentorsProfile">perfil mentor</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/UserProfile_">mi perfil usuario</Link>
                                        </li>
                                        <li className="nav-item dropstart">
                                            <Link className="nav-link dropdown-toggle" to="!#" id="navbarDropdownMenuLink" role="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img id="profileImg"
                                                    src={usuario.fotoURL}
                                                    width="40" height="40" className="rounded-circle" alt="" />
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                                <li><Link className="dropdown-item" to="/configuracion">Editar perfil</Link></li>
                                                <li><span className="dropdown-item" style={{ cursor: "pointer" }} onClick={() => cerrar()}>Cerrar sesión</span></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    ) :
                    (<nav className="navbar navbar-expand-lg bg-white fixed-top">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/"><img src={meteoro} alt=""
                                width="50" className="d-inline-block align-text-middle" />
                                Mentoritos</Link>
                            <div className="collapse navbar-collapse justify-content-lg-end justify-content-sm-start"
                                id="navbarNavAltMarkup">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/mentorsMenu">mentores</Link>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/aboutUs">sobre nosotros</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/mentorsProfile">mi perfil</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/singUp' className="btn ms-lg-4 me-lg-3 rounded-pill buttons">crea una cuenta</Link>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">inicia sesión</NavLink>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>)
            }
        </div>
    )
}

export default withRouter(Navbar)