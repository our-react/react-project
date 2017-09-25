
class RootComponent extends React.Component {   
    
    render(){

        return (
            <div className="app_fir">
               {this.props.children}
            </div>
        )
    }
}




export default RootComponent