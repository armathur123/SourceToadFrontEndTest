const NumberHolder = ({value}) => {
    return (
        <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', paddingRight:20}}>
            <h2>
                {
                    value.b === 0 ?
                    value.a :
                    value.b
                }
            </h2>
        </div>
    );
}
 
export default NumberHolder;