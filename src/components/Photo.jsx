import { useDropPhotoMutation } from "../store";

function Photo({data}){
    const {id, url} = data;
    const [removePhoto] = useDropPhotoMutation();
    const handleMouseOver = () =>{
        removePhoto(id);
    }
    return <img src={url} alt="photo" onMouseOver={handleMouseOver} />
}
export default Photo;