import TagItem from "./TagItem";

/**
 * A component that displays a list of tags
 * @param {string[]|Object[]} tags Array of strings to be displayed as tags. If more 
 * control is needed, pass in object instead of string with format: 
 * {
 *      content: "this is the text on tag [must be unique]",
 *      styles: {
 *          [style Object]
 *      }
 * }
 * @type {ReactElement}
 */
const TagsList = ({tags=[]}) => {
    return (
        <div className="tags-list--wrapper">
            {tags.map(tag => <TagItem key={tag?.content ?? tag} content={tag}/>)}
        </div>
    );
}

export default TagsList;
