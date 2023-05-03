import User from "./Item";
function UserList({items}){
    const displayedItems = items.map((item) => <User key={item.id} item={item} />);
    return <div>{displayedItems}</div>
}
export default UserList;