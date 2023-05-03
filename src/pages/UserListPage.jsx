import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Skeleton from "../components/Skeleton";
import Button from "../components/Button";
import useThunk from "../hooks/useThunk";
import UserList from "../components/UserList";

function UserListPage() {
	const dispatch = useDispatch();
	const [addUserFunction,isCreatingUser, isUserError] = useThunk(addUser);
	const [fetchUserFunction,isLoadingUsers, isFetchingError] = useThunk(fetchUsers);
	const { data } = useSelector((state) => state.users);
	useEffect(() => {
		fetchUserFunction();
	}, []);
	const handleUserAdd = () => {
		addUserFunction();
		dispatch(fetchUsers());
	};
	let content;
	if (isLoadingUsers) {
		content =  <Skeleton times={6} className="h-10 w-full" />;
	}else if (isFetchingError) {
		content =  <div>Error</div>;
	}
	else{
		content = <UserList items={data} />
	}
	return (
		<div>
			<div className="flex flex-row justify-between m-3">
				<h1 className="m-2 text-xl">Users</h1>
				<Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
			</div>
			{content}
		</div>
	);
}
export default UserListPage;
