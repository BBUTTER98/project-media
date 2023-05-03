import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useDropAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function Album({ data }) {
    const [removeAlbum, status] = useDropAlbumMutation();
    const handleClick = () =>{
        removeAlbum(data.id);
    }
	const header = (
		<>
			<Button className="mr-2" onClick={handleClick}>
				<GoTrashcan />
			</Button>
			{data.title}
		</>
	);
	return (
		<ExpandablePanel header={header}>
			<PhotosList album={data} />
		</ExpandablePanel>
	);
}
export default Album;
