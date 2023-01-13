let num = 3;

function hora() {
  num++;
  console.log(num);
  return (
    <div>
      <h1>HORA:</h1>
      <span>{num}</span>
    </div>
  );
}

export default hora;
