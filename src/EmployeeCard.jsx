export function EmployeeCard({ employeeName, designation, experience }) {
  return (
    <div>
      <h1>Employee Card</h1>
      <h2>{employeeName}</h2>
      <p>
        <span style={{ color: "green" }}>Designation :</span> {designation}
      </p>
      <p>
        <span style={{ color: "blue" }}> Experince :</span> {experience} years
      </p>
    </div>
  );
}
