function InstructionDisplay({instructions}){
    return (
        <ol>
            {instructions.map(function(step){
                return (
                    <li key={step}>{step}</li>
                )
            })}
        </ol>
    );
}

export default InstructionDisplay;
