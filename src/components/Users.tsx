import React from "react";
import {useGetUsersQuery, useCreatePostMutation} from "../services/userApi";

const Users = () => {

	const {data, error, isError, isLoading, isSuccess, status, refetch} = useGetUsersQuery(null, {
		pollingInterval: 15000,
	});

	const [createPost, mutationObj] = useCreatePostMutation();

	console.log(mutationObj);

	const handleCreateUser = async () => {
		const randomNumber = Math.floor(Math.random() * 10000);
		await createPost({
			id: randomNumber,
			name: `test${randomNumber}`,
			username: `test${randomNumber}`,
			email: `test${randomNumber}@mail.ru`
		})
	}

	return (
		<div style={{backgroundColor: 'lightblue', padding: 10}}>
			<div>
				<h1>REFETCH</h1>
				<button onClick={() => refetch()}>refetch</button>
			</div>
			<div>
				<h1>User MUTATION</h1>
				<button onClick={handleCreateUser}>addUser</button>
				<div>
					mutationObj
				</div>
				<div>{JSON.stringify(mutationObj)}</div>
			</div>
			<div>
				<h1>User QUERY</h1>
				{isLoading && <h1>loading</h1>}
				{isError && <h1>{JSON.stringify(error)}</h1>}
				{isSuccess && (
					JSON.stringify(data)
				)}
			</div>
		</div>
	);
};

export default React.memo(Users);
