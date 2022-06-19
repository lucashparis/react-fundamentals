export default function StepForm(props){
    
    return (
        <div>
            <label htmlFor="stepInput"></label>
            <input id='step' 
                type="number" 
                value={props.step}
                onChange={e => props.setStep(+e.target.value)}
            />
        </div>
    );
};