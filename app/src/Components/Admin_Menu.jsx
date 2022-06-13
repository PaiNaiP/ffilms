import React, { Component } from 'react'
import '../Styles/Admin_Menu.css'
import { AddMovie } from './AddMovie';
import { DeleteMovie } from './DeleteMovie';
import { MovieList } from './MovieList';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function SplitPane(props) { 
    //пример композиции (гибкого наследования) в котором 
    //компоненты разделены на две колонки: правого и левого меню
    //это реализовано с помощью пропсов (входные данные React-компонентов, 
    //передаваемые от родительского компонента дочернему компоненту)
    return(
        <div className='SplitPane'>
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitRight">
                {props.right}
            </div>
        </div>
    )
}

export default class Admin_Menu extends Component { 
    //вызов класса в качестве компонента, в котором будет находиться вся последующая админская панель
    constructor(props){
        super (props) //позволяет использовать в конструкторе this
        this.handleSetMovieList = this.handleSetMovieList.bind(this);
        this.handleAddMovieList = this.handleAddMovieList.bind(this);
        this.handleDeleteMovieFromList = this.handleDeleteMovieFromList.bind(this);
        this.state = {choise: ''};
    }
    render(){
        return(
            <> 
            {/* Вызов функции в родительский компонент */}
            <SplitPane left={ 
                <Nav className='flex-column' variant='pills' defaultActiveKey="#first">
                    <Nav.Item>
                    <Nav.Link  eventKey='#first' className="movie-list-left" onClick={this.handleSetMovieList}>Список фильмов</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey='second' onClick={this.handleAddMovieList}>Добавить фильм</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey='third' className="delete-movie-left" onClick={this.handleDeleteMovieFromList}>Удалить фильм</Nav.Link>
                    </Nav.Item>
                </Nav>
            } right={
                <>
                {this.state.choise === '' && <MovieList/>}
                {this.state.choise === 'add' && <AddMovie/>}
                {this.state.choise === 'delete' && <DeleteMovie/>}
                </>
            }/>
            </>
        )
    }
    handleSetMovieList(){
        this.setState({choise: ''})
    }
    handleAddMovieList(){
        this.setState({choise: 'add'})
    }
    handleDeleteMovieFromList(){
        this.setState({choise: 'delete'})
    }

}
