import useThunk from "../hooks/useThunk";
import { removeUser } from "../store";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumsList";
function User({ item }) {
	const [dropUser, isDeleted, isError] = useThunk(removeUser);
	const handleClick = () => {
		dropUser(item.id);
	};
	const header = (
		<>
			<Button className="mr-3" loading={isDeleted} onClick={handleClick}>
				<GoTrashcan />
			</Button>
			{isError && <div>Error deleting user.</div>}
			{item.name}
		</>
	);
	return (
		<ExpandablePanel header={header}>
            <AlbumList user={item} />
        </ExpandablePanel>
	);
}
export default User;
