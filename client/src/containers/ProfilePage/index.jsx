import { useEffect, useState } from "react";
import * as userService from "../../api/user.service";

export default function Profile() {
	const [profile, setProfile] = useState();

	const fetchProfileInfo = async () => {
		await userService.getProfile().then((res) => {
			setProfile(res.data.data);
		});
	};

	useEffect(() => {
		fetchProfileInfo();
	}, []);
	if(profile) {
		return (
			<div>
				<h1>Profile Page</h1>
				<h3>Hello {profile.firstName}</h3>
			</div>
		);
	} else {
		return(
			<h1>Please login to view this page</h1>
		)
	}
	
}
