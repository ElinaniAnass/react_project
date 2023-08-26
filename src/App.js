import React,{ Component} from 'react';
import TodoItems from './components/todoitems/todoitems';
import AddItem from './components/additem/additem';
class App extends Component {
  state = {
    items : [
      {id:1,name:"Anass",age:25},
      {id:2,name:"Soufiane",age:26},
      {id:3,name:"Nihal",age:17}
    ]
  }

  deleteItem = (id) =>{
     let items = this.state.items.filter(item =>{
      return item.id !== id;
     })
     this.setState({items});
  }
 // this.setState({items}) ila kenti adir items : items nafs smya donc bla matktbha ela joj merat

  addItem = (item) => {
    item.id = Math.random(); 
    let items = this.state.items;
    items.push(item);
    this.setState({items})

  }


  render(){
    return (
      <div className="App container">
          <h1 className='text-center'>First App</h1>
          <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
          <AddItem addItem = {this.addItem} />
      </div>
    );
  }
}

export default App;


