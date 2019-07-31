import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author="Alex"
					timeAgo="Today at 4:45PM"
					avatar={ faker.image.avatar() }
					content={ faker.hacker.phrase() }
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Peter"
					timeAgo="Today at 2:00AM"
					avatar={ faker.image.avatar() }
					content={ faker.hacker.phrase() }
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Jane"
					timeAgo="Today at 6:25PM"
					avatar={ faker.image.avatar() }
					content={ faker.hacker.phrase() }
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App/>, document.querySelector('#root'));

