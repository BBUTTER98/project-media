import { GoTrashcan } from "react-icons/go";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";
import Album from "./Album";
function AlbumList({ user }) {
	const { data, error, isLoading, refetch } = useFetchAlbumsQuery(user);
    const [addAlbum,{isLoaded}] = useAddAlbumMutation(user);
	let content;
	const handleClick = () => {
        addAlbum(user);
        refetch()
    };
	if (isLoading) {
		content = <Skeleton times={3} />;
	} else if (error) {
		content = <div>Error loading data</div>;
	} else {
		content = data.map((album) => {
			return (
				<Album key={album.id} data={album}/>
			);
		});
	}
	return (
		<div>
			<div className="m-2 flex flex-row items-center justify-between">
				<h3 className="text-lg font-bold">Albums for {user.name}</h3>
				<Button className="flex-grow-0" onClick={handleClick} loading={isLoaded}>
                    + Add Album
                </Button>
			</div>
			<div>{content}</div>
		</div>
	);
}
export default AlbumList;
