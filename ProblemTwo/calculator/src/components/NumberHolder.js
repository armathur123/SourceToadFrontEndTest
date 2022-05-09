const NumberHolder = ({value}) => {
    return (
        <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', paddingRight:20}}>
            <h2>{value}</h2>
        </div>
    );
}
 
export default NumberHolder;