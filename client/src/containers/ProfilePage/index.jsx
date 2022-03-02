import { useEffect, useState } from "react";
import * as userService from "../../api/user.service";

export default function Profile() {
	const [profile, setProfile] = useState();

	const fetchProfileInfo = async () => {
		await userService.getProfile().then((res) => {
            console.log(res.data, "RES DATA")
			setProfile(res.data.data);
            console.log(profile)
		});
	};

	useEffect(() => {
		fetchProfileInfo();
	}, []);

	return (
		<div>
			<h1>Profile Page</h1>
		</div>
	);
}
