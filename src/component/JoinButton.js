export default function JoinButton({ age }) {
  return (
    <>
      <button disabled={age < 19}>가입</button>
      {age < 19 ? (
        <h3 style={{ color: "red" }}>성인만 가입 가능</h3>
      ) : (
        <h3 style={{ color: "white" }}>가입 가능</h3>
      )}
    </>
  );
}
