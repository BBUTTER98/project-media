import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import Photo from "./Photo";
import Skeleton from "./Skeleton";

function PhotosList({album}){
    const {title, id} = album;
    const {data, error, isLoading, refetch} = useFetchPhotosQuery(id);
    const [addPhoto] = useAddPhotoMutation();
    const handleClick = () =>{
        addPhoto(id);
        refetch();
    }
    let content;
    if(isLoading){
        content = <Skeleton times={4} className="w-50 h-50" />
    }
    else if(error){
        content = <div>Error during rendering photos</div>
    }
    else{
        content = data.map(photo=><Photo key={photo.id} data={photo} />)
    }
    return <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Photos in {title}</h3>
            <Button onClick={handleClick}>
                + Add Photo
            </Button>
        </div>
        <div className="flex justify-between flex-wrap">
            {content}
        </div>
    </div>
}
export default PhotosList;