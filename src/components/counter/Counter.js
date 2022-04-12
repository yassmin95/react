import './Counter.css'

function Counter(props){
    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <h2>Counter</h2>
                <p>{props.counter}</p>
            </div>
        </div>
    );
}


export default Counter;