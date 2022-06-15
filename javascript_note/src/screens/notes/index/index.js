import {useState} from 'react';
import HeaderLogged from '../../../components/header_logged'
import Notes from '../../../components/notes'

const NotesScreen = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <HeaderLogged isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Notes isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
};

export default NotesScreen;