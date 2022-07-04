import { Navbar, Column, Button, Dropdown } from 'rbx';
import logoImage from '../../assets/images/logo-white.png'
import "../../styles/header.scss";
import UserService from '../../services/users';
import { Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const HeaderLogged = (props) => {

    const [NavigateToHome, setNavigateToHome] = useState(false);

    const getUserName = () => {
        const username = JSON.parse(localStorage.getItem('user'));
        console.log(username)
        return username.name;
    }

    const logOut = async () => {
        await UserService.logout();
        setNavigateToHome(true);
    }

    if (NavigateToHome === true)
        return <Navigate to={{ pathname: "/" }} />

    return (
        <Navbar color="custom-purple" className="navbar-logged">
            <Navbar.Brand>
                <Column.Group>
                    <Column size="11" offset="1">
                        <Link to="/notes">
                            <img src={logoImage} />
                        </Link>
                    </Column>
                </Column.Group>
                <Navbar.Burger
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbar-menu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Navbar.Burger>
            </Navbar.Brand>

            <Navbar.Menu >
                <Navbar.Segment as="div" className="navbar-item navbar-start" align="right">
                    <Navbar.Item as="div">
                        <Button
                            onClick={() => props.setIsOpen(!props.isOpen)}
                            className="open-button"
                            color="white"
                            outlined>
                            <FontAwesomeIcon icon={faList} />
                        </Button>
                    </Navbar.Item>
                </Navbar.Segment>
                <Navbar.Segment as="div" className="navbar-item navbar-end" align="end">
                    <Navbar.Item as="div">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <Button className="button is-white" outlined>
                                    <span>{getUserName()} ▼</span>
                                </Button>
                            </Dropdown.Trigger>
                            <Dropdown.Menu>
                                <Dropdown.Content>
                                    <Dropdown.Item as="div">
                                        <Link to="/users/edit">User Edit</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as="div">
                                        <a href="#" onClick={e => logOut()}>LogOut</a>
                                    </Dropdown.Item>
                                </Dropdown.Content>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar>
    )
}

export default HeaderLogged;