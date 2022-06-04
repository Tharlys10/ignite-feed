export function Post(props) {
  return (
    <div>
      <b>{props.author}</b>
      <p>{props.content}</p>
    </div>
  );
}