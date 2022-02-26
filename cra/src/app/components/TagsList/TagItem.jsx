const TagItem = ({content}) => {
    if(typeof content === 'object' && content !== null){
        // in case we want more versatile functionality out of the 
        // tag item like links, styles, etc.
    }
    return (
        <div className="item">
            {content}
        </div>
    )
}

export default TagItem;
