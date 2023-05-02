// Build an EmployeeCard component in React to display name, designation and work experience of a person. Pass name, designation and work experience as props.

// The colour of “Designation:” should be green.
//The colour of “Experience:” should be blue.

import { EmployeeCard } from "./EmployeeCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <EmployeeCard
        employeeName={"Sandesh Shinde"}
        designation={"Developer"}
        experience={2}
      />
    </div>
  );
}
