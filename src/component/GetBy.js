export default function GetBy() {
  return (
    <div>
      <div>
        <h1>Hello</h1>
        <h2>World</h2>
      </div>
      <div>
        <div>
          <label htmlFor="username">이름</label>
          <input type="text" id="username" value="Tom" readOnly />
        </div>
        <div data-testid="my-div" />
        <div>
          <label htmlFor="profile">자기소개</label>
          <textarea id="profile" />
        </div>
      </div>
    </div>
  );
}
