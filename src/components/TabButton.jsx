export default function TabButton({children, isSelected, ...props}) {
    return (
      <li>
          <button className={isSelected ? 'active' : ''}
                  {...props}
          >{children}</button>
      </li>
    );
};



// export default function TabButton(props) {
//     return (
//         <li>
//             <button className={props.isSelected ? 'active' : ''} onClick={props.onSelect}>{props.children}</button>
//         </li>
//     )
// };