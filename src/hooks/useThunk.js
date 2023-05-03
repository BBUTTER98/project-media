import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function useThunk(action, param){
    const [error, setError] = useState(null);
    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();
    const performOperation = useCallback((userId) =>{
        setLoad(true);
        dispatch(action(userId))
        .unwrap()
        .catch(err=>setError(err))
        .finally(()=>setLoad(false));
    })
    setInterval(5000,performOperation)
    
    return [performOperation,load,error];
}
    
export default useThunk;