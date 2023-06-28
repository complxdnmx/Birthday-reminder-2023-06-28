import './Container.css'

function Container (props) {
    console.log(props.children) //parodys div, kaip children
   return (
    <div className="container">
        {props.children}
    </div>
   ) 
}

export default Container
