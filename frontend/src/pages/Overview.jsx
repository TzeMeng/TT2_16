import { useHistory, useParams } from "react-router";
import TableExpense from "../components/TableExpense";
import useAuth from "../hooks/useAuth";
import styles from "../styles/Overview.module.css";

const Overview = ({}) => {
	const { projectId } = useParams()
	const history = useHistory();
	const { userId } = useAuth();

	const handleAddNewExpense = () => {
		history.push(`/projects/${projectId}/create`);
	}
	
	const expenses = [
		{
			"id": 1,
			"project_id": 2,
			"category_id": 2,
			"name": "Server Maintenance",
			"description": "Server maintenance and upgrading work to incorporate BC plans",
			"amount": 30000,
			"created_at": "2021-11-04T16:00:00.000Z",
			"created_by": "Jacky",
			"updated_at": "2021-11-06T16:00:00.000Z",
			"updated_by": "Jacky"
		},
		{
			"id": 2,
			"project_id": 3,
			"category_id": 4,
			"name": "Consultant",
			"description": "Consultancy services for integration work",
			"amount": 10000,
			"created_at": "2021-11-06T16:00:00.000Z",
			"created_by": "Helen",
			"updated_at": "2021-11-07T16:00:00.000Z",
			"updated_by": "Helen"
		}
	]

	return (
		<div className={styles.outerPage}>
			<h1>Overview of expenses</h1>
			<TableExpense data={expenses}/>
			<button className={styles.button} onClick={handleAddNewExpense}>Add new expense</button>
		</div>
	)
}

export default Overview
