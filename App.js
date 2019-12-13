import React,{Component} from 'react'

class App extends Component{
	render(){
		return (
             <ul className="my-list">
                 <li>Lava</li>
                 <li>I love React</li>
             </ul>
			)
		///var child1 = React.createElement('li',null,'Lava')
		//var child2 = React.createElement('li',null,'I love React')
		//var root = React.createElement('ul',{className:'my-list'},child1,child2)	
	}
}

export default App