import { Component } from "react";
import CartWidget from "./CartWidget";
import "./NavbarStyle.css";

const MenuData = [
    {
        title: "Inicio",
        url: "#",
        name: "nav-links",
        icon: ""
    },
    {
        title: "Productos",
        url: "#",
        name: "nav-links",
        icon: ""
    },
    {
        title: "Sobre Nosotros",
        url: "#",
        name: "nav-links",
        icon: ""
    },
    {
        title: "Contacto",
        url: "#",
        name: "nav-links",
        icon: ""
    }
]


class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <ul className="nav-menu">
                    {MenuData.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.name}><i className={item.icon}></i>{item.title}</a>
                            </li>
                        )
                    })}
         
                </ul>
                <h1 className="logo"><CartWidget /></h1>
            </nav>
        );
    }
}

export default Navbar